import { Img, Button, Text } from "components/ui";
import React from "react";

export default function ServicesRowcontactus() {
   return (
     <div className="mt-9 relative">
       <div className="flex flex-col items-center gap-7">
         <div className="mx-auto flex w-full flex-col items-center px-14 md:px-5">
           <a href="#">
             <Text as="p" className="text-[16px] font-normal !text-primary">
               CONTACT US
             </Text>
           </a>
         </div>
         <div className="flex items-center justify-center w-full md:flex-col relative">
           {/* Left Glow */}
           <Img
             src="images/glow_left.png"
             alt="Glow Left"
             className="absolute left-0 h-[200px] mt-12 w-auto object-contain pointer-events-none"
           />
 
           {/* Text Section Centered */}
           <div className="flex flex-col items-center  text-center px-14 md:px-5">
             <div className="relative flex flex-col items-center">
               <Text
                 size="text13xl"
                 as="p"
                 className="text-[150px] font-normal md:text-[48px] leading-none"
               >
                 LET'S GET
               </Text>
               {/* <Img
                 src="images/img_user_white_a700.svg"
                 alt="User"
                 className="absolute top-[15%] left-1/2 transform -translate-x-1/2 h-[60px] w-[6%] object-contain"
               /> */}
             </div>
 
             {/* STARTED (Outlined in White) */}
             <Text
   size="lg"
   shape="round"
   colorScheme="transparent"
   className="w-auto px-10 pb-3 text-[150px] md:text-[48px] font-bold uppercase rounded-full"
   style={{
     WebkitTextStroke: "3px white", // White outline
     color: "transparent", // Transparent fill
   }}
 >
   STARTED
 </Text>
 
             {/* GET IN TOUCH (Gray Outlined Button Below) */}
             <Button
   size="lg"
   shape="round"
   colorScheme="transparent"
   className="relative w-auto px-10 py-3 text-[20px] font-semibold uppercase border-2 border-white text-white rounded-full overflow-hidden transition duration-300"
 >
   <span className="relative z-10 text-white">GET IN TOUCH</span>
   <span className="absolute inset-0 bg-white transition-all duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0"></span>
 </Button>
 
           </div>
 
           {/* Right Glow */}
           <Img
             src="images/glow_right.png"
             alt="Glow Right"
             className="absolute right-0 h-[200px] mt-12 w-auto object-contain pointer-events-none"
           />
         </div>
       </div>
     </div>
   );
}

