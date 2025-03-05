import UserProfile from "../../components/UserProfile";
import { Img, Text, Heading } from "components/ui";
import React, { Suspense } from "react";

const data = [
  {
    userImage: "images/img_ellipse_11.png",
    userName: "Aayush",
    userOccupation: "3D Artist",
    userActionButtonText: "3D Animator &  Modeler",
  },
  {
    userImage: "images/img_ellipse_11_42x44.png",
    userName: "Avi",
    userOccupation: "UI/UX & Graphics Designer",
    userActionButtonText: "3D Animator &  Modeler",
  },
  {
    userImage: "images/img_ellipse_11.png",
    userName: "Vishal",
    userOccupation: "CEO",
    userActionButtonText: "3D Animator &  Modeler",
  },
];

export default function AboutusColumnFour() {
  return (
    <div className="mt-8 flex flex-col items-center">
      <div className="mx-auto flex w-full max-w-[1206px] flex-col items-center gap-[26px] px-9 md:px-5">
        <div className="flex flex-col items-center">
          <Text as="p" className="relative z-[5] text-[16px] font-normal !text-primary">
            GET TO KNOW
          </Text>
          <Heading size="heading2xl" as="h2" className="text-[48px] font-bold md:text-[44px] sm:text-[38px]">
            OUR TEAM
          </Heading>
        </div>
        <div className="flex items-center self-stretch md:flex-col">
          <div className="flex w-[16%] flex-col gap-6 md:w-full md:flex-row sm:flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {data.map((d, index) => (
                <UserProfile {...d} key={"listaayushOne" + index} className="bg-gradient2" />
              ))}
            </Suspense>
          </div>
          <div className="flex flex-1 justify-center md:flex-col md:self-stretch">
            <div className="w-[46%] rounded-br-[40px] rounded-tr-[40px] bg-gray-500_01 md:w-full">
              <Img
                src="images/img_whatsapp_image_2024_02_02.png"
                alt="Whatsappimage"
                className="h-[516px] w-full rounded-bl-[40px] rounded-tl-[40px] rounded-tr-[40px] object-cover md:h-auto"
              />
            </div>
            <div className="flex w-[46%] flex-col items-center justify-center gap-3.5 rounded-br-[40px] rounded-tr-[40px] bg-primary px-7 py-36 md:w-full md:py-5 sm:p-5">
              <div className="flex flex-col items-center gap-4 self-stretch">
                <div className="flex flex-col items-center gap-0.5">
                  <Heading size="headingxl" as="h3" className="text-[36px] font-bold md:text-[34px] sm:text-[32px]">
                    Aayush
                  </Heading>
                  <Text as="p" className="text-[16px] font-normal">
                    3D Animator
                  </Text>
                </div>
                <Text as="p" className="self-stretch text-center text-[16px] font-normal leading-10">
                  Hey, I&#39;m Aayush, a 3D animator crafting captivating worlds and characters. From character design
                  to seamless motion, I bring imagination to life using industry-standard tools.
                </Text>
              </div>
              <div className="flex gap-5">
                <Img src="images/img_icons8_instagram.png" alt="Iconseight" className="h-[48px] object-cover" />
                <Img src="images/img_television_blue_500.svg" alt="Television" className="h-[48px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

