"use server";

import { signIn, signOut } from "@/auth";
import { signInFormSchema, IUser } from "../validator";
import { isRedirectError } from "next/dist/client/components/redirect-error";

// Sign in the user with credentials
export async function signInWithCredentials(prevState: unknown, formData: FormData) {
  try {
    const parsedData = signInFormSchema.parse(formData);
    const user: IUser = {
      email: parsedData.email,
      password: parsedData.password
    };
    // Check if the user is already signed in
    const isSignedIn = await signIn("credentials", {
      redirect: false,
      ...user
    });
    if (isSignedIn?.error) {
      return { success: false, message: isSignedIn.error };
    }

    await signIn("credentials", user);

    return { success: true, message: "Signed in successfully" };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
  }
}

// Sign the user out
export async function signOutUser() {
  await signOut();
}
