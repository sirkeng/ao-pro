"use client";

import React from "react";
import { Pie, Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

interface styling {
    styleHeader?: string
    styleChart?: string
    styleBox?: string
}

interface BarChartProps {
    data: any
    titleText: string
    style?: styling
}

export const BarChart = ({ data, titleText, style }: BarChartProps) => {

    // Bar Chart Data (Preference by Age Group)
    const options: any = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Chart.js Pie Chart',
            },
        },
    }


    return (
        <div className={`flex flex-col justify-center items-center bg-white rounded-lg ${style?.styleBox}`}>
            <div className='w-full'>
                <label className={`text-left ${style?.styleHeader}`}>{titleText}</label>
            </div>
            <div className={`w-full h-full ${style?.styleChart}`}>
                <Bar data={data} options={options} />
            </div>
        </div>

    );
};