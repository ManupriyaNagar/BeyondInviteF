"use client";
import { useState } from "react";
import { 
  Search,
  Filter,
  Download,
  Eye,
  Edit,
  Trash2,
  Mail,
  Phone,
  Calendar,
  Users,
  UserPlus,
  Star,
  ShoppingBag,
  RefreshCw,
  AlertCircle
} from "lucide-react";
import { useCustomers } from "@/hooks/useApi";
import CreateCustomerModal from "@/components/Dashboard/CreateCustomerModal";
import ExportDropdown from "@/components/Dashboard/ExportDropdown";
import { exportCustomers } from "@/lib/exportUtils";

export default function Customers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [segmentFilter, setSegmentFilter] = useState("all");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  
  // Fetch customers from API
  const { data: customersData, loading, error, refetch } = useCustomers();

  const customerStats = [
    { title: "Total Customers", value: "12,459", change: "+23%", icon: Users, color: "bg-blue-500" },
    { title: "New This Month", value: "234", change: "+18%", icon: UserPlus, color: "bg-green-500" },
    { title: "Active Customers", value: "8,923", change: "+12%", icon: Users, color: "bg-purple-500" },
    { title: "Avg. Order Value", value: "₹15,500", change: "+8%", icon: ShoppingBag, color: "bg-orange-500" }
  ];

  // Use real customers data from API
  const customers = customersData || [];

  // Handler functions
  const handleViewCustomer = (customer) => {
    alert(`Viewing customer: ${customer.name}\nEmail: ${customer.email}\nSegment: ${customer.segment}\nTotal Spent: $${customer.totalSpent}`);
  };

  const handleEditCustomer = (customer) => {
    setSelectedCustomer(customer);
    setShowEditModal(true);
  };

  const handleDeleteCustomer = (customer) => {
    if (confirm(`Are you sure you want to delete customer "${customer.name}"?`)) {
      // In a real app, you would call an API to delete the customer
      alert(`Customer "${customer.name}" deleted successfully!`);
      refetch(); // Refresh the data
    }
  };

  const segmentOptions = [
    { value: "all", label: "All Segments", count: customers.length },
    { value: "premium", label: "Premium", count: customers.filter(c => c.segment === "Premium").length },
    { value: "regular", label: "Regular", count: customers.filter(c => c.segment === "Regular").length },
    { value: "corporate", label: "Corporate", count: customers.filter(c => c.segment === "Corporate").length }
  ];

  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSegment = segmentFilter === "all" || 
                          customer.segment.toLowerCase() === segmentFilter;
    
    return matchesSearch && matchesSegment;
  });

  // Loading state
  if (loading) {
    return (
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <RefreshCw className="w-8 h-8 animate-spin text-[#37514D] mx-auto mb-4" />
            <p className="text-gray-600">Loading customers...</p>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <AlertCircle className="w-8 h-8 text-red-500 mx-auto mb-4" />
            <p className="text-gray-600 mb-4">Failed to load customers</p>
            <button 
              onClick={refetch}
              className="bg-[#37514D] text-white px-4 py-2 rounded-lg hover:bg-[#2a3d39] transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Customer Management</h1>
          <p className="text-gray-600 mt-1">Manage and track your customer relationships</p>
        </div>
        <div className="flex gap-3">
          <ExportDropdown
            data={customers}
            onExport={(data, format) => exportCustomers(data, format)}
            title="Export Customers"
          />
          <button 
            onClick={() => setShowCreateModal(true)}
            className="bg-[#37514D] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#2a3d39] transition-colors"
          >
            <UserPlus className="w-4 h-4" />
            Add Customer
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {customerStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                <p className={`text-sm mt-1 ${
                  stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change} from last month
                </p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="flex flex-1 gap-4 w-full lg:w-auto">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search customers by name or email..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37514D]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Segment Filter */}
            <select 
              value={segmentFilter}
              onChange={(e) => setSegmentFilter(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37514D]"
            >
              {segmentOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label} ({option.count})
                </option>
              ))}
            </select>
            
            <button className="px-4 py-2 border rounded-lg flex items-center gap-2 hover:bg-gray-50">
              <Filter className="w-4 h-4" />
              More Filters
            </button>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Users className="w-4 h-4" />
            <span>Showing {filteredCustomers.length} of {customers.length} customers</span>
          </div>
        </div>
      </div>

      {/* Customer Segments Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Segments</h3>
          <div className="space-y-4">
            {[
              { segment: "Premium Customers", count: 2, percentage: 33, color: "bg-purple-500", revenue: "₹3,52,000" },
              { segment: "Regular Customers", count: 2, percentage: 33, color: "bg-blue-500", revenue: "₹55,900" },
              { segment: "Corporate Clients", count: 2, percentage: 34, color: "bg-green-500", revenue: "₹3,63,200" }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className={`w-4 h-4 ${item.color} rounded-full`}></div>
                  <div>
                    <h4 className="font-medium text-gray-900">{item.segment}</h4>
                    <p className="text-sm text-gray-600">{item.count} customers • {item.percentage}%</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{item.revenue}</p>
                  <p className="text-sm text-gray-600">Total Revenue</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {[
              { action: "New customer registered", customer: "Sarah Johnson", time: "2 hours ago" },
              { action: "Order completed", customer: "Mike Chen", time: "5 hours ago" },
              { action: "Profile updated", customer: "Emma Davis", time: "1 day ago" },
              { action: "New order placed", customer: "Lisa Wang", time: "2 days ago" }
            ].map((activity, index) => (
              <div key={index} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.customer}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Customers Table */}
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">All Customers</h3>
          <select className="px-3 py-1 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#37514D]">
            <option>Sort by: Newest</option>
            <option>Sort by: Name A-Z</option>
            <option>Sort by: Total Spent</option>
            <option>Sort by: Last Order</option>
            <option>Sort by: Rating</option>
          </select>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Segment</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Orders</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Spent</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Order</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCustomers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-[#37514D] rounded-full flex items-center justify-center mr-4">
                        <span className="text-white text-sm font-medium">
                          {customer.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{customer.name}</div>
                        <div className="text-sm text-gray-500 flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Mail className="w-3 h-3" />
                            {customer.email}
                          </span>
                          <span className="flex items-center gap-1">
                            <Phone className="w-3 h-3" />
                            {customer.phone}
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      customer.segment === 'Premium' ? 'bg-purple-100 text-purple-800' :
                      customer.segment === 'Corporate' ? 'bg-green-100 text-green-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {customer.segment}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{customer.orders}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{customer.totalSpent}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-900">{customer.rating}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {customer.lastOrder}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      customer.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {customer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleViewCustomer(customer)}
                        className="text-blue-600 hover:text-blue-800 p-1 rounded hover:bg-blue-50 transition-colors"
                        title="View Customer"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleEditCustomer(customer)}
                        className="text-green-600 hover:text-green-800 p-1 rounded hover:bg-green-50 transition-colors"
                        title="Edit Customer"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleDeleteCustomer(customer)}
                        className="text-red-600 hover:text-red-800 p-1 rounded hover:bg-red-50 transition-colors"
                        title="Delete Customer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Empty State */}
      {filteredCustomers.length === 0 && (
        <div className="bg-white rounded-xl shadow-sm border p-12 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No customers found</h3>
          <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
          <button 
            onClick={() => {
              setSearchTerm("");
              setSegmentFilter("all");
            }}
            className="text-[#37514D] font-medium hover:text-[#2a3d39]"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Modals */}
      <CreateCustomerModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onSuccess={(newCustomer) => {
          console.log('New customer created:', newCustomer);
          refetch(); // Refresh customers list
        }}
      />

      <CreateCustomerModal
        isOpen={showEditModal}
        onClose={() => {
          setShowEditModal(false);
          setSelectedCustomer(null);
        }}
        customer={selectedCustomer}
        onSuccess={(updatedCustomer) => {
          console.log('Customer updated:', updatedCustomer);
          refetch(); // Refresh customers list
        }}
      />
    </div>
  );
}