"use client";
import { Eye, Edit, Trash2, Heart, Star } from "lucide-react";
import Image from "next/image";

export default function TemplateCard({ template, onView, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition-all duration-300 group">
      <div className="aspect-video bg-gray-100 relative overflow-hidden">
        <img
          src={template.image}
          alt={template.name}
          fill="true"
          className="object-contain group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="p-2 bg-white/90 rounded-full hover:bg-white shadow-sm">
            <Heart className="w-4 h-4 text-gray-600" />
          </button>
        </div>
        <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex items-center gap-1 bg-white/90 px-2 py-1 rounded-full text-xs">
            <Star className="w-3 h-3 text-yellow-500 fill-current" />
            <span className="font-medium">4.8</span>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-semibold text-gray-900 group-hover:text-[#37514D] transition-colors">
              {template.name}
            </h3>
            <p className="text-sm text-gray-600">{template.category}</p>
          </div>
          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
            Active
          </span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span>{template.orders} orders</span>
            <span>•</span>
            <span>₹{template.price || '99'}</span>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => onView?.(template)}
            className="flex-1 bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-sm hover:bg-gray-200 flex items-center justify-center gap-1 transition-colors"
          >
            <Eye className="w-4 h-4" />
            View
          </button>
          <button
            onClick={() => onEdit?.(template)}
            className="flex-1 bg-[#37514D] text-white px-3 py-2 rounded-lg text-sm hover:bg-[#2a3d39] flex items-center justify-center gap-1 transition-colors"
          >
            <Edit className="w-4 h-4" />
            Edit
          </button>
          <button
            onClick={() => onDelete?.(template)}
            className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}