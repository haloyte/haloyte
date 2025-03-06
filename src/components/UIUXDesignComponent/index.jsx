import { Img, Heading, Button } from "components/ui";
import React from "react";

export default function UIUXDesignComponent({
  buttonLabel = "01",
  headingText = "UI/UX DESIGN",
  ellipseImage = "images/img_ellipse_12.png",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex items-center self-stretch flex-1`}>
      <div className="w-full">
        <div className="relative z-[1] flex flex-col items-start">
          <Button
            size="9xl"
            shape="square"
            className="w-full min-w-[162px] max-w-[162px] rotate-[-11deg] px-[34px] font-sfprodisplay font-bold sm:px-5"
          >
            {buttonLabel}
          </Button>
        </div>
        <div className="relative mt-[-38px] rounded-[20px] border-4 border-solid border-primary py-11 md:py-5">
          <div className="md:mt-2.5 sm:mt-8 flex items-start justify-center px-14 md:flex-col md:px-5">
            <Heading as="h1" className="self-center text-[80px] font-bold md:text-[48px]">
              {headingText}
            </Heading>
            <div className="mt-1 flex items-center gap-[151px]">
              <Img src={ellipseImage} alt="Uiux Design" className="h-[82px] w-[22%] rounded-[40px] object-contain" />
              <Img src="images/img_arrow_left.svg" alt="Uiux Design" className="h-[66px] w-[18%] object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

