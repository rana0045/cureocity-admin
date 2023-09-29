"use client";

import { Button } from "@material-tailwind/react";
import { BarChart, Bar, ResponsiveContainer } from "recharts";
import React from "react";

const data = [
    {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const index = () => {
    return (
        <>
            <div className=" flex flex-col justify-between items-center bg-white shadow-xl w-[245px] h-[302px] rounded  ">
                <div className="flex flex-row justify-between  m-5">
                    <p className="text-[13px] font-bold">Total Patients</p>
                    <p className="text-[50px] text-secondary font-semibold">345</p>
                </div>

                <ResponsiveContainer
                    width="80%"
                    height="100%"
                >
                    <BarChart
                        width={150}
                        height={40}
                        data={data}
                    >
                        <Bar
                            dataKey="uv"
                            fill="#FF3162"
                        />
                    </BarChart>
                </ResponsiveContainer>
                <div className="flex justify-center items-center w-full">
                    <Button
                        className=" text-white bg-secondary w-[221px] h-[41] mb-5 rounded-lg text-[15px] mt-2"
                        fullWidth
                    >
                        15% increased than last year
                    </Button>
                </div>
            </div>
        </>
    );
};

export default index;
