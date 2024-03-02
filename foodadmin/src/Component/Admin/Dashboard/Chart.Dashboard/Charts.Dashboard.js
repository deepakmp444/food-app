"use client"
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  }
];
function ChartsDashboard() {


  return (

    <BarChart
      width={500}
      height={300}
      data={data}
    >
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      
      <Tooltip />
      <Legend />
      <Bar dataKey="amt" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
      <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
      <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
    </BarChart>

  )
}

export default ChartsDashboard