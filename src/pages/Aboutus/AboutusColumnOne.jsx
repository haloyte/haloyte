import { Text, Heading } from "components/ui";
import React from "react";

export default function AboutusColumnOne() {
  return (
    <div className="flex flex-col items-center">
      <div className="mx-auto flex w-full max-w-[1206px] flex-col items-center gap-[26px] px-14 md:px-5">
        <Heading size="headinglg" as="h2" className="text-[28px] font-bold md:text-[26px] sm:text-[24px]">
          WHAT SETS US APART
        </Heading>
        <div className="flex w-[80%] justify-center rounded-[10px] bg-primary p-8 md:w-full text-white-a700 ">
          <ul className="w-[98%] list-disc text-[24px] font-normal leading-7 text-white md:text-[22px] ">
            <li className="my-3">
              <strong>Innovative Solutions:</strong> We stay ahead of the curve by embracing the latest technologies and 
              trends to deliver innovative solutions that set your brand apart in the digital landscape.
            </li>
            <li className="my-3">
              <strong>Client-Centric Focus:</strong> Your success is our success. We prioritize open communication, 
              responsiveness, and a client-centric approach to build long-lasting partnerships.
            </li>
            <li className="my-3">
              <strong>Creative Excellence:</strong> Our team is a blend of creative minds and technical experts. From 
              concept to execution, we infuse creativity into every aspect of our work, ensuring your brand leaves a 
              lasting impression.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
