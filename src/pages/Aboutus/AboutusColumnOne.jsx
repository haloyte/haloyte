import { Text, Heading } from "components/ui";
import React from "react";

export default function AboutusColumnOne() {
  return (
    <div className="flex flex-col items-center">
      <div className="mx-auto flex w-full max-w-[1206px] flex-col items-center gap-[26px] px-14 md:px-5">
        <Heading size="headinglg" as="h2" className="text-[28px] font-bold md:text-[26px] sm:text-[24px]">
          WHAT SETS US APART
        </Heading>
        <div className="flex w-[80%] justify-center rounded-[10px] bg-primary p-5 md:w-full">
          <Text size="text7xl" as="p" className="w-[98%] text-[24px] font-normal leading-7 md:text-[22px]">
            <>
              Innovative Solutions: We stay ahead of the curve by embracing the latest technologies and trends to
              deliver innovative solutions that set your brand apart in the digital landscape.
              <br />
              Client-Centric Focus: Your success is our success. We prioritize open communication, responsiveness, and a
              client-centric approach to build long-lasting partnerships.
              <br />
              Creative Excellence: Our team is a blend of creative minds and technical experts. From concept to
              execution, we infuse creativity into every aspect of our work, ensuring your brand leaves a lasting
              impression.
            </>
          </Text>
        </div>
      </div>
    </div>
  );
}

