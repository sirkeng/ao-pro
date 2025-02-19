import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import React from 'react';

// Register necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

interface CustomCircleProps {
    progress: number; // Progress as a percentage (0 to 100)
    animate?: boolean;
    borderRadius?: number;
    isPercentage?: boolean;
}

interface CircleProgressBarProps {
    progress: number; // Progress as a percentage (0 to 100)
}

const CustomCircle: React.FC<CustomCircleProps> = ({ progress, isPercentage, borderRadius = 0, animate = false }) => {
    // Ensure progress is between 0 and 100
    const value = Math.max(0, Math.min(progress, 100));

    const data = {
        datasets: [
            {
                data: [value, 100 - value],
                backgroundColor: ['#4caf50', '#e0e0e0'],
                borderWidth: 0,
            },
        ],
    };

    const options: any = {
        hover: { mode: false },
        responsive: true,
        borderRadius: borderRadius,
        cutout: '70%', // Makes it a doughnut
        rotation: -0, // Starts at the top (12 o'clock)
        circumference: 360, // Controls the arc length (can adjust this for different effects)
        animation: animate ? { animateRotate: true, } : false,
        plugins: {
            tooltip: {
                enabled: false, // Disable tooltip
            },
            legend: {
                display: false, // Hide the legend
            },
        },
    };

    return (
        <div className="relative flex justify-center items-center">
            <div className='rotate-360'>
                <Doughnut data={data} options={options} />
            </div>
            {
                isPercentage ? <span className="absolute text-2xl font-semibold scale-x-[-1]">{value}%</span> : null
            }

        </div>
    );
};

const CircleProgressBar: React.FC<CircleProgressBarProps> = ({ progress }) => {
    return (
        <div className="">
            <div className='flex'>
                {/* <div className="absolute top-0 left-0">
                    <CustomCircle progress={0} isPercentage={false} />
                </div> */}
                <div className="top-0 left-0 scale-x-[-1]">
                    <CustomCircle progress={progress} isPercentage={true} borderRadius={0} animate={true} />
                </div>
            </div>


        </div>
    )
}

export default CircleProgressBar;