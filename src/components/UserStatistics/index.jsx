import { Text } from "components/ui";
import React from "react";

export default function UserStatistics({
  experienceCount = "2+",
  experienceLabel = "EXPERIENCE",
  projectCount = "20+",
  projectsCompletedLabel = "PROJECTS COMPLETED",
  happyClientsCount = "10+",
  happyClientsLabel = "HAPPY CLIENTS",
  ...props
}) {
  // Function to format numbers with broader +
  const formatCount = (count, isOutlined) => {
    const numberPart = count.replace("+", ""); // Extract number
    return (
      <>
        <span>{numberPart}</span>
        <span
          style={{
            WebkitTextStroke: isOutlined ? "4px white" : "none", // Broader stroke
            color: isOutlined ? "transparent" : "inherit", // Outlined or solid
            fontWeight: "900",
            fontSize: "1.2em", // Slightly bigger to make it stand out
            marginLeft: "4px", // Adds spacing to make it clear
          }}
        >
          +
        </span>
      </>
    );
  };

  return (
    <div {...props} className={`${props.className} flex justify-center items-center py-5 bg-primary`}>
      <div className="mx-auto flex w-full max-w-[1206px] items-center justify-between px-14 md:px-5">

        {/* Experience Section - Solid + */}
        <div className="flex flex-col items-center w-1/3 px-4">
          <Text size="text12xl" as="p" className="text-[96px] font-bold md:text-[48px]">
            {formatCount(experienceCount, false)}
          </Text>
          <Text size="text7xl" as="p" className="text-[24px] font-bold md:text-[20px]">
            {experienceLabel}
          </Text>
        </div>

        {/* Projects Completed Section - Outlined + */}
        <div className="flex flex-col items-center w-1/3 px-4">
          <Text 
            size="text12xl" 
            as="p" 
            className="text-[96px] font-bold md:text-[48px] text-transparent"
            style={{
              WebkitTextStroke: "2px white",
              color: "transparent",
            }}
          >
            {formatCount(projectCount, true)}
          </Text>
          <Text size="text7xl" as="p" className="text-[24px] font-bold md:text-[20px] text-center">
            {projectsCompletedLabel}
          </Text>
        </div>

        {/* Happy Clients Section - Solid + */}
        <div className="flex flex-col items-center w-1/3 px-4">
          <Text size="text12xl" as="p" className="text-[96px] font-bold md:text-[48px]">
            {formatCount(happyClientsCount, false)}
          </Text>
          <Text size="text7xl" as="p" className="text-[24px] font-bold md:text-[20px] text-center">
            {happyClientsLabel}
          </Text>
        </div>

      </div>
    </div>
  );
}
