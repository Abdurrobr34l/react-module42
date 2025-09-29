import React, { use } from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const MarksChart = ({ marksPromise }) => {
  const marksResponse = use(marksPromise);
  const marksData = marksResponse.data;
  // console.log(marksData);

  return (
    <>
      <h1 className="title my-10">MarksChart</h1>

      <BarChart width={1100} height={500} data={marksData}>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Bar dataKey={"price"} fill="yellow"></Bar>
      </BarChart>
    </>
  );
};

export default MarksChart;
