"use client";
import { useState } from "react";
import { Download, FileText, FileSpreadsheet, File, CheckCircle, AlertCircle } from "lucide-react";

export default function ExportButton({ 
  data, 
  onExport, 
  format = 'csv',
  filename = "export",
  disabled = false,
  className = ""
}) {
  const [isExporting, setIsExporting] = useState(false);
  const [exportStatus, setExportStatus] = useState(null);

  const getIcon = () => {
    switch (format) {
      case 'excel':
        return FileSpreadsheet;
      case 'pdf':
        return File;
      default:
        return FileText;
    }
  };

  const getLabel = () => {
    switch (format) {
      case 'excel':
        return 'Export Excel';
      case 'pdf':
        return 'Export PDF';
      default:
        return 'Export CSV';
    }
  };

  const handleExport = async () => {
    if (!data || data.length === 0) {
      setExportStatus('error');
      setTimeout(() => setExportStatus(null), 3000);
      return;
    }

    setIsExporting(true);
    setExportStatus(null);

    try {
      // Add a small delay to show loading state
      await new Promise(resolve => setTimeout(resolve, 500));
      
      await onExport(data, format);
      
      setExportStatus('success');
      setTimeout(() => setExportStatus(null), 3000);
    } catch (error) {
      console.error('Export failed:', error);
      setExportStatus('error');
      setTimeout(() => setExportStatus(null), 3000);
    } finally {
      setIsExporting(false);
    }
  };

  const Icon = getIcon();

  return (
    <button
      onClick={handleExport}
      disabled={disabled || isExporting}
      className={`px-4 py-2 border rounded-lg flex items-center gap-2 transition-colors ${
        disabled || isExporting 
          ? 'opacity-50 cursor-not-allowed' 
          : 'hover:bg-gray-50'
      } ${className}`}
    >
      {isExporting ? (
        <>
          <div className="w-4 h-4 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
          Exporting...
        </>
      ) : exportStatus === 'success' ? (
        <>
          <CheckCircle className="w-4 h-4 text-green-600" />
          Exported!
        </>
      ) : exportStatus === 'error' ? (
        <>
          <AlertCircle className="w-4 h-4 text-red-600" />
          Failed
        </>
      ) : (
        <>
          <Icon className="w-4 h-4" />
          {getLabel()}
        </>
      )}
    </button>
  );
}