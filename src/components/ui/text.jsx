import React from "react";

const sizes = {
  textxs: "text-[3px] font-normal",
  texts: "text-[4px] font-normal",
  textmd: "text-[5px] font-normal",
  textlg: "text-[6px] font-normal",
  textxl: "text-[8px] font-normal",
  text2xl: "text-[10px] font-normal",
  text3xl: "text-[12px] font-normal",
  text4xl: "text-[14px] font-normal",
  text5xl: "text-[16px] font-normal",
  text7xl: "text-[24px] font-normal md:text-[22px]",
  text8xl: "text-[36px] font-normal md:text-[34px] sm:text-[32px]",
  text9xl: "text-[46px] font-normal md:text-[42px] sm:text-[36px]",
  text10xl: "text-[48px] font-normal md:text-[44px] sm:text-[38px]",
  text11xl: "text-[60px] font-normal md:text-[52px] sm:text-[46px]",
  text12xl: "text-[96px] font-normal md:text-[48px]",
  text13xl: "text-[150px] font-normal md:text-[48px]",
};

const Text = ({ children, className = "", as, size = "text5xl", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-a700 font-sfprodisplay ${className} ${sizes[size]} `} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };

