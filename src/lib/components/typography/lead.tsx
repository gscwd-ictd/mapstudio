import { HTMLAttributes, forwardRef } from "react";

export const Lead = forwardRef<HTMLParagraphElement, Omit<HTMLAttributes<HTMLParagraphElement>, "className">>(
  ({ children, ...props }, ref) => {
    return (
      <p ref={ref} {...props} className="text-xl text-muted-foreground">
        {children}
      </p>
    );
  }
);

Lead.displayName = "Lead";
