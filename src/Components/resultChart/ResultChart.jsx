import React from "react";
import { Line, LineChart, XAxis, YAxis } from "recharts";

const resultData = [
  { "id": 1, "name": "Alice", "physics": 85, "chemistry": 78, "biology": 92 },
  { "id": 2, "name": "Bob", "physics": 74, "chemistry": 81, "biology": 69 },
  { "id": 3, "name": "Charlie", "physics": 90, "chemistry": 88, "biology": 85 },
  { "id": 4, "name": "David", "physics": 66, "chemistry": 72, "biology": 70 },
  { "id": 5, "name": "Emma", "physics": 95, "chemistry": 91, "biology": 94 },
  { "id": 6, "name": "Frank", "physics": 58, "chemistry": 64, "biology": 61 },
  { "id": 7, "name": "Grace", "physics": 80, "chemistry": 77, "biology": 83 },
  { "id": 8, "name": "Hannah", "physics": 92, "chemistry": 89, "biology": 96 },
  { "id": 9, "name": "Ian", "physics": 70, "chemistry": 68, "biology": 72 },
  { "id": 10, "name": "Jack", "physics": 88, "chemistry": 85, "biology": 90 }
]

const ResultChart = () => {
  return (
    <>
    <h1 className="title">ResultChart</h1>
      <div>
        <LineChart width={1100} height={500} data={resultData}>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        
        <Line dataKey={"physics"} stroke="#1f77b4"></Line>
        <Line dataKey={"chemistry"} stroke="#2ca02c"></Line>
        <Line dataKey={"biology"} stroke="#d62728"></Line>
      </LineChart>
      </div>
    </>
  );
};

export default ResultChart;


// https://recharts.org/en-US/guide/installation - WEBSITE LINK