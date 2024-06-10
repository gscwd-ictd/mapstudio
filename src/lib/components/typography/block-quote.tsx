import type { FunctionComponent, PropsWithChildren } from "react";

type BlockQuoteProps = PropsWithChildren & {
  italic?: boolean;
};

export const BlockQuote: FunctionComponent<BlockQuoteProps> = ({ children, italic = true }) => {
  return <blockquote className={`mt-6 border-l-2 pl-6 ${italic ? "italic" : ""}`}>{children}</blockquote>;
};
