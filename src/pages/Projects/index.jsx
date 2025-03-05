import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import ProjectsColumn from "./ProjectsColumn";
import Header from "../../components/Header";
import { Heading, Button, Text, Menubar, MenubarContent, MenubarMenu, MenubarTrigger, Img } from "components/ui";
import React from "react";
import ContactUs from "../../components/ContactUs";
export default function ProjectsPage() {
  return (
    <>
      <Helmet>
        <title>Our Projects</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-10 bg-black-900 ">
        <div className="mx-auto mt-[62px] flex w-full max-w-[1206px] flex-col items-center gap-[68px] md:px-5 sm:gap-[34px]">
           <div className="mx-auto w-full max-w-[1206px] md:px-5">
                        <Header className="gap-8" />
                      </div>
       
        </div>
        <div className="flex flex-col items-center self-stretch">
          <ProjectsColumn />
          
        
          <div className=" flex flex-col gap-11 self-stretch bg-black-900">
            <ContactUs />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

