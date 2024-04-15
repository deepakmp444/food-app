import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts';
const data01 = [
    {
        "name": "Total Order",
        "value": 1000,
        "fill": "var(--bs-primary)"
    },
    {
        "name": "Completed",
        "value": 800,
        "fill": "var(--bs-success)"
    },
    {
        "name": "Pending",
        "value": 100,
        "fill": "var(--bs-warning)"
    },

    {
        "name": "Cancel",
        "value": 100,
        "fill": "var(--bs-danger)"
    }
]


function PieDashboard() {
    return (
        <ResponsiveContainer width={"100%"} height={530}>
            <RadialBarChart cx="50%" cy="50%" innerRadius="50%" outerRadius="80%" barSize={50}
                data={data01}>
                <RadialBar
                    minAngle={15}
                    label={{ position: 'insideStart', fill: 'white', fontSize: "10" }}
                    background
                    clockWise
                    dataKey="value"
                />
                <Legend iconSize={10} layout="vertical" verticalAlign="middle" />
            </RadialBarChart>
        </ResponsiveContainer>
    )
}

export default PieDashboard