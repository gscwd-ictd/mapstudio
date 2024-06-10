import type { FunctionComponent, PropsWithChildren } from "react";

export const Leading: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <p className="text-xl text-muted-foreground">{children}</p>;
};
