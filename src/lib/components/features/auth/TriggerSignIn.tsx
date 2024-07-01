"use client";

import { triggerSignIn } from "@mapstudio/lib/utils/trigger-signin";
import { useEffect, type FunctionComponent } from "react";

export const TriggerSignIn: FunctionComponent = () => {
  useEffect(() => {
    triggerSignIn();
  }, []);

  return null;
};
