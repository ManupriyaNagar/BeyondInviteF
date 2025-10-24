"use client";
import { 
  Eye, 
  Edit, 
  Trash2, 
  Download, 
  Share2, 
  Copy, 
  Star,
  MoreHorizontal,
  ExternalLink
} from "lucide-react";
import { useState } from "react";

export default function ActionButtons({ 
  item, 
  onView, 
  onEdit, 
  onDelete, 
  onDownload,
  onShare,
  onCopy,
  showDropdown = false,
  customActions = []
}) {
  const [showMenu, setShowMenu] = useState(false);

  const handleAction = (action, item) => {
    action(item);
    setShowMenu(false);
  };

  if (showDropdown) {
    return (
      <div className="relative">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="text-gray-600 hover:text-gray-800 p-1 rounded hover:bg-gray-50 transition-colors"
        >
          <MoreHorizontal className="w-4 h-4" />
        </button>
        
        {showMenu && (
          <>
            <div 
              className="fixed inset-0 z-10" 
              onClick={() => setShowMenu(false)}
            />
            <div className="absolute right-0 top-8 z-20 bg-white border rounded-lg shadow-lg py-1 min-w-[150px]">
              {onView && (
                <button
                  onClick={() => handleAction(onView, item)}
                  className="w-full px-3 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-2"
                >
                  <Eye className="w-4 h-4" />
                  View Details
                </button>
              )}
              {onEdit && (
                <button
                  onClick={() => handleAction(onEdit, item)}
                  className="w-full px-3 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-2"
                >
                  <Edit className="w-4 h-4" />
                  Edit
                </button>
              )}
              {onDownload && (
                <button
                  onClick={() => handleAction(onDownload, item)}
                  className="w-full px-3 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download
                </button>
              )}
              {onShare && (
                <button
                  onClick={() => handleAction(onShare, item)}
                  className="w-full px-3 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-2"
                >
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              )}
              {onCopy && (
                <button
                  onClick={() => handleAction(onCopy, item)}
                  className="w-full px-3 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-2"
                >
                  <Copy className="w-4 h-4" />
                  Duplicate
                </button>
              )}
              {customActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => handleAction(action.handler, item)}
                  className="w-full px-3 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-2"
                >
                  {action.icon && <action.icon className="w-4 h-4" />}
                  {action.label}
                </button>
              ))}
              {onDelete && (
                <>
                  <div className="border-t my-1" />
                  <button
                    onClick={() => handleAction(onDelete, item)}
                    className="w-full px-3 py-2 text-left text-sm hover:bg-red-50 text-red-600 flex items-center gap-2"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </button>
                </>
              )}
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="flex gap-2">
      {onView && (
        <button 
          onClick={() => onView(item)}
          className="text-blue-600 hover:text-blue-800 p-1 rounded hover:bg-blue-50 transition-colors"
          title="View Details"
        >
          <Eye className="w-4 h-4" />
        </button>
      )}
      {onEdit && (
        <button 
          onClick={() => onEdit(item)}
          className="text-green-600 hover:text-green-800 p-1 rounded hover:bg-green-50 transition-colors"
          title="Edit"
        >
          <Edit className="w-4 h-4" />
        </button>
      )}
      {onDownload && (
        <button 
          onClick={() => onDownload(item)}
          className="text-purple-600 hover:text-purple-800 p-1 rounded hover:bg-purple-50 transition-colors"
          title="Download"
        >
          <Download className="w-4 h-4" />
        </button>
      )}
      {onShare && (
        <button 
          onClick={() => onShare(item)}
          className="text-indigo-600 hover:text-indigo-800 p-1 rounded hover:bg-indigo-50 transition-colors"
          title="Share"
        >
          <Share2 className="w-4 h-4" />
        </button>
      )}
      {onDelete && (
        <button 
          onClick={() => onDelete(item)}
          className="text-red-600 hover:text-red-800 p-1 rounded hover:bg-red-50 transition-colors"
          title="Delete"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}