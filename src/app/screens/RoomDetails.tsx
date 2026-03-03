import { useNavigate, useParams } from "react-router";
import { ChevronLeft, Play, FileText, Bell } from "lucide-react";

export default function RoomDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="h-screen w-full bg-white flex flex-col">
      {/* Header */}
      <div className="px-6 py-4 border-b border-[var(--electric-blue-light)] flex items-center gap-3">
        <button
          onClick={() => navigate("/home")}
          className="p-1 hover:bg-[var(--electric-blue-light)] rounded-lg transition-colors"
          aria-label="Go back"
        >
          <ChevronLeft className="w-6 h-6 text-[var(--electric-blue)]" />
        </button>
        <h1 className="text-lg text-neutral-900">Classroom 101</h1>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
        {/* Room Info Card */}
        <div className="bg-neutral-50 rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-sm text-neutral-500">Type</p>
            <p className="text-neutral-900">Classroom</p>
          </div>
          <div className="h-px bg-neutral-200" />
          <div className="flex items-center justify-between">
            <p className="text-sm text-neutral-500">Check-in Status</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-neutral-300" />
              <p className="text-neutral-900">Inactive</p>
            </div>
          </div>
          <div className="h-px bg-neutral-200" />
          <div className="flex items-center justify-between">
            <p className="text-sm text-neutral-500">Mode</p>
            <p className="text-neutral-900">Active Scanning</p>
          </div>
          <div className="h-px bg-neutral-200" />
          <div className="flex items-center justify-between">
            <p className="text-sm text-neutral-500">NFC Required</p>
            <p className="text-neutral-900">Yes</p>
          </div>
        </div>

        {/* Primary Actions */}
        <div className="space-y-3">
          <button
            onClick={() => navigate(`/room/${id}/start-checkin`)}
            className="w-full p-4 bg-[var(--electric-blue)] text-white rounded-xl hover:bg-[var(--electric-blue-dark)] transition-colors flex items-center justify-center gap-2 touch-manipulation active:scale-[0.98]"
          >
            <Play className="w-5 h-5" />
            <span>Start Check-in</span>
          </button>

          <button
            onClick={() => navigate(`/room/${id}/logs`)}
            className="w-full p-4 bg-neutral-50 text-[var(--electric-blue)] rounded-xl hover:bg-[var(--electric-blue-light)] hover:border-[var(--electric-blue)] border border-transparent transition-colors flex items-center justify-center gap-2 touch-manipulation"
          >
            <FileText className="w-5 h-5" />
            <span>View Logs</span>
          </button>

          <button
            onClick={() => navigate(`/room/${id}/announcements`)}
            className="w-full p-4 bg-neutral-50 text-[var(--electric-blue)] rounded-xl hover:bg-[var(--electric-blue-light)] hover:border-[var(--electric-blue)] border border-transparent transition-colors flex items-center justify-center gap-2 touch-manipulation"
          >
            <Bell className="w-5 h-5" />
            <span>Announcements</span>
          </button>
        </div>
      </div>
    </div>
  );
}