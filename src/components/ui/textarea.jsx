import * as React from "react";
import { cn } from "lib/utils";
import { cva } from "class-variance-authority";

const textareaVariants = cva(
  "flex min-h-[80px] w-full rounded-md border border-input bg-background focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 ",
  {
    variants: {
      tarOutlineBluegray400: {
        gray_900: "!border-blue_gray-400 border border-solid bg-gray-900",
      },
      size: {
        xs: "h-[200px] p-3",
      },
      shape: {
        round: "rounded-[14px]",
      },
    },
    defaultVariants: {},
  },
);

const Textarea = React.forwardRef(
  ({ variant = "tarOutlineBluegray400", size = "xs", shape, colorScheme = "gray_900", className, ...props }, ref) => {
    return (
      <textarea
        className={cn(className, textareaVariants({ [variant]: colorScheme, shape, size }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };

