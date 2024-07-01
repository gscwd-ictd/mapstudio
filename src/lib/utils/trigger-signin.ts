"use server";

import { signIn } from "@logto/next/server-actions";
import { logtoConfig } from "./logto-config";

export const triggerSignIn = async () => {
  await signIn(logtoConfig);
};
