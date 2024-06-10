import type { FunctionComponent, PropsWithChildren } from "react";

export const InlineCode: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {children}
    </code>
  );
};
