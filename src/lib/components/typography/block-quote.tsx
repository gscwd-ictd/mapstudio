import { BlockquoteHTMLAttributes, forwardRef } from "react";

export const BlockQuote = forwardRef<
  HTMLQuoteElement,
  Omit<BlockquoteHTMLAttributes<HTMLQuoteElement>, "className">
>(({ children, ...props }, ref) => {
  return (
    <blockquote ref={ref} {...props} className="mt-6 border-l-2 pl-6 italic">
      {children}
    </blockquote>
  );
});

BlockQuote.displayName = "BlockQuote";
