"use client";
import React, { useState } from "react";
import DashBoardLayout from "@/components/DashBoardLayout/DashBoardLayout";
import { Button, Input, Textarea } from "@material-tailwind/react";

interface FormData {
   firstname: string;
   lastname: string;
   email: string;
   password: string;
   username: string;
   gender: string;
   address: string;
   date_of_birth: string;
   professionDetails: string;
   Mobile: string;
   file: File | null;
   profile: File | null;
}
interface TimeSlot {
   time: string;

   day: string;
}

const page = () => {
   const [formData, setFormData] = useState<{
      firstname: string;
      lastname: string;
      email: string;
      password: string;
      username: string;
      gender: string;
      address: string;
      date_of_birth: string;
      professionDetails: string;
      Mobile: string;
      file: string;
      profile: string;
      Timeslot: TimeSlot[];
   }>({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      username: "",
      gender: "",
      address: "",
      date_of_birth: "",
      professionDetails: "",
      Mobile: "",
      file: "",
      profile: "",
      Timeslot: [],
   });

   const handleSlotAdd = () => {
      const newSlot: object = {
         day: "",
         time: "",
      };
      setFormData((prevFormData: any) => ({
         ...prevFormData,
         Timeslot: [...prevFormData.Timeslot, newSlot],
      }));
   };

   const handleSlotChange = (index: number, field: keyof TimeSlot, value: string) => {
      const newTimeslotArray = [...formData.Timeslot];
      newTimeslotArray[index][field] = value;

      setFormData((prevFormData) => ({
         ...prevFormData,
         Timeslot: newTimeslotArray,
      }));
   };

   const handleInputChange = (event: any) => {
      const { name, value } = event.target;
      setFormData({
         ...formData,
         [name]: value,
      });
   };

   const handleFileChange = (file: any, fieldName: string) => {
      setFormData((prevFormData) => ({
         ...prevFormData,
         [fieldName]: file,
      }));
   };
   const handleFormSubmit = async (event: any) => {
      event.preventDefault();

      try {
         const formDataToSend = new FormData();
         for (const key in formData) {
            if (formData.hasOwnProperty(key)) {
               if (key === "Timeslot") {
                  const timeslotArray = JSON.stringify(formData[key as keyof FormData]);
                  formDataToSend.append(key, timeslotArray);
               } else {
                  formDataToSend.append(key, formData[key as keyof FormData]);
               }
            }
         }
         console.log(formDataToSend);

         const response = await fetch("http://localhost:3000/api/Users/AddDoc", {
            method: "POST",
            body: formDataToSend,
         });

         if (response.ok) {
            const data = await response.json();
            console.log(data); // Handle the response data as needed
         } else {
            console.error("Error sending data:", response.status);
         }
      } catch (error) {
         console.error("Error sending data:", error);
      }
   };

   return (
      <DashBoardLayout>
         <div className="flex flex-col justify-center items-center w-full h-auto mt-5">
            <div>
               <p>Add New Doctor</p>
            </div>

            <form className=" flex flex-col justify-center w-[932px]  " onSubmit={handleFormSubmit}>
               <p>Personal details</p>
               <div className="flex flex-col">
                  <label className="bloctext-black mt-10 mb-5">chose a profile picture</label>
                  <input
                     required
                     type="file"
                     onChange={(event) => handleFileChange(event.target.files![0], "profile")}
                     className="block w-full text-sm text-slate-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-violet-50 file:text-primary
                  hover:file:bg-violet-100"
                  />
               </div>
               <div className="flex flex-row justify-evenly mt-10 space-x-6 ">
                  <Input
                     required
                     className="mr-10 w-[368px] h-[48px] rounded-xl outline-none border-solid focus:border-primary shadow-sm pl-4"
                     crossOrigin={undefined}
                     placeholder="FIRST NAME"
                     value={formData.firstname}
                     onChange={handleInputChange}
                     type="text"
                     name="firstname"
                  />

                  <Input
                     required
                     className=" w-[368px] h-[48px] rounded-xl outline-none border-solid focus:border-primary shadow-sm pl-4"
                     crossOrigin={undefined}
                     placeholder="Last name"
                     value={formData.lastname}
                     onChange={handleInputChange}
                     type="text"
                     name="lastname"
                  />
               </div>
               <div className="flex flex-row justify-evenly mt-10 space-x-6 ">
                  <Input
                     required
                     className="mr-10 w-[368px] h-[48px] rounded-xl outline-none border-solid focus:border-primary shadow-sm pl-4"
                     crossOrigin={undefined}
                     placeholder="Email"
                     value={formData.email}
                     onChange={handleInputChange}
                     type="text"
                     name="email"
                  />

                  <Input
                     required
                     className="mr-10 w-[368px] h-[48px] rounded-xl outline-none border-solid focus:border-primary shadow-sm pl-4"
                     crossOrigin={undefined}
                     placeholder="Mobile"
                     value={formData.Mobile}
                     onChange={handleInputChange}
                     type="text"
                     name="Mobile"
                  />
               </div>
               <div className="flex w-[668px] flex-row justify-between mt-10 space-x-6 mb-10">
                  <Input
                     required
                     className="mr-10 w-[170px] h-[36px] rounded-xl outline-none border-solid focus:border-primary shadow-sm pl-4"
                     crossOrigin={undefined}
                     placeholder="DATE OF BIRTH"
                     type="date"
                     name="date_of_birth"
                     value={formData.date_of_birth}
                     onChange={handleInputChange}
                  />
                  <select
                     required
                     id="weekdayInput"
                     className="pl-4 bg-white text-gray-500 border 
                      border-gray-300 w-[170px] h-[36px] rounded-xl outline-none border-solid focus:border-primary shadow-sm"
                     name="profession"
                  >
                     <option value="Monday">Monday</option>
                     <option value="Tuesday">Tuesday</option>
                     <option value="Wednesday">Wednesday</option>
                     <option value="Thursday">Thursday</option>
                     <option value="Friday">Friday</option>
                     <option value="Saturday">Saturday</option>
                     <option value="Sunday">Sunday</option>
                  </select>

                  <label className="flex items-center">
                     <input
                        required
                        type="radio"
                        name="gender"
                        className="mr-2 pl-4"
                        value="male" // Set the value for the radio input option
                        checked={formData.gender === "male"}
                        onChange={handleInputChange}
                     />
                     Male
                  </label>
                  <label className="flex items-center">
                     <input
                        required
                        type="radio"
                        name="gender"
                        value="female" // Set the value for the radio input option
                        checked={formData.gender === "female"}
                        onChange={handleInputChange}
                        className="mr-2 pl-4"
                     />
                     Female
                  </label>
                  <label className="flex items-center">
                     <input
                        required
                        type="radio"
                        name="gender"
                        value="other" // Set the value for the radio input option
                        checked={formData.gender === "other"}
                        onChange={handleInputChange}
                        className="mr-2 pl-4"
                     />
                     Other
                  </label>
               </div>

               <p>Availbe time details</p>

               <div className="flex items-center justify-start space-x-6 mt-10 mb-10 overflow-x-auto">
                  {formData.Timeslot.map((slot, index) => (
                     <div key={index}>
                        <input
                           required
                           className="mr-10    max-w-[170px]   rounded-xl outline-none border-solid focus:border-primary shadow-sm pl-4"
                           type="time"
                           placeholder={`Time for Slot ${index + 1}`}
                           value={slot.time}
                           onChange={(e) => handleSlotChange(index, "time", e.target.value)}
                        />
                        <select
                           required
                           className="pl-4 bg-white text-gray-500 border border-gray-300 w-[170px] h-[36px] rounded-xl outline-none border-solid focus:border-primary shadow-sm"
                           value={slot.day}
                           onChange={(e) => handleSlotChange(index, "day", e.target.value)}
                        >
                           <option value="">Select a Day</option>
                           <option value="Monday">Monday</option>
                           <option value="Tuesday">Tuesday</option>
                           <option value="Wednesday">Wednesday</option>
                           <option value="Thursday">Thursday</option>
                           <option value="Friday">Friday</option>
                           <option value="Saturday">Saturday</option>
                           <option value="Sunday">Sunday</option>
                        </select>
                     </div>
                  ))}
               </div>
               <Button className="bg-primary text-white w-[134px] h-[36px] flex items-center justify-center" type="button" onClick={handleSlotAdd}>
                  Add Slot
               </Button>
               <div className="flex justify-between mt-10 ">
                  <Textarea
                     required
                     className="w-[807] h-[88px] rounded outline-none focus:border-primary pl-4"
                     name="address"
                     placeholder="Address"
                     value={formData.address}
                     onChange={handleInputChange}
                  />
               </div>
               <div className="flex justify-between mt-10 ">
                  <Textarea
                     required
                     className="w-[807] h-[88px] rounded outline-none focus:border-primary pl-5"
                     placeholder="Proffession details " //gg,
                     name="professionDetails"
                     value={formData.professionDetails}
                     onChange={handleInputChange}
                  />
               </div>
               <div className="flex flex-col">
                  <label className="bloctext-black mt-10 mb-5">chose addtional document</label>
                  <input
                     required
                     type="file"
                     onChange={(event) => handleFileChange(event.target.files![0], "file")}
                     className="block w-full text-sm text-slate-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-violet-50 file:text-primary
                  hover:file:bg-violet-100"
                  />
               </div>
               <div className="w-full h-auto">
                  <Button type="submit" className=" w-full mt-10 bg-primary mb-10">
                     Add doctor
                  </Button>
               </div>
            </form>
         </div>
      </DashBoardLayout>
   );
};

export default page;
