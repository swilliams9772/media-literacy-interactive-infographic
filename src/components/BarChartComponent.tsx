import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

interface BarChartComponentProps {
  data: { name: string; value: number }[];
  title: string;
}

export default function BarChartComponent({ data, title }: BarChartComponentProps) {
  return (
    <div className="bg-secondary/95 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
      <h2 className="text-2xl font-bold mb-6 text-textPrimary">{title}</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" opacity={0.5} />
          <XAxis 
            dataKey="name" 
            stroke="#E0E0E0" 
            tick={{ fill: '#E0E0E0' }}
            tickLine={{ stroke: '#E0E0E0' }}
            interval={0}
            angle={-45}
            textAnchor="end"
            height={60}
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
            cursor={{ fill: 'rgba(255, 255, 255, 0.1)' }}
          />
          <Legend 
            wrapperStyle={{ color: '#E0E0E0', paddingTop: '20px' }}
            iconType="circle"
          />
          <Bar 
            dataKey="value" 
            fill="#FFC107"
            radius={[4, 4, 0, 0]}
            maxBarSize={60}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
} 