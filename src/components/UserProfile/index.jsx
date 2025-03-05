import { Button, Text, Heading, Img } from "components/ui";
import React from "react";

export default function UserProfile({
  userImage = "images/img_ellipse_11.png",
  userName = "Aayush",
  userOccupation = "3D Artist",
  userActionButtonText = "3D Animator & Modeler",
  isSelected = false, 
  onSelect, // Optional callback for selection
  ...props
}) {
  return (
    <div
      {...props}
      onClick={onSelect} // Add optional click handler
      className={`
        flex flex-col justify-center self-stretch gap-[34px] p-5 flex-1 rounded-[20px]
        transition-all duration-300 ease-in-out
        ${
          isSelected 
            ? "bg-primary text-white" // Explicit primary background when selected
            : "bg-white border border-primary text-primary" // White background with primary border when not selected
        }
        cursor-pointer // Add pointer cursor to indicate interactivity
      `}
    >
      <div className="mt-1 flex items-center justify-center gap-3.5 self-stretch">
        <Img 
          src={userImage} 
          alt={userName} 
          className="h-[50px] w-[50px] rounded-full object-cover" 
        />
        <div className="flex flex-col items-start">
          <Heading 
            size="text6xl" 
            as="p" 
            className={`
              text-[40px] font-normal 
              ${isSelected ? "text-white" : "text-primary"}
            `}
          >
            {userName}
          </Heading>
          <Text 
            size="text2xl" 
            as="p" 
            className={`
              text-[20px] font-normal 
              ${isSelected ? "text-white" : "text-primary"}
            `}
          >
            {userOccupation}
          </Text>
        </div>
      </div>
      <Button 
        size="text2xl" 
        className="w-full p-5 self-stretch rounded-[10px] px-3 font-sfprodisplay"
      >
        {userActionButtonText}
      </Button>
    </div>
  );
}