import LogoColumn from "../../components/LogoColumn";
import { Heading } from "components/ui";
import React, { Suspense } from "react";

const projectData = [
  {
    title: "GRAPHIC DESIGN",
    items: [
      { logoImage: "images/img_logo_15_1.png", logoButtonText: "LOGO DESIGN" },
      { logoImage: "images/img_logo_15_2.png", logoButtonText: "MOCKUP DESIGN" },
      { logoImage: "images/img_logo_15_3.png", logoButtonText: "CATALOGUE DESIGN" },
    ],
  },
  {
    title: "UI/UX DESIGN",
    items: [
      { logoImage: "images/img_ui_ux_1.png", logoButtonText: "MOBILE DESIGN" },
      { logoImage: "images/img_ui_ux_2.png", logoButtonText: "WEB DESIGN" },
      { logoImage: "images/img_ui_ux_3.png", logoButtonText: "DASHBOARD DESIGN" },
    ],
  },
  {
    title: "BRANDING",
    items: [
      { logoImage: "images/img_branding_1.png", logoButtonText: "LOGO BRANDING" },
      { logoImage: "images/img_branding_2.png", logoButtonText: "CORPORATE IDENTITY" },
      { logoImage: "images/img_branding_3.png", logoButtonText: "PACKAGING DESIGN" },
    ],
  },
];

export default function ProjectsColumn() {
  return (
    <div className="flex flex-col items-center gap-[94px] self-stretch md:gap-[70px] sm:gap-[47px]">
      {projectData.map((section, index) => (
        <div key={"section-" + index} className="w-full">
          {/* Heading */}
          <div className="mx-auto flex w-full max-w-[1206px] flex-col items-center px-14 md:px-5">
            <div className="flex rotate-[-2deg] bg-primary px-5 py-7 sm:py-5">
              <Heading as="h2" className="text-[80px] font-bold md:text-[48px]">
                {section.title}
              </Heading>
            </div>
          </div>

          {/* Cards for the respective section */}
          <div className="flex w-full p-12 gap-[134px] md:w-full md:flex-col md:px-5 mt-10">
            <Suspense fallback={<div>Loading feed...</div>}>
              {section.items.map((d, itemIndex) => (
                <LogoColumn {...d} key={"projects-" + index + "-item-" + itemIndex} className="mb-1.5 md:mb-0" />
              ))}
            </Suspense>
          </div>
        </div>
      ))}
    </div>
  );
}
