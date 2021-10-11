import React, { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function StatsChart(props) {
  const chartData = useMemo(() => {
    return props.stats.name.map((name, index) => {
      return {
        name,
        value: props.stats.stats[index],
      };
    });
  }, [props.stats]);

  return (
    <>
      <BarChart
        width={500}
        height={300}
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#0090ff" />
      </BarChart>
    </>
  );
}
