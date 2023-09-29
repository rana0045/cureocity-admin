"use client";
import React from "react";
import DashBoardLayout from "@/components/DashBoardLayout/DashBoardLayout";

const Doctor = ({ params }: any) => {
    console.log(params);

    return (
        <DashBoardLayout>
            <div>page</div>
            <p>{params.Doctor}</p>
        </DashBoardLayout>
    );
};

export default Doctor;
