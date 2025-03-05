import { Text, Button } from "components/ui";
import React from "react";

export default function EventDetails({
  buttonLabel = "JAN 2024",
  descriptionText = "Unveiling the Secrets: A Deep Dive into Cutting-Edge Technologies",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-start w-full gap-[22px] px-7 py-8 sm:p-5`}>
      <Button
        size="xl"
        shape="square"
        colorScheme="white_A700"
        className="ml-5 w-full min-w-[108px] max-w-[108px] px-2.5 sm:ml-0"
      >
        {buttonLabel}
      </Button>
      <Text
        size="text8xl"
        as="p"
        className="ml-5 w-full text-[36px] font-normal leading-[66px] sm:ml-0 sm:w-full sm:text-[30px]"
      >
        {descriptionText}
      </Text>
    </div>
  );
}

