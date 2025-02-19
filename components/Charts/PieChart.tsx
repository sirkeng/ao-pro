'use client';
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { title } from 'process';
ChartJS.register(ArcElement, Tooltip, Legend);

interface styling {
    styleHeader?: string
    styleChart?: string
    styleBox?: string
}

interface PieChartProps {
    data: any
    titleText: string
    style?: styling
}

export default function PieChart({data, titleText, style }: PieChartProps) {

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
                <Pie data={data} options={options} />
            </div>
        </div>
    )
}
