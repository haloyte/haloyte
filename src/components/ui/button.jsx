import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "lib/utils";

const buttonVariants = cva(
  "w-full flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap",
  {
    variants: {
      fill: {
        blue_50_01: "bg-blue-50_01",
        black_900: "bg-black-900 text-white-a700",
        white_A700: "bg-white-a700 text-black-900",
        primary: "bg-primary text-white-a700",
      },
      outline: {
        white_A700: "border-white-a700 border border-solid text-white-a700",
      },
      size: {
        "8xl": "h-[100px] px-[18px] text-[46px]",
        xs: "h-[20px] px-0.5",
        "7xl": "h-[92px] px-2.5 text-[48px]",
        "4xl": "h-[62px] px-2.5 text-[24px]",
        "6xl": "h-[80px] px-[22px] text-[24px]",
        sm: "h-[28px] px-3 text-[12px]",
        "5xl": "h-[68px] px-2.5 text-[24px]",
        "2xl": "h-[44px] px-2.5 text-[16px]",
        "9xl": "h-[118px] px-[34px] text-[60px]",
        xl: "h-[44px] px-2.5 text-[20px]",
        "3xl": "h-[52px] px-8 text-[16px]",
        lg: "h-[40px] px-6 text-[16px]",
        md: "h-[38px] px-2",
      },
      shape: {
        square: "rounded-[0px]",
        round: "rounded-[20px]",
      },
    },
    defaultVariants: {},
  },
);

const Button = React.forwardRef(
  (
    {
      colorScheme = "primary",
      variant = "fill",
      shape,
      size = "md",
      children,
      leftIcon,
      rightIcon,
      className,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp className={cn(buttonVariants({ [variant]: colorScheme, size, shape, className }))} ref={ref} {...props}>
        {!!leftIcon && leftIcon}
        {children}
        {!!rightIcon && rightIcon}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

