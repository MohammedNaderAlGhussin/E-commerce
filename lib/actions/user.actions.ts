"use server";

import { isRedirectError } from "next/dist/client/components/redirect-error";
import { auth, signIn, signOut } from "../auth/auth";
import { signInFormSchema, signUpFormSchema } from "../validators/auth";
import { SignInFormState, SignUpFormState } from "@/types/auth";
import { hashSync } from "bcrypt-ts-edge";
import prisma from "../prisma";
import { formatError } from "../utils";
import { ZodError } from "zod";
import { shippingAddressSchema } from "../validators/shipping-adress";
import { ShippingAddress } from "@/types/shipping-adress";

// Sign in the user with credentials
export async function signInWithCredentials(
  _prevState: SignInFormState,
  formData: FormData
) {
  try {
    const user = signInFormSchema.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    await signIn("credentials", user);

    return { success: true, message: "Signed in successfully" };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    return { success: false, message: "Invalid email or password" };
  }
}

// Sign user out
export async function signOutUser() {
  await signOut();
}

// Sign up user
export async function signUpUser(
  _prevState: SignUpFormState,
  formData: FormData
) {
  try {
    const user = signUpFormSchema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    });

    const plainPassword = user.password;

    user.password = hashSync(user.password, 10);

    await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });

    await signIn("credentials", {
      email: user.email,
      password: plainPassword,
    });

    return { success: true, message: "User registered successfully" };
  } catch (error) {
    if (isRedirectError(error)) throw error;

    if (error instanceof ZodError) {
      return {
        success: false,
        fieldErrors: error.flatten().fieldErrors,
      };
    }

    return {
      success: false,
      message: formatError(error),
    };
  }
}

// Get user by the ID
export async function getUserById(userID: string) {
  const user = await prisma.user.findFirst({
    where: { id: userID },
  });
  if (!user) throw new Error("User was not found!");
  return user;
}

// Update the user's address
export async function updateUserAddress(data: ShippingAddress) {
  try {
    const session = await auth();

    const currentUser = await prisma.user.findFirst({
      where: { id: session?.user?.id },
    });

    if (!currentUser) throw new Error("User not found");

    const address = shippingAddressSchema.parse(data);

    await prisma.user.update({
      where: { id: currentUser.id },
      data: { address },
    });

    return {
      success: true,
      message: "User updated successfully",
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}
