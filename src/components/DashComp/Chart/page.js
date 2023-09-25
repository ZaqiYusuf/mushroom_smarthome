"use client";

import { useState, useEffect } from "react";
import css from "./chart.module.css";
import Image from "next/image";
import UserData from "./data/page";
import LineChart from "./chart/LineChart";
import config from "./config/page";

const Chart = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.month),
    ...config,
    datasets: [
      {
        label: "Suhu",
        data: UserData.map((data) => data.Suhu),
        tension: 0.3,
        fill: true,
        backgroundColor: "rgba(57, 255, 20)",
      },
      {
        label: "Kelembapan",
        data: UserData.map((data) => data.Kelembapan),
        tension: 0.3,
        fill: true,
        backgroundColor: "rgba(0, 150, 255)",
      },
    ],
  });
  return (
    <div className={css.adjust}>
      <div className={css.ChartContainer}>
        <div className={css.teks}>
          <div className={css.bold}>
            <p>Suhu & Kelembapan</p>
            <div className={css.month}>
              <p>This Month</p>
              <Image />
            </div>
          </div>
        </div>
        <LineChart className={css.LineChart} chartData={userData} />
      </div>
    </div>
  );
};

export default Chart;
