import React from 'react';
import { BarChart, Activity, PieChart } from 'lucide-react';

interface StatCard {
  title: string;
  value: number;
  total: number;
  icon: React.ReactNode;
  description: string;
}

interface DataVisualsProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function DataVisuals({ isOpen, onToggle }: DataVisualsProps) {
  const stats: StatCard[] = [
    {
      title: "States with Media Literacy Action",
      value: 19,
      total: 50,
      icon: <BarChart className="w-6 h-6" />,
      description: "State legislatures that have taken action on media literacy education"
    },
    {
      title: "Daily Media Exposure",
      value: 7,
      total: 24,
      icon: <Activity className="w-6 h-6" />,
      description: "Average hours Americans spend interacting with media daily"
    },
    {
      title: "States with Hearings/Votes",
      value: 25,
      total: 50,
      icon: <PieChart className="w-6 h-6" />,
      description: "States that have held hearings or votes on media literacy education"
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Media Literacy Statistics</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className="relative bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6 transition-all duration-300 hover:shadow-lg"
          >
            <div className="absolute top-4 right-4 text-indigo-600">
              {stat.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.title}</h3>
            <div className="flex items-end gap-2 mb-4">
              <span className="text-3xl font-bold text-indigo-600">{stat.value}</span>
              <span className="text-gray-500 mb-1">/ {stat.total}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div 
                className="bg-indigo-600 rounded-full h-2 transition-all duration-500"
                style={{ width: `${(stat.value / stat.total) * 100}%` }}
              />
            </div>
            <p className="text-sm text-gray-600">{stat.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-sm text-gray-500">
        <p>Source: <a href="https://medialiteracynow.org/policyreport/" className="text-indigo-600 hover:underline">Media Literacy Now Policy Report 2023</a></p>
      </div>
    </div>
  );
} 