import { Helmet } from "react-helmet";
import EventDetails from "../../components/EventDetails";
import Footer from "../../components/Footer";
import BlogHero from "./BlogHero";
import {
  Button,
  Img,
  Text,
  FloatingLabelInput,
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
  Heading,
} from "components/ui";
import React from "react";

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title>Blogpage</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="relative h-[2304px] w-full content-end bg-black-900 md:h-auto">
        <Img
          src="images/img_ellipse_18_primary.png"
          alt="Image"
          className="mb-[352px] ml-auto h-[196px] w-[8%] object-contain"
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col items-start">
          <div className="w-full max-w-[1206px] md:px-5">
            <div className="flex items-end justify-between gap-5 md:flex-col">
              <div className="flex items-center gap-1 self-center">
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
              <Menubar className="mb-3 flex flex-wrap gap-[60px] border-none md:gap-5">
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
          <BlogHero />
          <div className="mt-3.5 self-stretch">
            <div className="flex items-start gap-12 md:flex-col">
              <Img
                src="images/img_ellipse_14.png"
                alt="Image"
                className="mt-[412px] h-[196px] w-[6%] object-contain md:w-full"
              />
              <div className="flex flex-1 flex-col gap-8 self-center md:self-stretch md:px-5">
                <div>
                  <div className="flex flex-col items-start gap-9">
                    <div className="mx-10 flex items-start gap-[42px] self-stretch md:mx-0 md:flex-col">
                      <div className="mt-1.5 flex w-[76%] items-center self-center md:mt-0 md:w-full md:flex-col">
                        <div className="flex w-[44%] md:w-full">
                          <div className="flex w-full flex-col gap-2">
                            <div className="relative h-[168px] content-center md:h-auto">
                              <FloatingLabelInput
                                name="tolive"
                                placeholder={`INSPIRING YOU`}
                                defaultValue="TO LIVE"
                                floating="contained"
                                className="h-[168px] w-[84%] px-2 text-[60px] text-white-a700"
                              />
                              <Text
                                size="text11xl"
                                as="p"
                                className="absolute bottom-3.5 right-[16%] m-auto text-[60px] font-normal md:text-[52px] sm:text-[46px]"
                              >
                                YOUR{" "}
                              </Text>
                            </div>
                            <div className="flex items-start gap-1.5 sm:flex-col">
                              <div className="flex flex-col items-start self-center">
                                <Text
                                  size="text11xl"
                                  as="p"
                                  className="text-[60px] font-normal md:text-[52px] sm:text-[46px]"
                                >
                                  BEST LIFE
                                </Text>
                                <Text
                                  size="text11xl"
                                  as="p"
                                  className="ml-1.5 text-[60px] font-normal md:ml-0 md:text-[52px] sm:text-[46px]"
                                >
                                  THROUGH
                                </Text>
                                <Text
                                  size="text11xl"
                                  as="p"
                                  className="mt-1.5 text-[60px] font-normal md:text-[52px] sm:text-[46px]"
                                >
                                  WORDS
                                </Text>
                              </div>
                              <div className="mt-14 flex h-[86px] rotate-[-5deg] items-center bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat px-2 md:h-auto sm:mt-0">
                                <Text
                                  size="text11xl"
                                  as="p"
                                  className="text-[60px] font-normal md:text-[52px] sm:text-[46px]"
                                >
                                  OUR
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Img
                          src="images/img_20187421_6230929.png"
                          alt="Image"
                          className="h-[466px] w-[54%] object-contain md:w-full"
                        />
                      </div>
                      <Img
                        src="images/img_ellipse_17_primary.png"
                        alt="Image"
                        className="h-[196px] w-[6%] object-contain md:w-full"
                      />
                    </div>
                    <Button
                      size="2xl"
                      shape="square"
                      className="w-full min-w-[142px] max-w-[142px] rotate-[-2deg] px-2.5"
                    >
                      LATEST ARTICLES
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-2 justify-center gap-[58px] md:grid-cols-1">
                  <EventDetails className="bg-primary" />
                  <EventDetails className="h-[222px] bg-[url(/public/images/img_group_4.svg)] bg-cover bg-no-repeat md:h-auto" />
                  <Button size="2xl" shape="square" className="w-full rotate-[-2deg] px-2.5">
                    TRENDING ARTICLES
                  </Button>
                  <EventDetails className="bg-primary" />
                  <EventDetails className="h-[222px] bg-[url(/public/images/img_group_4.svg)] bg-cover bg-no-repeat md:h-auto" />
                </div>
              </div>
            </div>
          </div>
          <Footer className="mt-[72px] self-stretch" />
        </div>
      </div>
    </>
  );
}

