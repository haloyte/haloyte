import { Button, Img } from "components/ui";
import React from "react";

export default function LogoColumn({
  logoImage = "images/img_logo_15_1.png",
  logoButtonText = "LOGO DESIGN",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col w-[32%] md:w-full`}>
      <div className="self-stretch">
        <Img
          src={logoImage}
          alt="Logo"
          className="h-[340px] w-full rounded-[30px] object-cover"
        />
        <Button
          size="4xl"
          shape="square"
          className="relative mt-[-16px] w-full rotate-[-5deg] self-stretch px-4 py-3 font-sfprodisplay font-medium text-center"
        >
          {logoButtonText}
        </Button>
      </div>
    </div>
  );
}
