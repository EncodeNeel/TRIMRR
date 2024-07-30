import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Location({ stats }) {
  // Count occurrences of each city
  const cityCount = stats.reduce((acc, item) => {
    if (acc[item.city]) {
      acc[item.city] += 1;
    } else acc[item.city] = 1;

    return acc;
  }, {});

  // Transform cityCount into an array format suitable for the chart
  const cities = Object.keys(cityCount).map((city) => ({
    city,
    count: cityCount[city],
  }));

  console.log(cities); // Log the correct variable

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <LineChart width={700} height={300} data={cities.slice(0, 5)}>
          <XAxis dataKey="city" />
          <YAxis />
          <Tooltip labelStyle={{ color: "green" }} />
          <Legend />
          <Line type="monotone" dataKey="count" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
