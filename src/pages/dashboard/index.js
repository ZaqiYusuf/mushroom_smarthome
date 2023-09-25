import React from "react";
import Sidebar from "src/components/DashComp/Sidebar/page";
import Navbar from "src/components/DashComp/Navbar/page";
import Card from "src/components/DashComp/Card/page";
import Chart from "src/components/DashComp/Chart/page"
import Style from "./main.module.css";

export default function Dashboard() {
  return (
    <div className={Style.MainContainer}>
      <Sidebar />
      <div className={Style.body}>
        <Navbar />
        <Card />
        <Chart />
      </div>
    </div>
  );
}
