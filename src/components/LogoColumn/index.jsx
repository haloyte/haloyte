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
        <Img src={logoImage} alt="Logo15one" className="h-[340px] w-full rounded-[20px] object-cover" />
        <Button
          size="4xl"
          shape="square"
          className="relative ml-[74px] mr-[86px] mt-[-16px] w-full max-w-[176px] rotate-[-5deg] self-stretch px-2.5 font-sfprodisplay font-medium"
        >
          {logoButtonText}
        </Button>
      </div>
    </div>
  );
}

