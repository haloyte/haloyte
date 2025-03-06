import UIUXDesignColumn from "components/UIUXDesignColumn";
import { Heading, Text } from "components/ui";
import React, { Suspense } from "react";

const data = [
  { buttonLabel: "01", headingText: "UI/UX DESIGN" },
  { buttonLabel: "01", headingText: "UI/UX DESIGN" },
  { buttonLabel: "01", headingText: "UI/UX DESIGN" },
];
// a
export default function AboutusColumnone1() {
  return (
    <div className="mb-[50px] flex flex-col items-center gap-5">
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
      <div className="flex w-[88%] flex-col gap-[26px] md:w-full md:px-5">
        <Suspense fallback={<div>Loading feed...</div>}>
          {data.map((d, index) => (
            <UIUXDesignColumn {...d} key={"skillrow" + index} />
          ))}
        </Suspense>
      </div>
    </div>
  );
}

