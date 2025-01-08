"use client";
import { useRef, useEffect } from "react";
import { Chart, PieController, ArcElement, Tooltip, Legend } from "chart.js";
import Image from "next/image";
import { useMyContext } from "../context/MyContextProvider";

Chart.register(PieController, ArcElement, Tooltip, Legend);

export default function QuestionAnalysis() {
  const { score } = useMyContext();
  const scoreNumber = Number(score);
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      if (ctx) {
        const myChart = new Chart(ctx, {
          type: "doughnut",
          data: {
            labels: ["Gained", "Remaining"],
            datasets: [
              {
                data: [scoreNumber, 15 - scoreNumber],
                backgroundColor: ["#2553cf", "#e0e0e0"],
                borderWidth: 0,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: "80%",
            rotation: -180,
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                enabled: false,
              },
            },
          },
        });

        return () => myChart.destroy();
      }
    }
  }, []);

  return (
    <div className="border-solid border-2 border-gray-200 rounded-md px-3 py-5 w-full  max-w-[90%] ">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold">Question Analysis</h3>
        <p className="text-[#2553cf]">
          <span>{score}</span>/15
        </p>
      </div>
      <p className="mb-5 text-gray-500">
        <span className="text-gray-600 font-bold">
          You Scored {score} questions correct out of 15.
        </span>
        However, it still needs some improvements.
      </p>
      <div className="relative w-full h-52 mt-4">
        <canvas ref={chartRef} className="w-full h-full" />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <Image
            src="/arrow-target.png"
            alt="Arrow hitting target"
            width={80}
            height={80}
          />
        </div>
      </div>
    </div>
  );
}
