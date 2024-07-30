import React from "react";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
export default function Device({ stats }) {
  const deviceCount = stats.reduce((acc, item) => {
    if (acc[item.device]) {
      acc[item.device] += 1;
    } else acc[item.device] = 1;

    return acc;
  }, {});

  // Transform cityCount into an array format suitable for the chart
  const result = Object.keys(deviceCount).map((device) => ({
    device,
    count: deviceCount[device],
  }));
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <PieChart width={700} height={400}>
          <Pie
            data={result}
            labelLine={false}
            label={({ device, percent }) =>
              `${device}:${(percent * 100).toFixed(0)}%`
            }
            dataKey="count"
          >
            {result.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
