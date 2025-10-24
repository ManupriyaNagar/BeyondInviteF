"use client";
import { useState } from "react";
import { Download, FileText, FileSpreadsheet, File, ChevronDown } from "lucide-react";
import ExportModal from "./ExportModal";

export default function ExportDropdown({ 
  data, 
  onExport, 
  filename = "export", 
  title = "Export Data",
  className = "" 
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const exportOptions = [
    {
      format: 'csv',
      label: 'Export as CSV',
      icon: FileText,
      description: 'Comma-separated values file'
    },
    {
      format: 'excel',
      label: 'Export as Excel',
      icon: FileSpreadsheet,
      description: 'Microsoft Excel file'
    },
    {
      format: 'pdf',
      label: 'Export as PDF',
      icon: File,
      description: 'Portable document format'
    }
  ];

  const handleExport = (format) => {
    onExport(data, format);
    setIsOpen(false);
  };

  return (
    <>
      <div className={`relative ${className}`}>
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 border rounded-lg flex items-center gap-2 hover:bg-gray-50 transition-colors"
        >
          <Download className="w-4 h-4" />
          Export
        </button>

      </div>

      <ExportModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        data={data}
        title={title}
        filename={filename}
        onExport={onExport}
      />
    </>
  );
}