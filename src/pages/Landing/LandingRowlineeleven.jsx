import { Text, Img, Separator, Button } from "components/ui";
import React from "react";

export default function LandingRowlineeleven() {
  return (
    <div>
      <div className="flex flex-col gap-4 p-12">
        <Separator orientation="horizontal" className="h-[2px] bg-gradient" />
        <div className="mr-[54px] flex items-start gap-[18px] md:mr-0 md:flex-col">
           <Img
                    src="images/glow_left.png"
                    alt="Glow Left"
                    className="absolute left-0 h-[274px] w-auto object-contain pointer-events-none"
                  />
          <div className="relative h-[466px] flex-1 content-end self-center md:h-auto md:w-full md:flex-none md:self-stretch md:px-5">
            <div className="absolute left-0 right-0 top-3.5 mx-auto flex flex-1 flex-col items-start gap-2.5">
              <Text as="p" className="text-[16px] font-normal !text-primary">
                TESTIMONIALS
              </Text>
              <div className="relative h-[196px] self-stretch">
                <Text
                  size="text10xl"
                  as="p"
                  className="absolute left-0 top-0 m-auto w-[32%] text-[48px] font-normal leading-[81px] md:text-[44px] sm:text-[38px]"
                >
                  CUSTOMER SATISFACTION IS OUR{" "}
                </Text>
                <Button
                  size="7xl"
                  shape="square"
                  className="absolute bottom-px left-[9%] top-[100%] m-auto w-full min-w-[324px] max-w-[324px] rotate-[-2deg] px-2.5"
                >
                  TOP PRIORITY
                </Button>
              </div>
            </div>
            <div className="mx-auto flex flex-1 flex-col">
              <div className="flex gap-1.5">
                <Img src="images/img_trophy.svg" alt="Trophy" className="h-[60px] w-[3%] object-contain" />
                <Img src="images/img_trophy.svg" alt="Trophy" className="h-[60px] w-[3%] object-contain" />
              </div>
              <Text
                size="text8xl"
                as="p"
                className="relative mt-[-44px] w-[80%] text-[36px] font-normal leading-[66px] md:w-full md:text-[34px] sm:text-[32px]"
              >
                The company demonstrated exceptional prowess in project design, seamlessly integrating creativity and
                functionality to deliver a meticulously crafted solution that surpassed expectations.
              </Text>
            </div>
            <Separator
              orientation="horizontal"
              className="absolute bottom-[18%] right-[8%] m-auto h-[5px] w-[12%] bg-primary"
            />
            <Img
              src="images/img_0003_1.png"
              alt="Image"
              className="absolute right-0 top-0 m-auto h-[340px] w-[26%] object-contain"
            />
          </div>
        </div>
        <div className="mx-[102px] flex items-center gap-2.5 md:mx-0">
          <Img
            src="images/img_image_container.png"
            alt="Imagecontainer"
            className="h-[56px] w-[5%] rounded-[28px] object-contain"
          />
          <div className="flex flex-1 flex-col items-start">
            <Text as="p" className="text-[16px] font-normal">
              Robin
            </Text>
            <Text as="p" className="text-[16px] font-normal !text-primary">
              HR
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}

