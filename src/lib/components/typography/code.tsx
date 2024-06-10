import { HTMLAttributes, forwardRef } from "react";

export const Code = forwardRef<HTMLElement, Omit<HTMLAttributes<HTMLElement>, "className">>(
  ({ children, ...props }, ref) => {
    return (
      <code
        ref={ref}
        {...props}
        className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
      >
        {children}
      </code>
    );
  }
);

Code.displayName = "Code";
