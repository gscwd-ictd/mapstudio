import type { FunctionComponent, PropsWithChildren } from "react";

export const Paragraph: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
};
