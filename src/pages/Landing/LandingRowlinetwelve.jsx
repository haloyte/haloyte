import UIUXDesignColumn from "components/UIUXDesignColumn";
import { Separator, Img, Heading, Text } from "components/ui";
import React, { Suspense } from "react";

const data = [
  { buttonLabel: "01", headingText: "UI/UX DESIGN" },
  { buttonLabel: "01", headingText: "UI/UX DESIGN" },
  { buttonLabel: "01", headingText: "UI/UX DESIGN" },
];

export default function LandingRowlinetwelve() {
  return (
    <div className="mb-1">
      <div>
        <Separator orientation="horizontal" className="h-[2px] bg-gradient" />
        <div className="mt-5 flex items-start md:flex-col">
          <div className="flex flex-1 flex-col items-end gap-5 self-center md:self-stretch md:px-5">
            <div className="mx-auto flex w-full max-w-[1206px] flex-col items-center px-14 md:px-5">
              <div className="flex w-[16%] justify-center md:w-full">
                <div className="flex w-full flex-col items-center">
                  <Text as="p" className="text-[16px] font-medium !text-primary">
                    OUR
                  </Text>
                  <Heading
                    size="heading2xl"
                    as="h2"
                    className="relative mt-[-8px] self-end text-[48px] font-bold md:text-[44px] sm:text-[38px]"
                  >
                    SKILLS
                  </Heading>
                </div>
              </div>
            </div>
            <div className="flex w-full p-12 flex-col gap-[26px] ">
              <Suspense fallback={<div>Loading feed...</div>}>
                {data.map((d, index) => (
                  <UIUXDesignColumn {...d} key={"skillrow" + index} />
                ))}
              </Suspense>
            </div>
          </div>
           <Img
                    src="images/glow_right.png"
                    alt="Glow Right"
                    className="absolute right-0  h-[274px] w-auto object-contain pointer-events-none"
                  />
        </div>
               <Separator orientation="horizontal" className="h-[2px] bg-gradient" />
       
      </div>
    </div>
  );
}

