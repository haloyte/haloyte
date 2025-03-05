import { Button, Text, Heading, Img } from "components/ui";
import React from "react";

export default function UserProfile({
  userImage = "images/img_ellipse_11.png",
  userName = "Aayush",
  userOccupation = "3D Artist",
  userActionButtonText = "3D Animator &  Modeler",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col justify-center self-stretch gap-[34px] p-5 flex-1 rounded-[20px]`}
    >
      <div className="mt-1 flex items-start justify-center gap-3.5 self-stretch">
        <Img src={userImage} alt="Aayush" className="h-[46px] self-center rounded-[22px] object-cover" />
        <div className="flex flex-1 flex-col items-start gap-0.5">
          <Heading size="text6xl" as="p" className="text-[20px] font-normal">
            {userName}
          </Heading>
          <Text size="text2xl" as="p" className="text-[10px] font-normal">
            {userOccupation}
          </Text>
        </div>
      </div>
      <Button size="sm" className="w-full max-w-[146px] self-stretch rounded-[10px] px-3 font-sfprodisplay">
        {userActionButtonText}
      </Button>
    </div>
  );
}

