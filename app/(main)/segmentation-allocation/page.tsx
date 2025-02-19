// app/segmentation-allocation/page.tsx
"use client";
import WrapCircleProgress from "@/components/Chart/CircleProgress";
import CircleProgressBar from "@/components/Chart/CircleProgress";
import { Bar } from "react-chartjs-2";

export default function SegmentationOverview() {
  return (
    <div>
      <h1 className="text-xl font-bold">Segmentation Overview</h1>
      <p>Mockup charts / data for managers or senior roles only</p>
      <div>
        <WrapCircleProgress progress={60} />
      </div>
      <div>
      </div>
    </div>
  );
}
