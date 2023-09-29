"use client";
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
    {
        name: "Jan",
        DOCTOR: 4000,
        USER: 2400,
        amt: 2400,
    },
    {
        name: "Feb",
        DOCTOR: 3000,
        USER: 1398,
        amt: 2210,
    },
    {
        name: "Mar",
        DOCTOR: 2000,
        USER: 9800,
        amt: 2290,
    },
    {
        name: "Apr",
        DOCTOR: 2780,
        USER: 3908,
        amt: 2000,
    },
    {
        name: "May",
        DOCTOR: 1890,
        USER: 4800,
        amt: 2181,
    },
    {
        name: "Jun",
        DOCTOR: 2390,
        USER: 3800,
        amt: 2500,
    },
    {
        name: "Aug",
        DOCTOR: 3490,
        USER: 4300,
        amt: 2100,
    },
];

const LineChartComponent = () => {
    return (
        <div>
            <ResponsiveContainer
                width="100%"
                height={300}
            >
                <LineChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />

                    <Line
                        dataKey="USER"
                        stroke="#FF3162"
                        activeDot={{ r: 8 }}
                    />
                    <Line
                        dataKey="DOCTOR"
                        stroke="#FF7900"
                        fill="#FF7900"
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default LineChartComponent;
