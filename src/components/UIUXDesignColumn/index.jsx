import { Heading, Button } from "components/ui";
import React from "react";
import { ArrowRight } from "lucide-react"; 

export default function UIUXDesignColumn({ buttonLabel = "01", headingText = "UI/UX DESIGN", ...props }) {
  return (
    <div {...props} className={`${props.className} flex items-end self-stretch flex-1`}>
      <div className="mt-1.5 w-full">
        <div className="relative z-[9] flex flex-col items-start">
          <Button
            size="9xl"
            shape="square"
            className="w-full min-w-[162px] max-w-[162px] rotate-[-11deg] px-[34px] font-sfprodisplay font-bold sm:px-5"
          >
            {buttonLabel}
          </Button>
        </div>
        <div className="relative mt-[-80px] md:mt-[-40px] sm:mt-[-20px] rounded-[20px] border-4 border-solid border-primary py-9 sm:py-5">
          <div className="mt-2.5 flex pl-[180px] pr-14 md:px-5">
            <Heading as="h1" className="text-[80px] md:text-[60px] sm:text-[48px] font-bold">
              {headingText}
            </Heading>
            <button className="absolute right-[5%] w-[100px] h-[60px] flex items-center justify-center px-6 py-3 bg-gray-700 text-white rounded-full shadow-md hover:bg-gray-600 transition">
            <ArrowRight size={24} color="white" />
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
