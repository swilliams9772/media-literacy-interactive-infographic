import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

interface LineChartComponentProps {
  data: { date: string; value: number }[];
  title: string;
}

export default function LineChartComponent({ data, title }: LineChartComponentProps) {
  return (
    <div className="bg-secondary/95 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
      <h2 className="text-2xl font-bold mb-6 text-textPrimary">{title}</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" opacity={0.5} />
          <XAxis 
            dataKey="date" 
            stroke="#E0E0E0" 
            tick={{ fill: '#E0E0E0' }}
            tickLine={{ stroke: '#E0E0E0' }}
          />
          <YAxis 
            stroke="#E0E0E0" 
            tick={{ fill: '#E0E0E0' }}
            tickLine={{ stroke: '#E0E0E0' }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(30, 30, 30, 0.95)',
              borderRadius: '8px',
              border: '1px solid #333',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }} 
            itemStyle={{ color: '#E0E0E0' }}
            cursor={{ stroke: '#E0E0E0', strokeWidth: 1 }}
          />
          <Legend 
            wrapperStyle={{ color: '#E0E0E0', paddingTop: '20px' }}
            iconType="circle"
          />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="#FFC107" 
            strokeWidth={3}
            dot={{ fill: '#FFC107', strokeWidth: 2 }}
            activeDot={{ r: 8, fill: '#FFC107', stroke: '#fff' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
} 