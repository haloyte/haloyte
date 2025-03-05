import { Helmet } from "react-helmet";
import DesignSkillsRow from "../../components/DesignSkillsRow";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LandingRowFive from "./LandingRowFive";
import LandingRowSeven from "./LandingRowSeven";
import LandingRowcontactus from "./LandingRowcontactus";
import LandingRowlineeleven from "./LandingRowlineeleven";
import LandingRowlinetwelve from "./LandingRowlinetwelve";
import { Img } from "components/ui";
import React from "react";

export default function LandingPage() {
  return (
    <>
      <Helmet>
        <title>Homepage</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full overflow-x-scroll relative">
        {/* Glow Left */}
        <Img
          src="images/glow_left.png"
          alt="Glow Left"
          className="absolute left-0 top-[12%] md:top-[8%] h-[274px] w-auto object-contain pointer-events-none"
        />

        {/* Glow Right */}
        <Img
          src="images/glow_right.png"
          alt="Glow Right"
          className="absolute right-0 top-[3%] h-[274px] w-auto object-contain pointer-events-none"
        />

        <div className="flex flex-col gap-[18px] bg-black-900 py-[30px] sm:py-5">
          <div className="mt-8">
            <div className="flex items-start gap-9 md:flex-col">
              <div className="flex flex-1 flex-col items-end gap-0.5 self-center md:self-stretch md:px-5">
                <div className="mx-auto w-full max-w-[1206px]">
                  <Header className="gap-5" />
                </div>
                <div className="flex items-center justify-end gap-8 self-stretch md:flex-col">
                  <Img
                    src="images/img_0480_1_1.png"
                    alt="Main Image"
                    className="h-[714px] w-full p-12 object-contain md:w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* marquee start*/}
          <DesignSkillsRow />
          {/* marquee end*/}

        </div>
        {/* project section starts */}
        <LandingRowFive />
        {/* project section ends */}

        <div className="flex  flex-col gap-10 bg-black-900">
          {/* testimonials start */}
          <LandingRowlineeleven />
          <LandingRowSeven />
          {/* testimonials ends */}

        </div>
        {/* skill section starts */}
        <div className=" bg-black-900">
          <LandingRowlinetwelve />
        </div>
        {/* skill section ends */}
        <div className="flex flex-col gap-11 bg-black-900">
        {/* contact us section starts */}
          <LandingRowcontactus />
        {/* contact us section starts */}

          <Footer />
        </div>
      </div>
    </>
  );
}
