import React from "react";
import Dashboard from "@/components/Dashboard/index";
import DashBoardLayout from "@/components/DashBoardLayout/DashBoardLayout";
const page = () => {
    return (
        <>
            <DashBoardLayout>
                <Dashboard />
            </DashBoardLayout>
        </>
    );
};

export default page;
