import React, { useState, useEffect } from 'react';
import { BarChart, Activity, PieChart, Users, BookOpen, Brain, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';

interface DataCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  stats: {
    label: string;
    value: number;
    total?: number;
    percentage?: number;
    trend?: 'up' | 'down' | 'stable';
  }[];
}

export default function AdvancedDataVisuals() {
  const [activeCategory, setActiveCategory] = useState<string>('education');
  const [isAnimating, setIsAnimating] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [expandedStatIndex, setExpandedStatIndex] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const categories: DataCategory[] = [
    {
      id: 'education',
      title: 'Education Status',
      icon: <BookOpen className="w-5 h-5" />,
      description: 'Current state of media literacy education implementation',
      stats: [
        { 
          label: 'States with Media Literacy Laws', 
          value: 19, 
          total: 50,
          trend: 'up'
        },
        { 
          label: 'States with Active Hearings', 
          value: 25, 
          total: 50,
          trend: 'up'
        },
        { 
          label: 'Support for ML Education', 
          value: 84, 
          percentage: true,
          trend: 'stable'
        }
      ]
    },
    {
      id: 'student-exposure',
      title: 'Student Engagement',
      icon: <Users className="w-5 h-5" />,
      description: 'Student exposure to different types of media analysis',
      stats: [
        { 
          label: 'News Analysis Training', 
          value: 42, 
          percentage: true,
          trend: 'up'
        },
        { 
          label: 'Media Message Analysis', 
          value: 38, 
          percentage: true,
          trend: 'up'
        },
        { 
          label: 'Critical Thinking Skills', 
          value: 90, 
          percentage: true,
          trend: 'stable'
        }
      ]
    },
    {
      id: 'implementation',
      title: 'Program Progress',
      icon: <TrendingUp className="w-5 h-5" />,
      description: 'Implementation progress of media literacy programs',
      stats: [
        { 
          label: 'Schools with Programs', 
          value: 15, 
          total: 50,
          trend: 'up'
        },
        { 
          label: 'Teacher Training', 
          value: 12, 
          total: 50,
          trend: 'up'
        },
        { 
          label: 'Curriculum Development', 
          value: 22, 
          total: 50,
          trend: 'up'
        }
      ]
    }
  ];

  const handleCategoryChange = (categoryId: string) => {
    if (activeCategory === categoryId) return;
    setIsAnimating(true);
    setActiveCategory(categoryId);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const getTrendColor = (trend?: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up': return 'text-revolutionary-red';
      case 'down': return 'text-red-500';
      default: return 'text-accent';
    }
  };

  const renderChart = (stat: DataCategory['stats'][0], index: number) => {
    const percentage = stat.percentage 
      ? stat.value 
      : stat.total 
      ? (stat.value / stat.total) * 100 
      : 0;

    const isExpanded = expandedStatIndex === index;

    return (
      <div 
        key={index}
        className={`transform transition-all duration-300 ${
          isAnimating ? 'scale-95 opacity-50' : 'scale-100 opacity-100'
        }`}
      >
        <div 
          className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4 cursor-pointer"
          onClick={() => setExpandedStatIndex(isExpanded ? null : index)}
        >
          <h3 className="text-md font-semibold text-gray-800 mb-3 line-clamp-2 min-h-[3rem] flex justify-between items-center">
            {stat.label}
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </h3>
          
          <div className="relative w-24 h-24 mx-auto mb-4">
            <svg 
              viewBox="0 0 36 36" 
              className="w-full h-full"
            >
              {/* Background circle */}
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#eee"
                strokeWidth="1.5"
                className="stroke-current"
              />
              
              {/* Foreground circle */}
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke={getTrendColor(stat.trend)}
                strokeWidth="1.5"
                strokeDasharray={`${percentage}, 100`}
                className="transition-all duration-1000"
              />
              
              {/* Percentage text */}
              <text
                x="18"
                y="20.5"
                fontSize="6"
                fill="currentColor"
                textAnchor="middle"
                className="font-bold"
              >
                {percentage.toFixed(0)}%
              </text>
            </svg>
          </div>

          <div className="text-center space-y-1">
            <p className="text-sm font-medium text-gray-600">
              {stat.total ? `${stat.value} out of ${stat.total}` : `${stat.value}%`}
            </p>
            {stat.trend && (
              <span className={`inline-flex items-center gap-1 text-sm ${getTrendColor(stat.trend)}`}>
                {stat.trend === 'up' && '↑'}
                {stat.trend === 'down' && '↓'}
                {stat.trend === 'stable' && '→'}
                {stat.trend.charAt(0).toUpperCase() + stat.trend.slice(1)}
              </span>
            )}
          </div>

          {isExpanded && (
            <div className="mt-4 text-gray-700 text-sm">
              <p>{additionalInformationForStat(stat)}</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  const additionalInformationForStat = (stat: DataCategory['stats'][0]) => {
    switch(stat.label) {
      case 'States with Media Literacy Laws':
        return 'Media literacy laws have been enacted in 19 states, aiming to incorporate media literacy education into school curricula to help students critically analyze media messages.';

      case 'States with Active Hearings':
        return '25 states are currently holding active hearings on media literacy legislation, indicating a growing trend toward recognizing the importance of media literacy in education.';

      case 'Support for ML Education':
        return 'A national survey shows that 84% of Americans support mandatory media literacy education in schools, reflecting strong public backing for integrating these skills into the education system.';

      case 'News Analysis Training':
        return '42% of students receive training in analyzing news sources, helping them discern credible information from misinformation.';

      case 'Media Message Analysis':
        return '38% of students are taught to analyze media messages, enabling them to understand underlying biases and intentions in media content.';

      case 'Critical Thinking Skills':
        return '90% of educators believe that teaching critical thinking skills is essential for student development, yet implementation varies across schools.';

      case 'Schools with Programs':
        return 'Only 15 states have schools with fully implemented media literacy programs, highlighting the need for broader adoption.';

      case 'Teacher Training':
        return '12 states offer dedicated teacher training programs in media literacy, emphasizing professional development to support educators.';

      case 'Curriculum Development':
        return '22 states are in the process of developing curricula for media literacy education, aiming to standardize and enhance instructional materials.';

      default:
        return 'More information coming soon.';
    }
  };

  if (!mounted) return null;

  return (
    <div className="bg-surface rounded-xl p-6 md:p-8 shadow-revolutionary">
      <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-6 text-center">
        Media Literacy Insights
      </h2>

      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold 
              transition-all duration-300 transform hover:scale-105
              ${activeCategory === category.id 
                ? 'bg-gradient-revolutionary text-textPrimary shadow-revolutionary' 
                : 'bg-surface text-textSecondary hover:bg-surface/80 hover:text-textPrimary'
              }
            `}
          >
            {category.icon}
            <span>{category.title}</span>
          </button>
        ))}
      </div>

      <p className="text-textSecondary text-center mb-8 max-w-2xl mx-auto">
        {categories.find(c => c.id === activeCategory)?.description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories
          .find(c => c.id === activeCategory)
          ?.stats.map((stat, index) => (
            <div
              key={index}
              className={`
                bg-surface/50 backdrop-blur-sm rounded-lg p-6 
                transition-all duration-300 hover:shadow-revolutionary
                ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}
              `}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-textPrimary">{stat.label}</h3>
                <span className={`text-sm font-medium ${getTrendColor(stat.trend)}`}>
                  {stat.trend === 'up' && '↑'}
                  {stat.trend === 'down' && '↓'}
                  {stat.trend === 'stable' && '→'}
                </span>
              </div>

              <div className="flex items-end gap-2 mb-4">
                <span className="text-3xl font-bold text-accent">
                  {stat.value}{stat.percentage ? '%' : ''}
                </span>
                {stat.total && (
                  <span className="text-textSecondary mb-1">/ {stat.total}</span>
                )}
              </div>

              {stat.total && (
                <div className="w-full bg-surface rounded-full h-2 mb-4">
                  <div 
                    className="bg-gradient-revolutionary rounded-full h-2 transition-all duration-500"
                    style={{ width: `${(stat.value / stat.total) * 100}%` }}
                  />
                </div>
              )}

              <button
                onClick={() => setExpandedStatIndex(expandedStatIndex === index ? null : index)}
                className="text-sm text-textSecondary hover:text-textPrimary transition-colors flex items-center gap-1"
              >
                More info
                {expandedStatIndex === index ? 
                  <ChevronUp size={16} /> : 
                  <ChevronDown size={16} />
                }
              </button>

              {expandedStatIndex === index && (
                <p className="mt-4 text-sm text-textSecondary">
                  {additionalInformationForStat(stat)}
                </p>
              )}
            </div>
          ))}
      </div>

      <div className="mt-8 text-center text-sm text-textSecondary">
        <p className="flex items-center justify-center gap-2">
          Sources: 
          <a href="https://medialiteracynow.org/policyreport/" 
             className="text-accent hover:text-accent-light transition-colors">
            Policy Report 2023
          </a>
          <span className="mx-2">|</span>
          <a href="https://medialiteracynow.org/nationalsurvey2022/" 
             className="text-accent hover:text-accent-light transition-colors">
            National Survey 2022
          </a>
        </p>
      </div>
    </div>
  );
} 