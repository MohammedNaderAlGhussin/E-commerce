export type SignInFormState = {
  success: boolean;
  message: string;
};

export type SignUpFormState = {
  success: boolean;
  fieldErrors?: {
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  };
  message?: string; // optional global error
};
