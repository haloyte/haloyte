import { Button, Img, Text } from "components/ui";
import React from "react";

export default function AboutusRowcontactus() {
  return (
    <div className="mt-9">
      <div className="flex flex-col items-center gap-[34px]">
        <div className="mx-auto flex w-full max-w-[1206px] flex-col items-center px-14 md:px-5">
          <a href="#">
            <Text as="p" className="text-[16px] font-normal !text-primary">
              CONTACT US
            </Text>
          </a>
        </div>
        <div className="flex items-center self-stretch md:flex-col">
          <Img
            src="images/img_ellipse_16_196x108.png"
            alt="Image"
            className="h-[196px] w-[8%] object-contain md:w-full"
          />
          <div className="flex-1 px-14 md:self-stretch md:px-5">
            <div className="relative mb-[116px] h-[192px] content-center md:h-auto">
              <div className="relative h-[192px] flex-1 content-center px-[168px] md:h-auto md:px-5">
                <Text size="text13xl" as="p" className="text-[150px] font-normal md:text-[48px]">
                  LET S GET{" "}
                </Text>
                <Img
                  src="images/img_user_white_a700.svg"
                  alt="User"
                  className="absolute left-[41%] top-[11.85px] m-auto h-[60px] w-[6%] object-contain"
                />
              </div>
              <Text
                size="text13xl"
                as="p"
                className="absolute bottom-[21.15px] left-0 right-0 mx-auto w-max text-[150px] font-normal !text-primary md:text-[48px]"
              >
                LET S GET{" "}
              </Text>
            </div>
          </div>
          <Img
            src="images/img_ellipse_17_196x90.png"
            alt="Image"
            className="mb-[42px] h-[196px] w-[6%] self-end object-contain md:w-full"
          />
        </div>
        <div className="mx-auto flex w-full max-w-[1206px] flex-col items-center px-14 md:px-5">
          <Button
            size="lg"
            shape="round"
            colorScheme="black_900"
            className="w-full min-w-[156px] max-w-[156px] rounded-[20px] border border-solid border-gray-100 px-[23px] font-sfprodisplay font-medium sm:px-5"
          >
            GET IN TOUCH
          </Button>
        </div>
      </div>
    </div>
  );
}

