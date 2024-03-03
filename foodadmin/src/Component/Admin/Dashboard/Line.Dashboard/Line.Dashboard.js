import React, { PureComponent, useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';

// Override console.error
// This is a hack to suppress the warning about missing defaultProps in recharts library as of version 2.12
// @link https://github.com/recharts/recharts/issues/3615
const error = console.error;
console.error = (...args) => {
    if (/defaultProps/.test(args[0])) return;
    error(...args);
};

const data = [
    {
        name: 'Jan',
        Previous: 4000,
        Current: 2400,
    },
    {
        name: 'Feb',
        Previous: 5000,
        Current: 4000,
    },
    {
        name: 'March',
        2023: 6000,
        2024: 2400,
    },
    {
        name: 'April',
        2023: 7000,
        2024: 2300,
    },
    {
        name: 'May',
        2023: 9000,
        2024: 4000,
    },
    {
        name: 'Jun',
        2023: 10000,
        2024: 2400,
    }
];

const CustomizedLabel = ({ x, y, stroke, value }) => (
    <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
        {value}
    </text>
);

const CustomizedAxisTick = ({ x, y, stroke, payload }) => {
    const { value } = payload;
    return (
        <g transform={`translate(${x},${y})`}>
            <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">
                {value}
            </text>
        </g>
    );
};

// Default props can be set directly in the function definition
CustomizedAxisTick.defaultProps = {
    stroke: '#666'
};


const LineDashboard = () => {

    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 10,
                }}
            >
                <CartesianGrid vertical={true} horizontal={false} strokeDasharray="3 3" />
                <XAxis dataKey="name" height={60} padding={{ left: 0, right: 0 }} tick={<CustomizedAxisTick />} />
                <YAxis />
                <Tooltip />
                <Line type="monotone" strokeWidth={5} dataKey="2023" stroke="#8884d8" label={<CustomizedLabel />} />
                <Line type="monotone" strokeWidth={5} dataKey="2024" stroke="#82ca9d" label={<CustomizedLabel />} />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default LineDashboard;
