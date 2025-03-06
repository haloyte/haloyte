// import ConsecutiveDaysDisplay from "../../components/ConsecutiveDaysDisplay";
import { Button, Img, Separator, Text, Heading } from "components/ui";
import React from "react";
// import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function LandingRowFive() {
  return (
    <div className="">
      <div className="flex flex-col gap-[54px] bg-black-900 py-[50px] md:py-5 sm:gap-[27px]">
        <div className="flex items-start md:flex-col">
          <div className="flex flex-1 justify-center px-14 md:self-stretch md:px-5">
            <div className="flex w-[66%] flex-col items-center gap-3.5 md:w-full">
              <Text as="p" className="text-[16px] font-normal !text-primary">
                PROJECTS
              </Text>
              <div className="flex flex-col items-start ">
                <Text
                  size="text9xl"
                  as="p"
                  className="text-center text-[46px] font-normal leading-[57px] md:text-[42px] sm:text-[28px]"
                >
                  <span>
                    <>
                      DIGITAL SOLUTIONS FOR
                      <br />
                    </>
                  </span>
                  <span className="md:text-[35px] sm:text-[23px] flex items-center gap-2">
                    A
                    <Button
                      size="8xl"
                      shape="square"
                      className="inline-flex md:w-full sm:w-[100%] sm:h-[100%] min-w-[312px] sm:min-w-[212px] max-w-[312px] sm:text-[28px] rotate-[-2deg] md:px-[18px] sm:px-[4px] align-middle"
                    >
                      CONSTANTLY
                    </Button>
                    EVOLVING WORLD
                  </span>

                </Text>

              </div>
            </div>
          </div>
          <Img
                    src="images/glow_right.png"
                    alt="Glow Right"
                    className="absolute right-0 h-[274px] w-auto object-contain pointer-events-none"
                  />
        </div>
        <div className="ml-[84px] mr-[116px] flex justify-center md:mx-0">
          <div className="mx-auto flex w-full max-w-[1206px] items-start justify-center md:flex-col md:px-5">
            <div className="flex-1 px-[46px] md:self-stretch md:px-5 md:my-12">
              <div className="mr-3.5 md:mr-0 md:mb-3">
                <Img
                  src="images/img_whatsapp_image_2024_02_08.png"
                  alt="Whatsapp Image"
                  className="h-[324px] w-full object-cover md:h-auto"
                />
                <div className="relative mx-1.5 mt-[-36px] rotate-[-2deg] bg-primary p-5 md:mx-0">
                  <Text
                    size="text7xl"
                    as="p"
                    className="text-center text-[24px] font-normal leading-[30px] md:text-[22px]"
                  >
                    Headphone 3D Model
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex-1 px-[46px] md:self-stretch md:px-5 mt-12 md:my-12">
              <div className="mr-3.5 md:mr-0">
                <Img
                  src="images/img_whatsapp_image_2024_02_08.png"
                  alt="Whatsapp Image"
                  className="h-[400px] w-full object-cover md:h-auto"
                />
                <div className="relative mx-1.5 mt-[-36px] rotate-[-2deg] bg-primary p-5 md:mx-0">
                  <Text
                    size="text7xl"
                    as="p"
                    className="text-center text-[24px] font-normal leading-[30px] md:text-[22px] "
                  >
                    Headphone 3D Model
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex-1 px-[46px] md:self-stretch md:px-5 md:my-12">
              <div className="mr-3.5 md:mr-0">
                <Img
                  src="images/img_whatsapp_image_2024_02_08.png"
                  alt="Whatsapp Image"
                  className="h-[324px] w-[110%] object-cover md:h-auto"
                />
                <div className="relative mx-1.5 mt-[-36px] rotate-[-2deg] bg-primary p-5 md:mx-0">
                  <Text
                    size="text7xl"
                    as="p"
                    className="text-center text-[24px] font-normal leading-[30px] md:text-[22px]"
                  >
                    Headphone 3D Model
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

