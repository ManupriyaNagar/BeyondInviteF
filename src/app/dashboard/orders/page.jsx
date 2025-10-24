"use client";

import { useState } from "react";

import { 
  Search,
  Filter,
  Download,
  Eye,
  Plus,
  Edit,
  Trash2,
  Calendar,
  DollarSign,
  Package,
  Clock,
  RefreshCw,
  AlertCircle
} from "lucide-react";
import CreateOrderModal from "@/components/Dashboard/CreateOrderModal";
import ExportDropdown from "@/components/Dashboard/ExportDropdown";
import NotificationToast, { useNotification } from "@/components/Dashboard/NotificationToast";
import { useOrders } from "@/hooks/useApi";
import { exportOrders } from "@/lib/exportUtils";

export default function Orders() {
  const { data: ordersData, loading, error, refetch } = useOrders();
  const allOrders = ordersData || [];

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateRange, setDateRange] = useState("30d");
  const [sortOption, setSortOption] = useState("newest");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const { notification, showSuccess, showError, hideNotification } = useNotification();

  // Order stats
  const totalOrders = allOrders.length;
  const pendingOrders = allOrders.filter(o => o.status === "Pending").length;
  const completedOrders = allOrders.filter(o => o.status === "Completed").length;
  const totalRevenue = allOrders.reduce((sum, o) => sum + Number(o.amount || 0), 0);

  const orderStats = [
    { title: "Total Orders", value: totalOrders.toLocaleString(), change: "+8.2%", icon: Package, color: "bg-blue-500" },
    { title: "Pending Orders", value: pendingOrders.toLocaleString(), change: "-12%", icon: Clock, color: "bg-yellow-500" },
    { title: "Completed Orders", value: completedOrders.toLocaleString(), change: "+15%", icon: Package, color: "bg-green-500" },
    { title: "Total Revenue", value: `₹${totalRevenue.toLocaleString()}`, change: "+12%", icon: DollarSign, color: "bg-purple-500" }
  ];

  const statusOptions = [
    { value: "all", label: "All Status", count: allOrders.length },
    { value: "completed", label: "Completed", count: allOrders.filter(o => o.status === "Completed").length },
    { value: "in-progress", label: "In Progress", count: allOrders.filter(o => o.status === "In Progress").length },
    { value: "pending", label: "Pending", count: allOrders.filter(o => o.status === "Pending").length },
    { value: "cancelled", label: "Cancelled", count: allOrders.filter(o => o.status === "Cancelled").length }
  ];

  // Dynamic filtering + sorting function
 const getProcessedOrders = () => {
  return [...allOrders]
    .filter(order => {
      const matchesSearch =
        order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        String(order.id).toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.type.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === "all" ||
        order.status.toLowerCase().replace(" ", "-") === statusFilter;

      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      switch (sortOption) {
        case "newest":
          return new Date(b.date) - new Date(a.date);
        case "oldest":
          return new Date(a.date) - new Date(b.date);
        case "amountHigh":
          return Number(b.amount) - Number(a.amount);
        case "amountLow":
          return Number(a.amount) - Number(b.amount);
        case "customer":
          return a.customer.localeCompare(b.customer);
        default:
          return 0;
      }
    });
};


  const processedOrders = getProcessedOrders();

  // Handler functions
  const handleViewOrder = (order) => alert(`Viewing order: ${order.id}\nCustomer: ${order.customer}\nAmount: ${order.amount}`);
  const handleEditOrder = (order) => { setSelectedOrder(order); setShowEditModal(true); };
  const handleDeleteOrder = async (order) => {
    if (confirm(`Are you sure you want to delete order ${order.id}?`)) {
      try {
        const { ordersAPI } = await import('@/lib/api');
        await ordersAPI.delete(order.id);
        showSuccess('Order Deleted', `Order ${order.id} has been deleted successfully.`);
        refetch();
      } catch (error) {
        console.error('Failed to delete order:', error);
        showError('Delete Failed', 'Failed to delete order. Please try again.');
      }
    }
  };

  // Loading
  if (loading) return (
    <div className="p-6 flex items-center justify-center min-h-[400px]">
      <RefreshCw className="w-8 h-8 animate-spin text-[#37514D]" />
      <p className="text-gray-600 ml-2">Loading orders...</p>
    </div>
  );

  // Error
  if (error) return (
    <div className="p-6 flex flex-col items-center justify-center min-h-[400px]">
      <AlertCircle className="w-8 h-8 text-red-500" />
      <p className="text-gray-600 mt-2 mb-4">Failed to load orders</p>
      <button onClick={refetch} className="bg-[#37514D] text-white px-4 py-2 rounded-lg hover:bg-[#2a3d39]">Try Again</button>
    </div>
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Orders Management</h1>
          <p className="text-gray-600 mt-1">Track and manage all customer orders</p>
        </div>
        <div className="flex gap-3">
          <select 
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37514D]"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>
          <ExportDropdown
            data={allOrders}
            onExport={(data, format) => exportOrders(data, format)}
            title="Export Orders"
          />
          <button 
            onClick={() => setShowCreateModal(true)}
            className="bg-[#37514D] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#2a3d39]"
          >
            <Plus className="w-4 h-4" /> New Order
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {orderStats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-sm border p-6 flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-600">{stat.title}</p>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>{stat.change} from last month</p>
            </div>
            <div className={`${stat.color} p-3 rounded-lg`}><stat.icon className="w-6 h-6 text-white" /></div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border p-6 flex flex-col lg:flex-row gap-4 justify-between items-center">
        <div className="flex gap-4 flex-1">
          <div className="relative flex-1">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search orders, customers, or order IDs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37514D]"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37514D]"
          >
            {statusOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label} ({option.count})</option>
            ))}
          </select>
          <button className="px-4 py-2 border rounded-lg flex items-center gap-2 hover:bg-gray-50">
            <Filter className="w-4 h-4" /> More Filters
          </button>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Calendar className="w-4 h-4" />
          <span>Showing {processedOrders.length} of {allOrders.length} orders</span>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">All Orders</h3>
          <div>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="px-3 py-1 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#37514D]"
            >
              <option value="newest">Sort by: Newest</option>
              <option value="oldest">Sort by: Oldest</option>
              <option value="amountHigh">Sort by: Amount: High to Low</option>
              <option value="amountLow">Sort by: Amount: Low to High</option>
              <option value="customer">Sort by: Customer Name</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {processedOrders.map(order => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                        <span className="text-xs font-medium text-gray-600">
                          {order.customer.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{order.customer}</div>
                        <div className="text-sm text-gray-500">{order.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">{order.type}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      order.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                      order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex gap-2">
                    <button onClick={() => handleViewOrder(order)} className="text-blue-600 hover:text-blue-800 p-1 rounded hover:bg-blue-50"><Eye className="w-4 h-4" /></button>
                    <button onClick={() => handleEditOrder(order)} className="text-green-600 hover:text-green-800 p-1 rounded hover:bg-green-50"><Edit className="w-4 h-4" /></button>
                    <button onClick={() => handleDeleteOrder(order)} className="text-red-600 hover:text-red-800 p-1 rounded hover:bg-red-50"><Trash2 className="w-4 h-4" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Empty State */}
      {processedOrders.length === 0 && (
        <div className="bg-white rounded-xl shadow-sm border p-12 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Package className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No orders found</h3>
          <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
          <button onClick={() => { setSearchTerm(""); setStatusFilter("all"); setSortOption("newest"); }} className="text-[#37514D] font-medium hover:text-[#2a3d39]">Clear filters</button>
        </div>
      )}

      {/* Modals */}
      <CreateOrderModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onSuccess={(newOrder) => { showSuccess('Order Created', `Order for ${newOrder.customer} has been created.`); refetch(); }}
      />
      <CreateOrderModal
        isOpen={showEditModal}
        onClose={() => { setShowEditModal(false); setSelectedOrder(null); }}
        order={selectedOrder}
        onSuccess={(updatedOrder) => { showSuccess('Order Updated', 'Order updated successfully.'); refetch(); }}
      />

      <NotificationToast notification={notification} onClose={hideNotification} />
    </div>
  );
}
