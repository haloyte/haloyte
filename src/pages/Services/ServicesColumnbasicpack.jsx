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
      <div className="mx-20 flex flex-col items-center gap-[26px] md:mx-0">
        <div className="mx-auto flex w-full max-w-[1206px] flex-col items-center px-14 md:px-5">
          <div className="flex flex-col items-center">
            <Heading size="headingmd" as="h2" className="text-[16px] font-bold !text-primary">
              OUR
            </Heading>
            <Heading as="h3" className="relative mt-[-8px] text-[80px] font-bold md:text-[48px]">
              PRICING
            </Heading>
          </div>
        </div>
        <div className="flex justify-center gap-6 flex-wrap">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-8 rounded-[20px] border border-solid border-primary bg-gradient3 px-7 mx-2 py-8 md:px-5 sm:p-5 ${
                index === 1 ? "scale-110 shadow-lg" : "scale-100"
              } transition-transform`}
            >
              <Heading size="headingxl" as="h4" className="text-[36px] font-bold md:text-[34px] sm:text-[32px]">
                {pkg.title}
              </Heading>
              <div className="self-stretch ">
                <div className="flex flex-col gap-6">
                  {Object.entries(pkg.price).map(([service, price]) => (
                    <div key={service} className="flex flex-wrap justify-between gap-5">
                      <Text size="text7xl" as="p" className="text-[24px] font-normal md:text-[22px] capitalize">
                        {service.replace("uiux", "UI/UX Design").replace("graphic", "Graphic Design").replace("animation", "3D Animation").replace("development", "Development")}
                      </Text>
                      <Text size="text7xl" as="p" className="text-[24px] font-normal md:text-[22px]">
                        {price}$
                      </Text>
                    </div>
                  ))}
                </div>
              </div>
              <Button size="lg" shape="round" className="w-full min-w-[134px] max-w-[134px] rounded-[20px] px-5">
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
