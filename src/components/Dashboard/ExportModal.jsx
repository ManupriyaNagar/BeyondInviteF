"use client";
import { useState } from "react";
import { X, Download, FileText, FileSpreadsheet, File, CheckCircle, AlertCircle } from "lucide-react";

export default function ExportModal({ 
  isOpen, 
  onClose, 
  data, 
  title = "Export Data",
  filename = "export",
  onExport 
}) {
  const [selectedFormat, setSelectedFormat] = useState('csv');
  const [isExporting, setIsExporting] = useState(false);
  const [exportStatus, setExportStatus] = useState(null);

  const exportFormats = [
    {
      id: 'csv',
      name: 'CSV File',
      description: 'Comma-separated values, compatible with Excel and Google Sheets',
      icon: FileText,
      extension: '.csv'
    },
    {
      id: 'excel',
      name: 'Excel File',
      description: 'Microsoft Excel format with formatting and formulas',
      icon: FileSpreadsheet,
      extension: '.xlsx'
    },
    {
      id: 'pdf',
      name: 'PDF Document',
      description: 'Portable document format, perfect for printing and sharing',
      icon: File,
      extension: '.pdf'
    }
  ];

  const handleExport = async () => {
    if (!data || data.length === 0) {
      setExportStatus('error');
      return;
    }

    setIsExporting(true);
    setExportStatus(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Show loading
      await onExport(data, selectedFormat);
      setExportStatus('success');
      
      // Auto close after success
      setTimeout(() => {
        onClose();
        setExportStatus(null);
      }, 2000);
    } catch (error) {
      console.error('Export failed:', error);
      setExportStatus('error');
    } finally {
      setIsExporting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="mb-6">
          <p className="text-gray-600 mb-4">
            Choose your preferred export format for {data?.length || 0} records:
          </p>
          
          <div className="space-y-3">
            {exportFormats.map((format) => (
              <label
                key={format.id}
                className={`flex items-start gap-3 p-3 border rounded-lg cursor-pointer transition-colors ${
                  selectedFormat === format.id
                    ? 'border-[#37514D] bg-[#37514D]/5'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <input
                  type="radio"
                  name="exportFormat"
                  value={format.id}
                  checked={selectedFormat === format.id}
                  onChange={(e) => setSelectedFormat(e.target.value)}
                  className="mt-1"
                />
                <format.icon className={`w-5 h-5 mt-0.5 ${
                  selectedFormat === format.id ? 'text-[#37514D]' : 'text-gray-400'
                }`} />
                <div className="flex-1">
                  <div className="font-medium text-gray-900">{format.name}</div>
                  <div className="text-sm text-gray-600">{format.description}</div>
                  <div className="text-xs text-gray-500 mt-1">
                    File: {filename}{format.extension}
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {exportStatus === 'error' && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-red-600" />
            <span className="text-red-700">Export failed. Please try again.</span>
          </div>
        )}

        {exportStatus === 'success' && (
          <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-green-700">Export completed successfully!</span>
          </div>
        )}

        <div className="flex gap-3">
          <button
            onClick={onClose}
            disabled={isExporting}
            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={handleExport}
            disabled={isExporting || !data || data.length === 0}
            className="flex-1 bg-[#37514D] text-white px-4 py-2 rounded-lg hover:bg-[#2a3d39] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isExporting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Exporting...
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                Export {exportFormats.find(f => f.id === selectedFormat)?.name}
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}