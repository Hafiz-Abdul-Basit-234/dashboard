import "./Graph.css";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", investment: 35, loss: 35, profit: 35, maintenance: 0 },
  { month: "Feb", investment: 125, loss: 15, profit: 145, maintenance: 0 },
  { month: "Mar", investment: 30, loss: 20, profit: 35, maintenance: 75 },
  { month: "Apr", investment: 35, loss: 35, profit: 35, maintenance: 0 },
  { month: "May", investment: 35, loss: 65, profit: 20, maintenance: 0 },
  { month: "Jun", investment: 80, loss: 40, profit: 105, maintenance: 115 },
  { month: "Jul", investment: 35, loss: 80, profit: 100, maintenance: 0 },
  { month: "Aug", investment: 15, loss: 30, profit: 10, maintenance: 0 },
  { month: "Sep", investment: 30, loss: 20, profit: 65, maintenance: 0 },
  { month: "Oct", investment: 45, loss: 85, profit: 45, maintenance: 0 },
  { month: "Nov", investment: 15, loss: 25, profit: 30, maintenance: 150 },
  { month: "Dec", investment: 75, loss: 75, profit: 10, maintenance: 0 },
];

const GrowthChart = () => {
  return (
    <div className="chart-card">
      <div className="chart-header">
        <div>
          <p className="chart-title">Total Growth</p>
          <h2>$2,324.00</h2>
        </div>

        <select className="chart-select">
          <option>Today</option>
          <option>Week</option>
          <option>Month</option>
          <option>Year</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: -20,
            bottom: 10,
          }}
        >
          <CartesianGrid
            strokeDasharray="4 4"
            vertical={false}
            stroke="#e5e7eb"
          />

          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
          />

          <YAxis
            tickLine={false}
            axisLine={false}
          />

          <Tooltip />

          <Legend />

          <Bar
            dataKey="investment"
            stackId="a"
            fill="#A7D0F5"
            radius={[6, 6, 0, 0]}
            animationDuration={1500}
          />

          <Bar
            dataKey="loss"
            stackId="a"
            fill="#4B9BE8"
            radius={[6, 6, 0, 0]}
            animationDuration={1500}
          />

          <Bar
            dataKey="profit"
            stackId="a"
            fill="#7C4DFF"
            radius={[6, 6, 0, 0]}
            animationDuration={1500}
          />

          <Bar
            dataKey="maintenance"
            stackId="a"
            fill="#EAE4F7"
            radius={[6, 6, 0, 0]}
            animationDuration={1500}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GrowthChart;