"use client";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useTimeoutFn } from "react-use";

export default function Home() {
   const route = useRouter();

   let [isShowing, setIsShowing] = useState(true);
   let [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 500);

   useEffect(() => {
      setIsShowing(false);
      resetIsShowing();
      setTimeout(() => {
         route.push("/login");
      }, 2000);
      // Restore scrollbar when the component unmounts
      return () => {
         document.body.style.overflow = "auto";
      };
   }, []);

   // Hide scrollbar when the component mounts

   return (
      <div className="flex justify-center items-center h-screen">
         <Transition
            as={Fragment}
            show={isShowing}
            enter="transform transition duration-[400ms]"
            enterFrom="opacity-0 rotate-[-120deg] scale-50"
            enterTo="opacity-100 rotate-0 scale-100"
            leave="transform duration-200 transition ease-in-out"
            leaveFrom="opacity-100 rotate-0 scale-100 "
            leaveTo="opacity-0 scale-95 "
         >
            <Image src="/images/logo.png" alt="logo" width={250} height={250} />
         </Transition>
      </div>
   );
}
