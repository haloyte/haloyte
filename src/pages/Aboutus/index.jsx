import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import AboutusColumnFour from "./AboutusColumnFour";
import AboutusColumnOne from "./AboutusColumnOne";
import AboutusColumnone1 from "./AboutusColumnone1";
import AboutusRowTwo from "./AboutusRowTwo";
import AboutusRowcontactus from "./AboutusRowcontactus";
import {
  Separator,
  Text,
  Heading,
  Button,
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
  Img,
} from "components/ui";
import React from "react";

export default function AboutusPage() {
  return (
    <>
      <Helmet>
        <title>Vishal&#39;s Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-1.5 bg-black-900">
        <div className="mx-auto mt-[62px] flex w-full max-w-[1206px] flex-col gap-20 md:gap-[60px] md:px-5 sm:gap-10">
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between gap-5 md:flex-col">
              <div className="flex items-center gap-1">
                <Img
                  src="images/img_b72def9b_2f89.png"
                  alt="B72def9b2feight"
                  className="h-[50px] w-[16%] self-end object-contain"
                />
                <Heading
                  size="headingxl"
                  as="h1"
                  className="!font-hammersmithone text-[36px] font-normal md:text-[34px] sm:text-[32px]"
                >
                  <span className="text-white-a700">Pixova</span>
                  <span className="text-primary">Studios</span>
                </Heading>
              </div>
              <div className="flex w-[66%] items-center justify-between gap-5 self-end md:w-full md:flex-col">
                <Menubar className="flex flex-wrap gap-[60px] border-none md:gap-5">
                  <MenubarMenu>
                    <MenubarTrigger>
                      <Text as="p" className="text-[16px] font-normal !text-primary">
                        Home
                      </Text>
                    </MenubarTrigger>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger>
                      <Text as="p" className="cursor-pointer text-[16px] font-normal hover:text-primary">
                        About us
                      </Text>
                    </MenubarTrigger>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger>
                      <Text as="p" className="cursor-pointer text-[16px] font-normal hover:text-primary">
                        Services
                      </Text>
                    </MenubarTrigger>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger>
                      <Text as="p" className="cursor-pointer text-[16px] font-normal hover:text-primary">
                        Projects
                      </Text>
                    </MenubarTrigger>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger>
                      <Text as="p" className="cursor-pointer text-[16px] font-normal hover:text-primary">
                        Contact
                      </Text>
                    </MenubarTrigger>
                  </MenubarMenu>
                </Menubar>
                <Button
                  size="3xl"
                  variant="outline"
                  colorScheme="white_A700"
                  className="w-full min-w-[148px] max-w-[148px] rounded-[10px] !border px-[31px] font-inter sm:px-5"
                >
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="mx-[72px] flex flex-col items-center gap-1.5 md:mx-0">
              <Heading as="h1" className="text-[80px] font-bold md:text-[48px]">
                ABOUT PIXOVASTUDIOS
              </Heading>
              <Text
                size="text7xl"
                as="p"
                className="self-stretch text-center text-[24px] font-normal leading-7 md:text-[22px]"
              >
                <span className="text-white-a700">At&nbsp;</span>
                <span className="text-primary">
                  Pixovastudios, we&#39;re not just a digital agency; we&#39;re the architects of unique online
                  experiences. We blend creativity, innovation, and technical expertise to deliver digital solutions
                  that elevate your brand and captivate your audience.
                </span>
              </Text>
            </div>
          </div>
          <div className="mx-[158px] flex flex-col items-center md:mx-0">
            <Heading size="headinglg" as="h2" className="text-[28px] font-bold md:text-[26px] sm:text-[24px]">
              OUR STORY
            </Heading>
            <div className="mt-[26px] flex self-stretch rounded-[10px] bg-primary p-5">
              <Text size="text7xl" as="p" className="w-[98%] text-[24px] font-normal leading-7 md:text-[22px]">
                <span className="text-white-a700">Established with a passion for pushing boundaries, PixovaStudio</span>
                <span className="text-primary">
                  swas founded by a team of seasoned professionals with diverse backgrounds in design, development, and
                  marketing. Our journey began with a shared vision to redefine the digital landscape and provide
                  unparalleled services to our clients.
                </span>
              </Text>
            </div>
            <Separator orientation="vertical" className="mt-2 h-[144px] w-[2px] bg-gradient1" />
          </div>
        </div>
        <div className="self-stretch">
          <AboutusColumnOne />
          <AboutusRowTwo />
          <div className="bg-black-900 py-[22px] sm:py-5">
            <AboutusColumnone1 />
          </div>
          <AboutusColumnFour />
          <div className="mt-8 flex flex-col gap-11 bg-black-900">
            <AboutusRowcontactus />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

