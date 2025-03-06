import { Separator, Button, Text, Heading } from "components/ui";
import React from "react";

export default function ServicesColumnBasicPack() {
  const packages = [
    { title: "Basic Package", price: { uiux: 99, graphic: 49, animation: 149, development: 249 } },
    { title: "Standard Package", price: { uiux: 199, graphic: 99, animation: 249, development: 349 } },
    { title: "Premium Package", price: { uiux: 299, graphic: 149, animation: 349, development: 449 } },
  ];

  return (
    <div className="flex flex-col gap-[52px] sm:gap-[26px] items-center">
      <div className="mx-20 flex flex-col items-center gap-[26px] md:mx-5 sm:mx-2">
        <div className="mx-auto flex w-full max-w-[1206px] flex-col items-center px-14 md:px-5 sm:px-3">
          <div className="flex flex-col items-center">
            <Heading size="headingmd" as="h2" className="text-[16px] font-bold !text-primary">
              OUR
            </Heading>
            <Heading as="h3" className="relative mt-[-8px] text-[80px] font-bold md:text-[48px] sm:text-[36px]">
              PRICING
            </Heading>
          </div>
        </div>
        <div className="flex justify-center gap-6 flex-wrap md:gap-4 sm:gap-6">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-8 sm:gap-4 rounded-[20px] border border-solid border-primary bg-gradient3 px-7 py-8 
                ${index === 1 ? "scale-110 lg:scale-110 md:scale-100 shadow-lg" : "scale-100"}
                transition-transform md:w-[48%] md:px-4 md:py-6 sm:w-full sm:p-4`}
            >
              <Heading size="headingxl" as="h4" className="text-[36px] font-bold md:text-[28px] sm:text-[28px]">
                {pkg.title}
              </Heading>
              <div className="self-stretch w-full">
                <div className="flex flex-col gap-6 md:gap-4 sm:gap-3">
                  {Object.entries(pkg.price).map(([service, price]) => (
                    <div key={service} className="flex flex-wrap justify-between gap-5 md:gap-2 sm:gap-2">
                      <Text size="text7xl" as="p" className="text-[24px] font-normal md:text-[18px] sm:text-[18px] capitalize">
                        {service.replace("uiux", "UI/UX Design").replace("graphic", "Graphic Design").replace("animation", "3D Animation").replace("development", "Development")}
                      </Text>
                      <Text size="text7xl" as="p" className="text-[24px] font-normal md:text-[18px] sm:text-[18px]">
                        {price}$
                      </Text>
                    </div>
                  ))}
                </div>
              </div>
              <Button size="lg" shape="round" className="w-full min-w-[134px] max-w-[134px] md:max-w-[120px] md:min-w-[120px] md:text-sm rounded-[20px] px-5 sm:max-w-[120px] sm:text-sm">
                GET STARTED
              </Button>
            </div>
          ))}
        </div>
      </div>
      <Separator orientation="horizontal" className="h-[2px] bg-gradient" />
    </div>
  );
}