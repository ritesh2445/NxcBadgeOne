import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ChevronLeft } from "lucide-react";

export default function Export() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [format, setFormat] = useState("csv");

  const handleExport = () => {
    // Simulate export
    alert(`Exporting as ${format.toUpperCase()}...`);
    navigate(`/room/${id}/logs`);
  };

  return (
    <div className="h-screen w-full bg-white flex flex-col">
      {/* Header */}
      <div className="px-6 py-4 border-b border-[var(--electric-blue-light)] flex items-center gap-3">
        <button
          onClick={() => navigate(`/room/${id}/logs`)}
          className="p-1 hover:bg-[var(--electric-blue-light)] rounded-lg transition-colors"
          aria-label="Go back"
        >
          <ChevronLeft className="w-6 h-6 text-[var(--electric-blue)]" />
        </button>
        <h1 className="text-lg text-neutral-900">Export Logs</h1>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        <div className="space-y-6">
          <div>
            <h3 className="text-sm text-neutral-500 mb-4">Select Format</h3>
            <div className="space-y-2">
              <label className="flex items-center p-4 bg-neutral-50 rounded-xl cursor-pointer hover:bg-[var(--electric-blue-light)] hover:border-[var(--electric-blue)] border border-transparent transition-colors">
                <input
                  type="radio"
                  name="format"
                  value="csv"
                  checked={format === "csv"}
                  onChange={(e) => setFormat(e.target.value)}
                  className="w-5 h-5 text-[var(--electric-blue)] border-neutral-300 focus:ring-[var(--electric-blue)]"
                />
                <span className="ml-3 text-neutral-900">CSV</span>
              </label>

              <label className="flex items-center p-4 bg-neutral-50 rounded-xl cursor-pointer hover:bg-[var(--electric-blue-light)] hover:border-[var(--electric-blue)] border border-transparent transition-colors">
                <input
                  type="radio"
                  name="format"
                  value="pdf"
                  checked={format === "pdf"}
                  onChange={(e) => setFormat(e.target.value)}
                  className="w-5 h-5 text-[var(--electric-blue)] border-neutral-300 focus:ring-[var(--electric-blue)]"
                />
                <span className="ml-3 text-neutral-900">PDF</span>
              </label>

              <label className="flex items-center p-4 bg-neutral-50 rounded-xl cursor-pointer hover:bg-[var(--electric-blue-light)] hover:border-[var(--electric-blue)] border border-transparent transition-colors">
                <input
                  type="radio"
                  name="format"
                  value="excel"
                  checked={format === "excel"}
                  onChange={(e) => setFormat(e.target.value)}
                  className="w-5 h-5 text-[var(--electric-blue)] border-neutral-300 focus:ring-[var(--electric-blue)]"
                />
                <span className="ml-3 text-neutral-900">Excel</span>
              </label>
            </div>
          </div>

          <button
            onClick={handleExport}
            className="w-full py-3.5 bg-[var(--electric-blue)] text-white rounded-xl hover:bg-[var(--electric-blue-dark)] transition-colors active:scale-[0.98] touch-manipulation"
          >
            Export
          </button>
        </div>
      </div>
    </div>
  );
}