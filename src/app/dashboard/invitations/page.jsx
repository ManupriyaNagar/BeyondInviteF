"use client";
import { useState } from "react";
import { 
  Plus,
  Search,
  Filter,
  Grid3X3,
  List,
  Eye,
  Edit,
  Trash2,
  Star,
  RefreshCw,
  AlertCircle,
  Calendar
} from "lucide-react";

import TemplateCard from "@/components/Dashboard/TemplateCard";
import CreateTemplateModal from "@/components/Dashboard/CreateTemplateModal";
import EditTemplateModal from "@/components/Dashboard/EditTemplateModal";
import ViewTemplateModal from "@/components/Dashboard/ViewTemplateModal";
import ExportDropdown from "@/components/Dashboard/ExportDropdown";
import { useTemplates } from "@/hooks/useApi";
import { templatesAPI } from "@/lib/api";
import { exportTemplates } from "@/lib/exportUtils";

export default function Invitations() {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  
  // Fetch templates from API
  const { data: templatesData, loading, error, refetch } = useTemplates();
  const allInvitations = templatesData || [];

  // Category mapping
  const categoryMap = {
    1: "Wedding",
    2: "Baby-shower",
    3: "Corporate",
    4: "E-Invitation",
    5: "Birthday"
  };

  // Transform API data
  const invitationTemplates = templatesData?.map(template => {
    let image = template.image_url;
    const categoryName = template.category_id 
      ? categoryMap[template.category_id] || "General" 
      : template.category || "General";

    switch (categoryName.toLowerCase()) {
      case 'wedding':
        image = image || '/wedding.jpeg';
        break;
      case 'baby shower':
        image = image || '/babyshower.jpeg';
        break;
      case 'corporate':
        image = image || '/corporate.jpeg';
        break;
      case 'e-invitation':
        image = image || '/einvitation.jpeg';
        break;
      case 'birthday':
        image = image || '/birthday.jpeg';
        break;
      default:
        image = image || '/default.jpeg';
    }

    return {
      id: template.id,
      name: template.title,
      category: categoryName,
      orders: template.orders || 0,
      image,
      price: template.price?.toString() || '0',
      status: template.status || 'active',
      rating: template.rating || 4.5
    };
  }) || [];

  // Categories for filter dropdown
  const categories = [
    { id: "all", label: "All Templates", count: invitationTemplates.length },
    { id: "wedding", label: "Wedding", count: invitationTemplates.filter(t => t.category.toLowerCase() === "wedding").length },
    { id: "baby-shower", label: "Baby Shower", count: invitationTemplates.filter(t => t.category.toLowerCase() === "baby-shower").length },
    { id: "corporate", label: "Corporate", count: invitationTemplates.filter(t => t.category.toLowerCase() === "corporate").length },
    { id: "e-invitation", label: "E-Invitation", count: invitationTemplates.filter(t => t.category.toLowerCase() === "e-invitation").length },
  ];

  // Filter templates based on search & category
  const filteredTemplates = invitationTemplates
    .filter(template => {
      if (selectedCategory === "all") return true;
      switch (selectedCategory) {
        case "wedding": return template.category.toLowerCase() === "wedding";
        case "baby-shower": return template.category.toLowerCase() === "baby-shower";
        case "corporate": return template.category.toLowerCase() === "corporate";
        case "e-invitation": return template.category.toLowerCase() === "e-invitation";
        default: return true;
      }
    })
    .filter(template => template.name.toLowerCase().includes(searchTerm.toLowerCase()));

  // Modal handlers
  const handleTemplateView = (template) => {
    setSelectedTemplate(template);
    setShowViewModal(true);
  };

  const handleTemplateEdit = (template) => {
    setSelectedTemplate(template);
    setShowEditModal(true);
  };

  const handleTemplateDelete = async (template) => {
    if (confirm(`Are you sure you want to delete "${template.name}"?`)) {
      try {
        await templatesAPI.delete(template.id);
        refetch();
        setShowViewModal(false);
      } catch (error) {
        console.error('Failed to delete template:', error);
        alert('Failed to delete template. Please try again.');
      }
    }
  };

  const handleModalClose = () => {
    setSelectedTemplate(null);
    setShowCreateModal(false);
    setShowEditModal(false);
    setShowViewModal(false);
  };

  // Loading state
  if (loading) {
    return (
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <RefreshCw className="w-8 h-8 animate-spin text-[#37514D] mx-auto mb-4" />
            <p className="text-gray-600">Loading templates...</p>
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
            <p className="text-gray-600 mb-4">Failed to load templates</p>
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
          <h1 className="text-2xl font-bold text-gray-900">Invitation Templates</h1>
          <p className="text-gray-600 mt-1">Manage your invitation templates and designs</p>
        </div>
        <div className="flex gap-3">
          <ExportDropdown
            data={invitationTemplates}
            onExport={(data, format) => exportTemplates(data, format)}
            title="Export Templates"
          />
          <button 
            onClick={() => setShowCreateModal(true)}
            className="bg-[#37514D] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#2a3d39] transition-colors"
          >
            <Plus className="w-4 h-4" />
            New Template
          </button>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="flex flex-1 gap-4 w-full lg:w-auto">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search templates..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37514D]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37514D]"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.label} ({category.count})
                </option>
              ))}
            </select>
            <button className="px-4 py-2 border rounded-lg flex items-center gap-2 hover:bg-gray-50">
              <Filter className="w-4 h-4" />
              More Filters
            </button>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="w-4 h-4" />
              <span>Showing {filteredTemplates.length} of {invitationTemplates.length} templates</span>
            </div>
          </div>
          <div className="flex border rounded-lg">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 ${viewMode === "grid" ? "bg-[#37514D] text-white" : "text-gray-600 hover:bg-gray-50"}`}
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 ${viewMode === "list" ? "bg-[#37514D] text-white" : "text-gray-600 hover:bg-gray-50"}`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Templates Grid/List */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTemplates.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              onView={handleTemplateView}
              onEdit={handleTemplateEdit}
              onDelete={handleTemplateDelete}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Template</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Orders</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredTemplates.map((template) => (
                  <tr key={template.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden mr-4">
                          <img
                            src={template.image}
                            alt={template.name}
                            width={68}
                            height={96}
                            className="object-contain w-full h-full"
                          />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{template.name}</div>
                          <div className="text-sm text-gray-500">ID: {template.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                        {template.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{template.orders}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">₹{template.price}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-900">{template.rating}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        template.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {template.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex gap-2">
                        <button 
                          onClick={() => handleTemplateView(template)}
                          className="text-blue-600 hover:text-blue-800 p-1 rounded hover:bg-blue-50 transition-colors"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleTemplateEdit(template)}
                          className="text-green-600 hover:text-green-800 p-1 rounded hover:bg-green-50 transition-colors"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleTemplateDelete(template)}
                          className="text-red-600 hover:text-red-800 p-1 rounded hover:bg-red-50 transition-colors"
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
      )}

      {/* Empty State */}
      {filteredTemplates.length === 0 && (
        <div className="bg-white rounded-xl shadow-sm border p-12 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No templates found</h3>
          <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
          <button 
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("all");
            }}
            className="text-[#37514D] font-medium hover:text-[#2a3d39]"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Modals */}
      <CreateTemplateModal
        isOpen={showCreateModal}
        onClose={handleModalClose}
        onSuccess={() => refetch()}
      />

      <EditTemplateModal
        isOpen={showEditModal}
        onClose={handleModalClose}
        template={selectedTemplate}
        onSuccess={() => refetch()}
      />

      <ViewTemplateModal
        isOpen={showViewModal}
        onClose={handleModalClose}
        template={selectedTemplate}
        onEdit={(template) => {
          setShowViewModal(false);
          handleTemplateEdit(template);
        }}
        onDelete={handleTemplateDelete}
      />
    </div>
  );
}
