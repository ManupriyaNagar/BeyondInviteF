"use client";
import { useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  ShoppingBag, 
  DollarSign,
  Calendar,
  Filter,
  Download,
  Eye,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import AnalyticsChart from "@/components/Dashboard/AnalyticsChart";
import ExportDropdown from "@/components/Dashboard/ExportDropdown";
import { useDashboardStats } from "@/hooks/useApi";
import { exportAnalytics } from "@/lib/exportUtils";

export default function Analytics() {
  const [timeRange, setTimeRange] = useState("7d");
  const { data: dashboardData } = useDashboardStats();
  
  const metrics = [
    {
      title: "Total Revenue",
      value: "₹45,678",
      change: "+12.5%",
      trend: "up",
      icon: FaRupeeSign,
      color: "text-green-600"
    },
    {
      title: "Orders",
      value: "1,247",
      change: "+8.2%",
      trend: "up",
      icon: ShoppingBag,
      color: "text-blue-600"
    },
    {
      title: "Customers",
      value: "892",
      change: "+15.3%",
      trend: "up",
      icon: Users,
      color: "text-purple-600"
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      change: "-2.1%",
      trend: "down",
      icon: TrendingUp,
      color: "text-red-600"
    }
  ];

  const topTemplates = [
    { name: "Elegant Wedding", orders: 234, revenue: "₹23,400", growth: "+15%" },
    { name: "Baby Shower Bliss", orders: 156, revenue: "₹15,600", growth: "+8%" },
    { name: "Corporate Event", orders: 89, revenue: "₹8,900", growth: "+22%" },
    { name: "Digital Invite", orders: 345, revenue: "₹34,500", growth: "+5%" },
    { name: "Birthday Party", orders: 123, revenue: "₹12,300", growth: "+18%" }
  ];

  const customerSegments = [
    { segment: "Wedding Planners", percentage: 45, count: 567, color: "bg-blue-500" },
    { segment: "Individual Customers", percentage: 30, count: 378, color: "bg-green-500" },
    { segment: "Corporate Clients", percentage: 15, count: 189, color: "bg-purple-500" },
    { segment: "Event Agencies", percentage: 10, count: 126, color: "bg-orange-500" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
            <p className="text-gray-600 mt-1">Track your business performance and insights</p>
          </div>
          <div className="flex gap-3">
            <select 
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37514D]"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="1y">Last year</option>
            </select>
            <button 
              onClick={() => alert('Filter functionality coming soon!')}
              className="px-4 py-2 border rounded-lg flex items-center gap-2 hover:bg-gray-50"
            >
              <Filter className="w-4 h-4" />
              Filter
            </button>
            <ExportDropdown
              data={dashboardData}
              onExport={(data, format) => exportAnalytics(data, format)}
              title="Export Analytics"
              className="bg-[#37514D] text-white hover:bg-[#2a3d39]"
            />
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-lg ${
                  metric.trend === 'up' ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  <metric.icon className={`w-5 h-5 ${metric.color}`} />
                </div>
                <div className={`flex items-center gap-1 text-sm ${
                  metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.trend === 'up' ? 
                    <ArrowUpRight className="w-4 h-4" /> : 
                    <ArrowDownRight className="w-4 h-4" />
                  }
                  {metric.change}
                </div>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                <p className="text-sm text-gray-600 mt-1">{metric.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AnalyticsChart title="Revenue Overview" type="revenue" />
          <AnalyticsChart title="Orders Trend" type="orders" />
        </div>

        {/* Detailed Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Top Templates */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Top Performing Templates</h3>
              <button 
                onClick={() => window.location.href = '/dashboard/invitations'}
                className="text-[#37514D] text-sm font-medium flex items-center gap-1"
              >
                View All <Eye className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-4">
              {topTemplates.map((template, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#37514D] rounded-lg flex items-center justify-center text-white font-semibold">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{template.name}</h4>
                      <p className="text-sm text-gray-600">{template.orders} orders</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{template.revenue}</p>
                    <p className="text-sm text-green-600">{template.growth}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Customer Segments */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Customer Segments</h3>
            <div className="space-y-4">
              {customerSegments.map((segment, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700">{segment.segment}</span>
                    <span className="font-medium">{segment.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`${segment.color} h-2 rounded-full transition-all duration-300`}
                      style={{ width: `${segment.percentage}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500">{segment.count} customers</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { action: "New order placed", details: "Wedding invitation by Sarah Johnson", time: "2 minutes ago", type: "order" },
              { action: "Template published", details: "Baby Shower Bliss template went live", time: "1 hour ago", type: "template" },
              { action: "Customer registered", details: "Mike Chen joined the platform", time: "3 hours ago", type: "user" },
              { action: "Payment received", details: "₹299 payment for order #INV-001", time: "5 hours ago", type: "payment" }
            ].map((activity, index) => (
              <div key={index} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  activity.type === 'order' ? 'bg-blue-100 text-blue-600' :
                  activity.type === 'template' ? 'bg-green-100 text-green-600' :
                  activity.type === 'user' ? 'bg-purple-100 text-purple-600' :
                  'bg-orange-100 text-orange-600'
                }`}>
                  {activity.type === 'order' ? <ShoppingBag className="w-4 h-4" /> :
                   activity.type === 'template' ? <Eye className="w-4 h-4" /> :
                   activity.type === 'user' ? <Users className="w-4 h-4" /> :
                   <span className="text-green-600 font-bold text-lg">₹</span>}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.details}</p>
                </div>
                <span className="text-xs text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}