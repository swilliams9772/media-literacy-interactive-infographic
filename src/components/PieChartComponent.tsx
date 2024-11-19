import React from 'react';
import {
  PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

interface PieChartComponentProps {
  data: { name: string; value: number }[];
  title: string;
}

const COLORS = ['#E53935', '#FFC107', '#4CAF50', '#2196F3', '#9C27B0', '#FF9800'];

export default function PieChartComponent({ data, title }: PieChartComponentProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  
  return (
    <div className="bg-secondary/95 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
      <h2 className="text-2xl font-bold mb-6 text-textPrimary">{title}</h2>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }) => `${name} (${Math.round((value / total) * 100)}%)`}
            outerRadius={150}
            fill="#E53935"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={COLORS[index % COLORS.length]}
                stroke="rgba(255,255,255,0.1)"
                strokeWidth={1}
              />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(30, 30, 30, 0.95)',
              borderRadius: '8px',
              border: '1px solid #333',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }} 
            itemStyle={{ color: '#E0E0E0' }}
          />
          <Legend 
            wrapperStyle={{ color: '#E0E0E0', paddingTop: '20px' }}
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
} 