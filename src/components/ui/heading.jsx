import React from "react";

const sizes = {
  text6xl: "text-[20px] font-medium",
  headingxs: "text-[4px] font-bold",
  headings: "text-[6px] font-bold",
  headingmd: "text-[16px] font-bold",
  headinglg: "text-[28px] font-bold md:text-[26px] sm:text-[24px]",
  headingxl: "text-[36px] font-bold md:text-[34px] sm:text-[32px]",
  heading2xl: "text-[48px] font-bold md:text-[44px] sm:text-[38px]",
  heading3xl: "text-[60px] font-bold md:text-[52px] sm:text-[46px]",
  heading4xl: "text-[80px] font-bold md:text-[48px]",
  heading5xl: "text-[100px] font-bold md:text-[48px]",
};

const Heading = ({ children, className = "", size = "heading4xl", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-a700 font-sfprodisplay ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };

