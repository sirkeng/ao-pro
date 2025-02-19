// app/ao-pro-navigator/page.tsx
"use client";
import { BarChart } from "@/components/Charts/BarChart";
import PieChart from "@/components/Charts/PieChart";

interface styling {
  styleHeader?: string
  styleChart?: string
  styleBox?: string
}

interface data {
  dataLabels: any[],
  dataSets: any
}

export default function AoProNavigatorOverview() {
  const labelColor = {
    label1: "red",
    label2: "blue",
  }
  const barData = {
    labels: ["18-25", "26-35", "36-45", "46-60", "60+"],
    datasets: [
      {
        label: "sdwa",
        data: [70, 65, 55, 40, 30], // Example: More young people prefer coffee
        backgroundColor: "#6F4E37",
      },
      {
        label: "Tea",
        data: [30, 35, 45, 60, 70], // Example: Older people prefer tea
        backgroundColor: "#D4A017",
      },
    ],
  };
  const dataPie: any = {
    labels: ['Jedi', 'P.Keng'],
    datasets: [
      {
        label: 'data count',
        data: [12, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  const stylePieBox: styling = {
    styleChart: "w-[20rem] h-max",
    styleHeader: "text-xl font-bold",
    styleBox: "h-[28rem] p-4 gap-10 border-2 border-gray-300",
  }
  const styleBarBox: styling = {
    styleChart: "w-[40rem] h-max",
    styleHeader: "text-xl font-bold pb-4",
    styleBox: "h-[28rem] pt-6 pl-6 pr-6 gap-10 border-2 border-gray-300",
  }

  return (
    <div>
      <h1 className="text-xl font-bold">AO Pro Navigator Overview</h1>
      <p>Mockup data / charts / summary here</p>
      <div className="flex gap-5 mt-5">
        <div className=''>
          <PieChart data={dataPie} titleText={"AI-Suggesstion"} style={stylePieBox} />
        </div>
        <div className=''>
          <BarChart data={barData} titleText={"AI-Suggesstion"} style={styleBarBox}/>
        </div>
      </div>

    </div>
  );
}
