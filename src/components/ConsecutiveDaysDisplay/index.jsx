import { Img, Text } from "components/ui";
import React from "react";

export default function ConsecutiveDaysDisplay({
  prizeImage = "images/img_prize.svg",
  consecutiveDaysText = "&lt;&gt;Consecutive&lt;br /&gt;days&lt;/&gt;",
  daysCountText = "20",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col justify-center w-[50%] gap-3 bg-white-a700 rounded`}>
      <div className="flex items-center self-stretch">
        <div className="flex flex-col items-center rounded-md bg-red-100 p-0.5">
          <Img src={prizeImage} alt="Consecutivedays" className="h-[10px]" />
        </div>
        <Text
          size="textmd"
          as="p"
          className="w-[48%] !font-arialroundedmtbold text-[5.27px] font-normal leading-[6px] !text-gray-800_01"
        >
          {consecutiveDaysText}
        </Text>
      </div>
      <div className="flex justify-between gap-5 self-stretch">
        <Text size="text2xl" as="p" className="ml-1 !font-arialroundedmtbold text-[10.53px] font-normal !text-red-a400">
          {daysCountText}
        </Text>
        <Img src="images/img_go_back_gray_900_01.svg" alt="Image" className="h-[14px]" />
      </div>
    </div>
  );
}

