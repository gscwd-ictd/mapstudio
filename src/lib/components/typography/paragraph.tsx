import { HTMLAttributes, forwardRef } from "react";

type ParagraphProps = Omit<HTMLAttributes<HTMLParagraphElement>, "className"> & {
  size?: "default" | "small" | "large";
  muted?: boolean;
};

export const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ size, muted, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        {...props}
        className={`${size === "small" ? "text-sm" : size === "large" ? "text-lg leading-7" : "leading-6"} ${
          muted && "text-muted-foreground"
        }`}
      >
        {children}
      </p>
    );
  }
);

Paragraph.displayName = "Paragraph";
