import React from "react";
import TotalPatients from "./TotalPatients/index";
import TotalDoctor from "./TotalDoctor/index";
import TotalAppointments from "./TotalAppointments/index";
import Graph from "./Graph/index";
import { Button } from "@material-tailwind/react";

const Dashboard = () => {
    return (
        <div className=" container">
            <p className="text-black text--[18px] mb-16 ">
                <span className="text-primary text-[18px] font-bold">Super Admin </span>
                Dashboard
            </p>

            <div className="grid grid-cols-3  md:grid-cols-3  sm:grid-cols-1 ml-5 max-sm:grid-cols-1 max-sm:gap-5 sm:gap-5 ">
                <div className="flex justify-center">
                    <TotalPatients />
                </div>
                <div className="flex justify-center">
                    <TotalDoctor />
                </div>
                <div className="flex justify-center">
                    {" "}
                    <TotalAppointments />
                </div>
            </div>

            <div className=" flex justify-center flex-col  h-full mt-20 bg-white shadow-lg">
                <Graph />
            </div>
        </div>
    );
};

export default Dashboard;
