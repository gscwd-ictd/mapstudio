"use client";

import { GrowthBook, GrowthBookProvider } from "@growthbook/growthbook-react";
import { FunctionComponent, PropsWithChildren, useEffect, useState } from "react";
import { config } from "../helpers/growthBookEnvHelper";

export const GrowthBookClientProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [growthbook] = useState(() => {
    return new GrowthBook({
      apiHost: config.host,
      clientKey: config.clientKey,
      enableDevMode: config.devMode,
    });
  });

  useEffect(() => {
    growthbook.init();
  }, [growthbook]);

  return <GrowthBookProvider growthbook={growthbook}>{children}</GrowthBookProvider>;
};
