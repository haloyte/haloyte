import UserProfile from "../../components/UserProfile";
import { Img, Text, Heading } from "components/ui";
import React, { Suspense, useState } from "react";

const data = [
  {
    userImage: "images/img_ellipse_11.png",
    userName: "Aayush",
    userOccupation: "3D Artist",
    userActionButtonText: "3D Animator & Modeler",
    message: "Hey I am Aayush",
  },
  {
    userImage: "images/img_ellipse_11_42x44.png",
    userName: "Avi",
    userOccupation: "UI/UX & Graphics Designer",
    userActionButtonText: "3D Animator & Modeler",
    message: "Hey I am Avi",
  },
  {
    userImage: "images/img_ellipse_11.png",
    userName: "Vishal",
    userOccupation: "CEO",
    userActionButtonText: "3D Animator & Modeler",
    message: "Hey I am Vishal",
  },
  {
    userImage: "images/img_ellipse_11.png",
    userName: "Rahul",
    userOccupation: "Software Engineer",
    userActionButtonText: "Backend Developer",
    message: "Hey I am Rahul",
  },
  {
    userImage: "images/img_ellipse_11.png",
    userName: "Aryan",
    userOccupation: "COO",
    userActionButtonText: "Backend Developer",
    message: "Hey I am Aryan",
  },
];

export default function AboutusColumnFour() {
  const [selectedUser, setSelectedUser] = useState(data[0]);

  return (
    <div className="mt-8 flex flex-col items-center">
      <div className="mx-auto flex w-full max-w-[1206px] flex-col items-center gap-[26px] px-9 md:px-5">
        <div className="flex flex-col items-center">
          <Text as="p" className="relative z-[5] text-[16px] font-normal !text-primary">
            GET TO KNOW
          </Text>
          <Heading size="heading2xl" as="h2" className="text-[48px] font-bold md:text-[44px] sm:text-[38px]">
            OUR TEAM
          </Heading>
        </div>

        {/* Row container for small profiles and large profile */}
        <div className="flex w-full items-start gap-8 md:flex-col">
          {/* Small Profile Cards (Scrollable) */}
          <div className="flex w-1/3 flex-col gap-4 overflow-y-auto max-h-[500px]">
            <Suspense fallback={<div>Loading feed...</div>}>
              {data.map((user, index) => (
                <div 
                  key={index} 
                  onClick={() => setSelectedUser(user)} 
                  className="cursor-pointer"
                >
                  <UserProfile 
                    {...user} 
                    className="bg-gradient2"
                    isSelected={selectedUser.userName === user.userName} // Add this line
                  />
                </div>
              ))}
            </Suspense>
          </div>

          {/* Big Profile Card */}
          <div className="flex w-2/3">
            <div className="w-1/2 rounded-bl-[40px] rounded-tl-[40px] bg-gray-500_01">
              <Img
                src={selectedUser.userImage}
                alt={selectedUser.userName}
                className="h-[516px] w-full rounded-bl-[40px] rounded-tl-[40px] rounded-tr-[40px] object-cover md:h-auto"
              />
            </div>
            <div className="flex w-1/2 flex-col items-center justify-center gap-3.5 rounded-br-[40px] rounded-tr-[40px] bg-primary px-7 py-36 md:w-full md:py-5 sm:p-5">
              <div className="flex flex-col items-center gap-4 self-stretch">
                <div className="flex flex-col items-center gap-0.5">
                  <Heading size="headingxl" as="h3" className="text-[36px] font-bold md:text-[34px] sm:text-[32px]">
                    {selectedUser.userName}
                  </Heading>
                  <Text as="p" className="text-[16px] font-normal">{selectedUser.userOccupation}</Text>
                </div>
                <Text as="p" className="self-stretch text-center text-[16px] font-normal leading-10">
                  {selectedUser.message}
                </Text>
              </div>
              <div className="flex gap-5">
                <Img src="images/img_icons8_instagram.png" alt="Instagram" className="h-[48px] object-cover" />
                <Img src="images/img_television_blue_500.svg" alt="LinkedIn" className="h-[48px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}