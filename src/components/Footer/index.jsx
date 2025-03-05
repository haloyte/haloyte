import { Img, Text, Button, Heading, Separator } from "components/ui";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPinterest, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa"

export default function Footer({ ...props }) {
  return (
    <div {...props} className={`${props.className} flex flex-col gap-[30px]`}>
      <div className="self-stretch">
        <div className="flex flex-col items-start gap-3">
          <Separator orientation="horizontal" className="h-[2px] w-full self-stretch bg-gradient" />
          <div className="mx-auto flex w-full max-w-[1076px] items-start justify-between gap-5 md:flex-col md:px-5">
            <div className="mt-8 flex w-[10%] items-start justify-center gap-1 md:w-full">
              <Img
                src="images/img_b72def9b_2f89.png"
                alt="B72def9b2feight"
                className="h-[82px] w-[34%] object-contain"
              />
              <Heading
                size="headingxl"
                as="h1"
                className="self-center !font-hammersmithone text-[36px] font-normal leading-[52px] md:text-[34px] sm:text-[32px]"
              >
                <span className="text-white-a700">
                  <>
                    Pixova
                    <br />
                  </>
                </span>
                <span className="text-primary">Studios</span>
              </Heading>
            </div>
            <div className="flex w-[78%] items-start justify-center self-center md:w-full md:flex-col">
              <div className="relative z-[13] mb-[22px] flex w-[68%] items-start justify-between gap-5 self-end md:w-full sm:flex-col">
                <div className="flex w-[42%] flex-col items-start gap-5 sm:w-full">
                  <Heading size="text6xl" as="p" className="text-[24px] font-medium">
                    All Services
                  </Heading>
                  <ul className="flex flex-col items-start gap-3.5">
                    <li>
                      <a href="#">
                        <Text as="p" className="text-[20px] font-normal">
                          Brand Identity
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="UI/UX Design" target="_blank" rel="noreferrer">
                        <Text as="p" className="text-[20px] font-normal">
                          UI/UX Design
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="text-[20px] font-normal">
                          Graphic Design
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="text-[20px] font-normal">
                          3D Modeling and Animation
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="text-[20px] font-normal">
                          Full Stake Developement
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex w-[58%] flex-col items-start gap-5 self-center sm:w-full">
                  <Heading size="text6xl" as="p" className="text-[24px] font-medium">
                    Handy Links
                  </Heading>
                  <ul className="flex flex-col items-start gap-3.5">
                    <li>
                      <a href="Home" target="_blank" rel="noreferrer">
                        <Text as="p" className="text-[20px] font-normal">
                          Home
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="text-[20px] font-normal">
                          About us
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="Services" target="_blank" rel="noreferrer">
                        <Text as="p" className="text-[20px] font-normal">
                          Services
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="Projects" target="_blank" rel="noreferrer">
                        <Text as="p" className="text-[20px] font-normal">
                          Projects
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="Contact" target="_blank" rel="noreferrer">
                        <Text as="p" className="text-[20px] font-normal">
                          Contact
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="Blog" target="_blank" rel="noreferrer">
                        <Text as="p" className="text-[20px] font-normal">
                          Blog
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <Separator
                orientation="vertical"
                className="relative ml-[-114px] h-[332px] w-[2px] self-center bg-gradient md:ml-0 md:h-[2px] md:w-[332px]"
              />
              <div className="ml-[54px] mt-11 flex w-[32%] flex-col gap-[26px] md:ml-0 md:w-full">
                <div className="flex items-center gap-5">
                  <Button shape="round" className="w-[38px] self-center rounded-[18px] px-2">
                  <FaLinkedin className="text-xl text-white" />
                  </Button>
                  <div className="flex flex-1 flex-col items-start gap-1">
                    <div className="flex flex-col items-start gap-[26px]">
                      <Heading size="text6xl" as="p" className="text-[20px] font-medium">
                        Contact Us
                      </Heading>
                      <a href="#">
                        <Text as="p" className="!font-imprima text-[20px] font-normal">
                          70 Milestone GT Road,
                        </Text>
                      </a>
                    </div>
                    <Text as="p" className="!font-imprima text-[20px] font-normal">
                      Samalkha, Panipat - 132101
                    </Text>
                  </div>
                </div>
                <div className="mr-3 flex items-center gap-[22px] md:mr-0">
                  <Button shape="round" className="w-[38px] rounded-[18px] px-2">
                  <FaEnvelope className="text-xl text-white" />
                  </Button>
                  <Text as="p" className="!font-imprima text-[20px] font-normal">
                    Pixovastudios@gmail.com
                  </Text>
                </div>
                <div className="flex items-center gap-5">
                  <Button shape="round" className="w-[38px] rounded-[18px] px-2.5">
                  <FaPhone className="text-xl text-white" />
                  </Button>
                  <Text as="p" className="!font-imprima text-[20px] font-normal">
                    +91 9255158888
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center self-stretch bg-primary py-5">
        <div className="mx-auto flex w-full max-w-[1206px] justify-center gap-5 px-14 md:px-5">
        <FaFacebookF className="text-white text-2xl cursor-pointer hover:text-gray-300" />
          <FaInstagram className="text-white text-2xl cursor-pointer hover:text-gray-300" />
          <FaTwitter className="text-white text-2xl cursor-pointer hover:text-gray-300" />
          <FaYoutube className="text-white text-2xl cursor-pointer hover:text-gray-300" />
          <FaPinterest className="text-white text-2xl cursor-pointer hover:text-gray-300" />
        </div>
      </div>
    </div>
  );
}

