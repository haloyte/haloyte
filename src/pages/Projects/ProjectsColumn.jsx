import LogoColumn from "../../components/LogoColumn";
import { Heading } from "components/ui";
import React, { Suspense } from "react";

const data = [
  { logoImage: "images/img_logo_15_1.png", logoButtonText: "LOGO DESIGN" },
  { logoImage: "images/img_logo_15_2.png", logoButtonText: "MOCKPUP DESIGN" },
  { logoImage: "images/img_logo_15_3.png", logoButtonText: "CATALOGUE DESIGN" },
];

export default function ProjectsColumn() {
  return (
    <div className="flex flex-col items-center gap-[94px] self-stretch md:gap-[70px] sm:gap-[47px]">
      <div className="mx-auto flex w-full max-w-[1206px] flex-col items-center px-14 md:px-5">
        <div className="flex rotate-[-2deg] bg-primary px-5 py-7 sm:py-5">
          <Heading as="h2" className="text-[80px] font-bold md:text-[48px]">
            GRAPHIC DESIGN
          </Heading>
        </div>
      </div>
      <div className="flex w-[88%] gap-[134px] md:w-full md:flex-col md:px-5">
        <Suspense fallback={<div>Loading feed...</div>}>
          {data.map((d, index) => (
            <LogoColumn {...d} key={"projects" + index} className="mb-1.5 md:mb-0" />
          ))}
        </Suspense>
      </div>
    </div>
  );
}

