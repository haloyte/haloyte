import React from "react";

const StarIcon = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 0L10.3125 10.3125L0 15L10.3125 19.6875L15 30L19.6875 19.6875L30 15L19.6875 10.3125" fill="white"/>
  </svg>
);

export default function DesignSkillsRow({
  uiUxDesignText = "UI/UX DESIGN",
  graphicDesignText = "GRAPHIC DESIGN",
  modelingAnimationText = "3D MODELING & ANIMATION",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} overflow-hidden bg-primary py-[30px] sm:py-5`}>
      <div className="marquee">
        <div className="marquee-content">
          {/* Duplicate content to create a seamless loop */}
          {[...Array(2)].map((_, index) => (
            <div key={index} className="marquee-item">
              {uiUxDesignText} <StarIcon /> {graphicDesignText} <StarIcon /> {modelingAnimationText} <StarIcon />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee {
          display: flex;
          overflow: hidden;
          white-space: nowrap;
          position: relative;
          width: 100%;
        }

        .marquee-content {
          display: flex;
          animation: marqueeScroll 30s linear infinite; /* Adjust speed here */
        }

        .marquee-item {
          font-size: 46px;
          font-weight: normal;
          padding-right: 50px;
          color: white;
          display: flex;
          align-items: center;
          gap: 20px; /* Adjust spacing between items */
        }

        @keyframes marqueeScroll {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}
