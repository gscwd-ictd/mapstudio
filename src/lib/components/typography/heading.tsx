import { HTMLAttributes, forwardRef } from "react";

type HeadingProps = Omit<HTMLAttributes<HTMLHeadingElement>, "className"> & {
  as?: "h1" | "h2" | "h3" | "h4";
  children: React.ReactNode;
};

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as = "h4", children, ...props }, ref) => {
    if (as === "h1") {
      return (
        <h1
          ref={ref}
          {...props}
          className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
        >
          {children}
        </h1>
      );
    }

    if (as === "h2") {
      return (
        <h2 ref={ref} {...props} className="scroll-m-20 text-3xl font-semibold tracking-tight">
          {children}
        </h2>
      );
    }

    if (as === "h3") {
      return (
        <h3 ref={ref} {...props} className="scroll-m-20 text-2xl font-semibold tracking-tight">
          {children}
        </h3>
      );
    }

    if (as === "h4") {
      return (
        <h4 ref={ref} {...props} className="scroll-m-20 text-xl font-semibold tracking-tight">
          {children}
        </h4>
      );
    }
  }
);

Heading.displayName = "Heading";
