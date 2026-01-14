export type SignInFormState = {
  success: boolean;
  message: string;
};

export type SignUpFormState = {
  success: boolean;
  message?: string;
  fieldErrors?: {
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  };
  values?: {
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  };
};
