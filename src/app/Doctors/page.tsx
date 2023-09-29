"use client";
import React, { useState } from "react";
import DashBoardLayout from "@/components/DashBoardLayout/DashBoardLayout";
import { Card, Typography, Avatar, Button, IconButton } from "@material-tailwind/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
const TABLE_HEAD = ["Sr no.", "Name", "Mobile", "Email", "Age", "Proffession"];

const TABLE_ROWS = [
   {
      SRno: "1",
      name: "Dr Zim Khan",
      Mobile: "9999998999",
      Email: "Drzim@gmail.com",
      age: "22",
      proffession: "doctoer",
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
   },
   {
      SRno: "2",
      name: "Dr Zim Khan",

      Mobile: "9999998999",
      Email: "Drzim@gmail.com",
      age: "22",
      proffession: "doctoer",
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
   },
   {
      SRno: "3",
      name: "Dr Zim Khan",
      Mobile: "9999998999",
      Email: "Drzim@gmail.com",
      age: "22",
      proffession: "doctoer",
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
   },
   {
      SRno: "4",
      name: "Dr Zim Khan",
      Mobile: "9999998999",
      Email: "Drzim@gmail.com",
      age: "22",
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
      proffession: "doctoer",
   },
   {
      SRno: "5",
      name: "Dr Zim Khan",
      Mobile: "9999998999",
      Email: "Drzim@gmail.com",
      age: "22",
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
      proffession: "doctoer",
   },
   {
      SRno: "6",
      name: "Dr Zim Khan",
      Mobile: "9999998999",
      Email: "Drzim@gmail.com",
      age: "22",
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
      proffession: "doctoer",
   },

   {
      SRno: "7",
      name: "Dr Zim Khan",
      Mobile: "9999998999",
      Email: "Drzim@gmail.com",
      age: "22",
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
      proffession: "doctoer",
   },
   {
      SRno: "8",
      name: "Dr Zim Khan",
      Mobile: "9999998999",
      Email: "Drzim@gmail.com",
      age: "22",
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
      proffession: "doctoer",
   },
   {
      SRno: "9",
      name: "Dr Zim Khan",
      Mobile: "9999998999",
      Email: "Drzim@gmail.com",
      age: "22",
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
      proffession: "doctoer",
   },
   {
      SRno: "10",
      name: "Dr Zim Khan",
      Mobile: "9999998999",
      Email: "Drzim@gmail.com",
      age: "22",
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
      proffession: "doctoer",
   },
   {
      SRno: "12",
      name: "Dr Zim Khan",
      Mobile: "9999998999",
      Email: "Drzim@gmail.com",
      age: "22",
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
      proffession: "doctoer",
   },
   {
      SRno: "13",
      name: "Dr Zim Khan",
      Mobile: "9999998999",
      Email: "Drzim@gmail.com",
      age: "22",
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
      proffession: "doctoer",
   },
];

const page = () => {
   const route = useRouter();

   return (
      <DashBoardLayout>
         <div className="flex justify-between mt-10">
            <div>
               <p className="text-gray-300 text-[18px] font-semibold">List of Doctors</p>
            </div>
            <div>
               <Button
                  className="w-[167px] h-[36px] bg-green-200 text-center flex items-center justify-center"
                  onClick={() => {
                     route.push("/Doctors/Add");
                  }}
               >
                  Add Doctor +
               </Button>
            </div>
         </div>
         <div className="mt-10">
            <Card className="h-full w-full overflow-auto overflow-y-auto scrollbar-hidden cursor-pointer">
               <table className="w-full min-w-max table-auto text-left">
                  <thead>
                     <tr>
                        {TABLE_HEAD.map((head) => (
                           <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                              <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                                 {head}
                              </Typography>
                           </th>
                        ))}
                     </tr>
                  </thead>
                  <tbody>
                     {TABLE_ROWS.map(({ SRno, name, Mobile, Email, age, proffession, img }, index) => (
                        <tr key={index} className="even:bg-blue-gray-50/50">
                           <td className="p-4">
                              <Typography variant="small" color="blue-gray" className="font-normal">
                                 {SRno}
                              </Typography>
                           </td>
                           <td className="p-4">
                              <Link href={`/Doctors/${SRno}`}>
                                 <div className="flex items-center gap-3">
                                    <Avatar src={img} alt={name} size="md" className="  rounded-full object-contain w-[52px] h-[52px] p-1" />
                                    <Typography variant="small" color="blue-gray" className="font-bold">
                                       {name}
                                    </Typography>
                                 </div>
                              </Link>
                           </td>
                           <td className="p-4">
                              <Typography variant="small" color="blue-gray" className="font-normal">
                                 {Mobile}
                              </Typography>
                           </td>
                           <td className="p-4">
                              <Typography variant="small" color="blue-gray" className="font-normal">
                                 {Email}
                              </Typography>
                           </td>
                           <td className="p-4">
                              <Typography variant="small" color="blue-gray" className="font-normal">
                                 {age}
                              </Typography>
                           </td>

                           <td className="p-4">
                              <Typography variant="small" color="blue-gray" className="font-normal">
                                 {proffession}
                              </Typography>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </Card>
         </div>
      </DashBoardLayout>
   );
};

export default page;
