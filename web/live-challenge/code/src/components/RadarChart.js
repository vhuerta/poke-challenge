import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

/* 
Received "stats" prop format:
{
  name: ['One stat', 'Another stat'],
  stats: [123, 456, 789]
}


Expected data format: 
[
  {
    name: 'The stat's name',
    value: 123
  },
  ...
]
*/

export default function RadarStats(props) {
  const chartData = [];

  return (
    <ResponsiveContainer width={500} height={300}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis />
        <Radar
          dataKey="value"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
