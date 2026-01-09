import z from "zod";

// Schema for updating the user profile
export const updateProfileSchema = z.object({
  name: z.string().min(3, "Name must be at leaast 3 characters"),
  email: z.string().min(3, "Email must be at leaast 3 characters"),
});

// Schema to update users
export const updateUserSchema = updateProfileSchema.extend({
  id: z.string().min(1, "ID is required"),
  role: z.string().min(1, "Role is required"),
});
