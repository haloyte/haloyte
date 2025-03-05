import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Img, Button, Textarea, Text, Input, Heading } from "components/ui";
import React from "react";

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>contact page</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-black-900">
        <div className="mt-[62px] flex flex-col gap-2">
          <div className="flex items-start md:flex-col">
            <Img
              src="images/img_ellipse_14.png"
              alt="Image"
              className="mt-[136px] h-[196px] w-[6%] object-contain md:w-full"
            />
            <div className="flex flex-1 flex-col items-start gap-[18px] self-center md:self-stretch md:px-5">
              <div className="mx-auto flex w-full max-w-[1206px] flex-col items-center">
                <Header className="flex-col gap-[34px] self-stretch" />
                <a href="#" className="md:text-[48px]">
                  <Heading as="h1" className="text-[80px] font-bold">
                    CONTACT US
                  </Heading>
                </a>
              </div>
              <div className="flex w-[90%] items-center justify-center self-center md:w-full md:flex-col">
                <Img
                  src="images/img_contact_us_1.png"
                  alt="Contactusone"
                  className="h-[540px] w-[42%] object-contain md:w-full"
                />
                <div className="flex flex-1 flex-col items-end gap-4 md:self-stretch">
                  <div className="flex w-[84%] flex-col items-start gap-2 md:w-full">
                    <Text as="p" className="text-[16px] font-normal !text-blue_gray-400">
                      NAME
                    </Text>
                    <Input shape="round" className="rounded-[14px] border px-3" />
                  </div>
                  <div className="flex w-[84%] flex-col items-start gap-2 md:w-full">
                    <Text as="p" className="text-[16px] font-normal !text-blue_gray-400">
                      EMAIL ADDRESS
                    </Text>
                    <Input shape="round" className="rounded-[14px] border px-3" />
                  </div>
                  <div className="flex w-[84%] flex-col items-start gap-2 md:w-full">
                    <Text as="p" className="text-[16px] font-normal !text-blue_gray-400">
                      CONTACT
                    </Text>
                    <Input shape="round" className="rounded-[14px] border px-3" />
                  </div>
                  <div className="flex w-[84%] flex-col items-start gap-2 md:w-full">
                    <Text as="p" className="text-[16px] font-normal !text-blue_gray-400">
                      YOUR MESSAGE
                    </Text>
                    <Textarea
                      shape="round"
                      className="self-stretch rounded-[14px] !border !border-blue_gray-400 px-3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[562px] md:h-auto">
            <Button
              size="lg"
              shape="round"
              className="mr-[314px] mt-2.5 w-full min-w-[150px] max-w-[150px] rounded-[20px] px-5 md:mr-0"
            >
              SEND MESSAGE{" "}
            </Button>
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-end">
              <Img src="images/img_ellipse_15.png" alt="Image" className="h-[196px] w-[8%] object-contain" />
              <Footer className="relative mt-[-76px] self-stretch" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

