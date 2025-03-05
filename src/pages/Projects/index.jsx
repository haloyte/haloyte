import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import ProjectsColumn from "./ProjectsColumn";
import ProjectsColumnlineten from "./ProjectsColumnlineten";
import { Heading, Button, Text, Menubar, MenubarContent, MenubarMenu, MenubarTrigger, Img } from "components/ui";
import React from "react";

export default function ProjectsPage() {
  return (
    <>
      <Helmet>
        <title>Vishal&#39;s Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-[660px] bg-black-900 md:gap-[495px] sm:gap-[330px]">
        <div className="mx-auto mt-[62px] flex w-full max-w-[1206px] flex-col items-center gap-[68px] md:px-5 sm:gap-[34px]">
          <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
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
          <div className="flex rotate-[-2deg] bg-primary p-5">
            <Heading as="h1" className="mt-2.5 text-[80px] font-bold md:text-[48px]">
              UI/UX DESIGN
            </Heading>
          </div>
        </div>
        <div className="flex flex-col items-center self-stretch">
          <ProjectsColumn />
          <div className="mx-auto mt-[168px] flex w-full max-w-[1206px] flex-col items-center gap-[660px] px-14 md:gap-[495px] md:px-5 sm:gap-[330px]">
            <div className="ml-1.5 mr-2 flex rotate-[-2deg] bg-primary px-5 py-[26px] md:mx-0 sm:py-5">
              <Heading as="h2" className="text-[80px] font-bold md:text-[48px]">
                3D ANIMATION
              </Heading>
            </div>
            <div className="flex rotate-[-2deg] bg-primary px-5 py-[26px] sm:py-5">
              <Heading as="h3" className="text-[80px] font-bold md:text-[48px]">
                DEVELOPMENT
              </Heading>
            </div>
          </div>
          <div className="mt-[706px] flex flex-col gap-11 self-stretch bg-black-900">
            <ProjectsColumnlineten />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

