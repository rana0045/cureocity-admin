"use client";
import React, { useState } from "react";
import DashBoardLayout from "@/components/DashBoardLayout/DashBoardLayout";
import { Button, Input, Textarea } from "@material-tailwind/react";
const page = () => {
    const [formValues, setFormValues] = useState({
        firstName1: "",
        firstName2: "",
        firstName3: "",
        lastName1: "",
        lastName2: "",
        lastName3: "",
        gender: "",
        speciality1: "",
        speciality2: "",
        speciality3: "",
        address1: "",
        address2: "",
    });

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(formValues);
    };

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    return (
        <DashBoardLayout>
            <div className="flex flex-col justify-center items-center w-full h-auto mt-5">
                <div>
                    <p>Add New Doctor</p>
                </div>

                <form className=" flex flex-col justify-center w-[932px]  ">
                    <p>Personal details</p>

                    <div className="flex flex-row justify-evenly mt-10 space-x-6 ">
                        <Input
                            className="mr-10 w-[368px] h-[48px] rounded-xl outline-none border-solid focus:border-primary shadow-sm pl-4"
                            crossOrigin={undefined}
                            placeholder="FIRST NAME"
                            type="text"
                            name="first name"
                        />

                        <Input
                            className=" w-[368px] h-[48px] rounded-xl outline-none border-solid focus:border-primary shadow-sm pl-4"
                            crossOrigin={undefined}
                            placeholder="Last name"
                            type="text"
                            name="Last name"
                        />
                    </div>

                    <div className="flex flex-row justify-evenly mt-10 space-x-6 ">
                        <Input
                            className="mr-10 w-[368px] h-[48px] rounded-xl outline-none border-solid focus:border-primary shadow-sm pl-4"
                            crossOrigin={undefined}
                            placeholder="Email"
                            type="text"
                            name="email"
                        />

                        <Input
                            className="mr-10 w-[368px] h-[48px] rounded-xl outline-none border-solid focus:border-primary shadow-sm pl-4"
                            crossOrigin={undefined}
                            placeholder="Mobile"
                            type="text"
                            name="email"
                        />
                    </div>
                    <div className="flex flex-row justify-evenly mt-10 space-x-6 mb-10">
                        <Input
                            className="mr-10 w-[170px] h-[36px] rounded-xl outline-none border-solid focus:border-primary shadow-sm pl-4"
                            crossOrigin={undefined}
                            placeholder="DATE OF BIRTH"
                            type="date"
                            name="DoB"
                        />

                        <Input
                            className=" w-[170px] h-[36px] rounded-xl outline-none border-solid focus:border-primary shadow-sm pl-4"
                            crossOrigin={undefined}
                            placeholder="Age"
                            type="text"
                            name="age"
                        />

                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                className="mr-2 pl-4"
                            />
                            Male
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                className="mr-2 pl-4"
                            />
                            Female
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="gender"
                                value="other"
                                className="mr-2 pl-4"
                            />
                            Other
                        </label>
                    </div>
                    <p>Availbe time details</p>

                    <div className="flex flex-row justify-evenly mt-10 space-x-6 mb-10">
                        <Textarea
                            className="w-[807] h-[88px] outline-none focus:border-primary pl-4"
                            placeholder="Address"
                        />
                    </div>
                    <div>
                        <input
                            className="h-[67px]"
                            id="file_input"
                            type="file"
                        />
                    </div>
                    <div className="w-full h-auto">
                        <Button className=" w-full mt-10 bg-primary">Add doctor</Button>
                    </div>
                </form>
            </div>
        </DashBoardLayout>
    );
};

export default page;
