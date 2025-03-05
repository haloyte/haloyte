import * as React from "react";
import { cn } from "../../lib/utils";
import { cva } from "class-variance-authority";

const inputVariants = cva(
  "w-full flex items-center justify-center self-stretch cursor-text border-blue_gray-400 border border-solid bg-gray-900 rounded-[14px]",
  {
    variants: {
      fill: {
        gray_900: "bg-gray-900",
      },
      size: {
        xs: "h-[54px] px-3",
      },
      shape: {
        round: "rounded-[14px]",
      },
    },
    defaultVariants: {},
  },
);

const Input = React.forwardRef(
  ({ variant = "fill", colorScheme = "gray_900", shape, size = "xs", className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ [variant]: colorScheme, size, shape, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

const InputGroup = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div className={cn("relative flex w-full", className)} {...props} ref={ref}>
      {children}
    </div>
  );
});
InputGroup.displayName = "InputGroup";

const InputLeftElement = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      className={cn("absolute aspect-square h-full left-0 justify-center flex items-center", className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});
InputLeftElement.displayName = "InputLeftElement";

const InputRightElement = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      className={cn("absolute aspect-square h-full right-0 justify-center flex items-center", className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});
InputRightElement.displayName = "InputRightElement";

export { Input, InputGroup, InputLeftElement, InputRightElement };

