"use client";

import { LineChart } from "@mui/x-charts/LineChart";

interface PercentileChartProps {
  currentPercentile: string;
}

export default function LineGraph({ currentPercentile }: PercentileChartProps) {
  const percentileData = [0, 25, 50, 75, 100];

  const currentPercentileData = Array(percentileData.length).fill(
    currentPercentile
  );

  return (
    <div>
      <LineChart
        xAxis={[
          {
            data: percentileData,
            scaleType: "point",
            label: "Percentile",
          },
        ]}
        yAxis={[
          {
            scaleType: "linear",
            label: "Value",
          },
        ]}
        series={[
          {
            data: percentileData,
            label: "Percentile Range",
            color: "#e0e0e0",
          },
          {
            data: currentPercentileData,
            label: "Your Percentile",
            color: "#2553cf",
            showMark: true,
          },
        ]}
        width={600}
        height={400}
      />
    </div>
  );
}
