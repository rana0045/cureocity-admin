"use client";
import { forwardRef } from "react";
import Link from "next/link";

import { HomeIcon, UserIcon } from "@heroicons/react/20/solid";
import { HiUserGroup, HiIdentification, HiFolderAdd, HiOutlineLogin } from "react-icons/hi";
import { useRouter, usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { Avatar, Button } from "@material-tailwind/react";
import { useSession } from "next-auth/react";

interface SideBarProps {
   showNav: boolean;
}

const SideBar = forwardRef<HTMLDivElement, SideBarProps>(({ showNav }, ref) => {
   const handleSignOut = () => {
      signOut(); // Initiate the sign-out process
   };

   const { data: session } = useSession();

   const PagesName = [
      {
         path: "/dashboard",
         icon: <HomeIcon className="w-5 h-5" />,
         name: "Dashboard",
      },
      {
         path: "/Doctors",
         icon: <UserIcon className="w-5 h-5" />,
         name: "Doctors",
      },
      {
         path: "/Users",
         icon: <HiUserGroup className="w-5 h-5" />,
         name: "Users",
      },
      {
         path: "/Proffessionals",
         icon: <HiIdentification className="w-5 h-5" />,
         name: "Proffessionals",
      },
      {
         path: "/Appointment",
         icon: <HiFolderAdd className="w-5 h-5" />,
         name: "Appointment",
      },
   ];

   const logIut = [
      {
         path: "",
         icon: <HiOutlineLogin className="w-5 h-5" />,
         name: "LogOut",
      },
   ];

   const route = useRouter();
   const path = usePathname();

   return (
      <div ref={ref} className=" fixed w-56 h-full z-50  bg-white shadow-sm">
         <div className="flex flex-col justify-center mt-6 mb-14">
            <div className="felx justify-center  mt-6 mb-14 items-center text-center ">
               <Avatar className="ml-[20px]" src="/images/avtar.png" alt="avatar" size="xxl" />
               <div className=" felx justify-center text-center">
                  <p className=" text-[24px] font-normal font-sans"> ADMIN</p>
                  <br />
                  <p className=" font-semibold text-gray-400 font-sans">Admin</p>
               </div>
            </div>
            {PagesName.map((item, index) => {
               return (
                  <div className="felx flex-col" key={index}>
                     <Link href={item.path}>
                        <div
                           className={`   pl-4 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors 
                            first-letter:  ${path === item.path ? "text-[#FF3162] bg-pink-100" : " text-gray-600 hover:text-[#FF3162] hover:bg-pink-100"}`}
                        >
                           <div className="mr-2">{item.icon}</div>
                           <div>
                              <p className=" text-[16px] font-bold font-sans">{item.name}</p>
                           </div>
                        </div>
                     </Link>
                  </div>
               );
            })}
         </div>
         <div className="flex flex-col justify-center mt-6 mb-14">
            {logIut.map((item, index) => {
               return (
                  <div className="felx flex-col" key={index} onClick={handleSignOut}>
                     <div
                        className={`border border-pink-100 pl-4 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors 
                            first-letter:  ${path === item.path ? "text-[#FF3162] bg-pink-100" : " text-gray-600 hover:text-[#FF3162] hover:bg-pink-100"}`}
                     >
                        <div className="mr-2">{item.icon}</div>
                        <div>
                           <p className=" text-[16px] font-bold font-sans">{item.name}</p>
                        </div>
                     </div>
                  </div>
               );
            })}
         </div>
      </div>
   );
});

SideBar.displayName = "SideBar";

export default SideBar;
