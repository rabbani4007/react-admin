import React from "react";
import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    "Active Users": 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    "Active Users": 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    "Active Users": 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    "Active Users": 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    "Active Users": 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    "Active Users": 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    "Active Users": 3490,
    pv: 4300,
    amt: 2300,
  },
];
export default function Chart() {
  return (
    <div className="chart">
      <h3 className="chartTitle">User Analytics </h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Active Users" stroke="#5550bd" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
