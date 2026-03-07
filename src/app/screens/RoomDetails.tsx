import { useNavigate, useParams } from "react-router";
import { ChevronLeft, Play, FileText, Bell, Users } from "lucide-react";
import { motion } from "motion/react";

export default function RoomDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="h-screen w-full bg-white flex flex-col">
      {/* Header */}
      <motion.div
        className="px-6 py-4 border-b border-[var(--electric-blue-light)] flex items-center gap-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <button
          onClick={() => navigate("/home")}
          className="p-1 hover:bg-[var(--electric-blue-light)] rounded-lg transition-colors"
          aria-label="Go back"
        >
          <ChevronLeft className="w-6 h-6 text-[var(--electric-blue)]" />
        </button>
        <h1 className="text-lg text-neutral-900">Classroom 101</h1>
      </motion.div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
        {/* Room Info Card */}
        <motion.div
          className="bg-neutral-50 rounded-xl p-4 space-y-3"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
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
        </motion.div>

        {/* Primary Actions */}
        <div className="space-y-3">
          <motion.button
            onClick={() => navigate(`/room/${id}/start-checkin`)}
            className="w-full p-4 bg-[var(--electric-blue)] text-white rounded-xl hover:bg-[var(--electric-blue-dark)] transition-colors flex items-center justify-center gap-2 touch-manipulation active:scale-[0.98]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Play className="w-5 h-5" />
            <span>Start Check-in</span>
          </motion.button>

          <motion.button
            onClick={() => navigate(`/room/${id}/logs`)}
            className="w-full p-4 bg-neutral-50 text-[var(--electric-blue)] rounded-xl hover:bg-[var(--electric-blue-light)] hover:border-[var(--electric-blue)] border border-transparent transition-colors flex items-center justify-center gap-2 touch-manipulation"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FileText className="w-5 h-5" />
            <span>View Logs</span>
          </motion.button>

          <motion.button
            onClick={() => navigate(`/room/${id}/announcements`)}
            className="w-full p-4 bg-neutral-50 text-[var(--electric-blue)] rounded-xl hover:bg-[var(--electric-blue-light)] hover:border-[var(--electric-blue)] border border-transparent transition-colors flex items-center justify-center gap-2 touch-manipulation"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Bell className="w-5 h-5" />
            <span>Announcements</span>
          </motion.button>

          <motion.button
            onClick={() => navigate(`/room/${id}/add-students`)}
            className="w-full p-4 bg-neutral-50 text-[var(--electric-blue)] rounded-xl hover:bg-[var(--electric-blue-light)] hover:border-[var(--electric-blue)] border border-transparent transition-colors flex items-center justify-center gap-2 touch-manipulation"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Users className="w-5 h-5" />
            <span>Manage Students</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}