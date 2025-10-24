"use client";
import { TrendingUp, TrendingDown } from "lucide-react";

export default function AnalyticsChart({ title, data, type = "revenue" }) {
  // Sample chart data - in a real app, you'd use a charting library like Chart.js or Recharts
  const chartData = [
    { month: 'Jan', value: 4000 },
    { month: 'Feb', value: 3000 },
    { month: 'Mar', value: 5000 },
    { month: 'Apr', value: 4500 },
    { month: 'May', value: 6000 },
    { month: 'Jun', value: 5500 },
  ];

  const maxValue = Math.max(...chartData.map(d => d.value));
  const trend = chartData[chartData.length - 1].value > chartData[0].value;

  return (
    <div className="bg-white rounded-xl shadow-sm border p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <div className={`flex items-center gap-1 text-sm ${trend ? 'text-green-600' : 'text-red-600'}`}>
          {trend ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
          {trend ? '+12.5%' : '-5.2%'}
        </div>
      </div>
      
      {/* Simple Bar Chart */}
      <div className="h-64 flex items-end justify-between gap-2">
        {chartData.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div 
              className="w-full bg-[#37514D] rounded-t-sm transition-all duration-300 hover:bg-[#2a3d39]"
              style={{ height: `${(item.value / maxValue) * 200}px` }}
            ></div>
            <span className="text-xs text-gray-600 mt-2">{item.month}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Total {type}</span>
          <span className="font-semibold text-gray-900">
            {type === 'revenue' ? '₹28,000' : '1,247'}
          </span>
        </div>
      </div>
    </div>
  );
}