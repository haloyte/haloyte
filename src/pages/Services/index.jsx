import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import UIUXDesignComponent from "components/UIUXDesignComponent";
import ServicesColumnbasicpack from "./ServicesColumnbasicpack";
import ServicesRowcontactus from "./ServicesRowcontactus";
import { Text, Heading } from "components/ui";
import React, { Suspense } from "react";

const data = [
  { buttonLabel: "01", headingText: "UI/UX DESIGN", ellipseImage: "images/img_ellipse_12.png" },
  { buttonLabel: "01", headingText: "UI/UX DESIGN", ellipseImage: "images/img_ellipse_12.png" },
  { buttonLabel: "01", headingText: "3D ANIMATION", ellipseImage: "images/img_ellipse_13.png" },
  { buttonLabel: "01", headingText: "DEVELOPMENT", ellipseImage: "images/img_ellipse_12_82x82.png" },
];

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>services page</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-black-900">
        <div className="py-12 flex flex-col items-center">
          <div className="mx-auto w-full max-w-[1206px] md:px-5">
            <Header className="gap-8" />
          </div>
          <div className="flex w-[86%] flex-col items-center md:w-full md:px-5">
            <div className="mx-auto flex w-full max-w-[1206px] flex-col items-center px-14 md:px-5">
              <Heading as="h1" className="text-[80px] font-bold md:text-[48px]">
                SERVICES
              </Heading>
            </div>
            <div className="relative mt-[-12px] flex flex-col items-center gap-9 self-stretch">
              <div className="mx-auto flex w-full max-w-[1206px] flex-col items-center px-14 md:px-5">
                <Text as="p" className="w-[32%] text-center text-[20px] font-normal leading-[19px] md:w-full">
                  Our studios offers innovative solutions that captivate customers, drive engagement and get results
                </Text>
              </div>
              <div className="flex flex-col gap-[54px] self-stretch">
                <Suspense fallback={<div>Loading feed...</div>}>
                  {data.map((d, index) => (
                    <UIUXDesignComponent {...d} key={"services" + index} />
                  ))}
                </Suspense>
              </div>
            </div>
          </div>
          <div className="mt-[46px] flex flex-col gap-2.5 self-stretch">
            <ServicesColumnbasicpack />
            <div className="flex flex-col gap-11 bg-black-900">
              <ServicesRowcontactus />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

