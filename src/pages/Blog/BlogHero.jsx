import { Heading } from "components/ui";
import React from "react";

export default function BlogHero() {
  return (
    <div className="mt-[66px] flex w-[82%] justify-center bg-primary py-20 md:w-full md:p-5">
      <div className="mx-auto mb-3 flex w-full max-w-[1206px] justify-center px-[38px] sm:px-5">
        <Heading
          size="heading5xl"
          as="h1"
          className="flex-1 text-center text-[100px] font-bold leading-[119px] md:text-[48px]"
        >
          WE PROVIDE AWESOME ARTICLES FOR YOU{" "}
        </Heading>
      </div>
    </div>
  );
}

