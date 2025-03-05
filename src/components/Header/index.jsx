import { Button, Text, Menubar, MenubarContent, MenubarMenu, MenubarTrigger, Heading, Img } from "components/ui";
import React from "react";

export default function Header({ ...props }) {
  return (
    <div {...props} className={`${props.className} flex md:flex-col justify-between items-end mb-5`}>
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
      <Menubar className="mb-3 flex flex-wrap gap-[50px] border-none">
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
              Blog
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
  );
}

