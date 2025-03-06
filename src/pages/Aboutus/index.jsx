import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AboutusColumnFour from "./AboutusColumnFour";
import AboutusColumnOne from "./AboutusColumnOne";
import AboutusColumnone1 from "./AboutusColumnone1";
import AboutusRowTwo from "./AboutusRowTwo";

import ContactUs from "../../components/ContactUs";
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
        <title>About Us</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-1.5 bg-black-900">
        <div className="mx-auto mt-[62px] flex w-full max-w-[1206px] flex-col gap-20 md:gap-[60px] md:px-5 sm:gap-10">
          <div className="flex flex-col gap-5">
            <div className="mx-auto w-full max-w-[1206px] md:px-5">
              <Header className="gap-8" />
            </div>
            <div className="mx-[72px] flex flex-col items-center gap-1.5 md:mx-0">
              <Heading as="h1" className="text-[80px] font-bold md:text-[48px] text-center">
                ABOUT HALOYTE
              </Heading>
              <Text
                size="text7xl"
                as="p"
                className="self-stretch text-center text-[24px] font-normal leading-7 md:text-[22px]"
              >
                {/* <span className="text-white-a700">At&nbsp;</span> */}
                <span className="text-white-a700"> <span>At&nbsp;</span>
                  <span className="text-primary">Haloyte</span>, we&#39;re not just a digital agency; we&#39;re the architects of unique online
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
                <span className="text-white-a700">Established with a passion for pushing boundaries, PixovaStudioswas founded by a team of seasoned professionals with diverse backgrounds in design, development, and marketing. Our journey began with a shared vision to redefine the digital landscape and provide unparalleled services to our clients.</span>
                
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
          <ContactUs />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

