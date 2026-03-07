import { Plus } from "lucide-react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";

const mockRooms = [
  { id: "1", name: "Classroom 101", type: "Classroom", status: "active" },
  { id: "2", name: "Library Hall", type: "Library", status: "inactive" },
  { id: "3", name: "Annual Event", type: "Event", status: "active" },
  { id: "4", name: "Lab 202", type: "Classroom", status: "inactive" },
];

export default function AdminHome() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full bg-white flex flex-col">
      {/* Top Navigation */}
      <motion.div
        className="px-6 py-4 border-b border-[var(--electric-blue-light)] bg-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg text-neutral-900">Springfield Institute</h1>
            <p className="text-sm text-neutral-500">Admin Dashboard</p>
          </div>
          <motion.button
            onClick={() => navigate("/create-room")}
            className="p-2 hover:bg-[var(--electric-blue-light)] rounded-lg transition-colors"
            aria-label="Create Room"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Plus className="w-6 h-6 text-[var(--electric-blue)]" />
          </motion.button>
        </div>
      </motion.div>

      {/* Room List */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-6 py-4">
          <motion.h2
            className="text-sm text-neutral-500 mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Rooms
          </motion.h2>
          <div className="space-y-2">
            {mockRooms.map((room, index) => (
              <motion.button
                key={room.id}
                onClick={() => navigate(`/room/${room.id}`)}
                className="w-full text-left p-4 bg-neutral-50 rounded-xl hover:bg-[var(--electric-blue-light)] hover:border-[var(--electric-blue)] border border-transparent transition-colors touch-manipulation"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index + 0.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-neutral-900 mb-1">{room.name}</h3>
                    <p className="text-sm text-neutral-500">{room.type}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        room.status === "active"
                          ? "bg-[var(--electric-blue)]"
                          : "bg-neutral-300"
                      }`}
                    />
                    <span className="text-sm text-neutral-500 capitalize">
                      {room.status}
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="px-6 py-4 border-t border-neutral-200">
          <motion.h2
            className="text-sm text-neutral-500 mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Quick Actions
          </motion.h2>
          <div className="space-y-2">
            <motion.button
              onClick={() => navigate("/announcements/create")}
              className="w-full text-left p-4 bg-neutral-50 rounded-xl hover:bg-[var(--electric-blue-light)] hover:border-[var(--electric-blue)] border border-transparent transition-colors touch-manipulation"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <p className="text-neutral-900">Create Announcement</p>
              <p className="text-sm text-neutral-500 mt-1">Send announcement to rooms or university</p>
            </motion.button>
            <motion.button
              onClick={() => navigate("/issue-document")}
              className="w-full text-left p-4 bg-neutral-50 rounded-xl hover:bg-[var(--electric-blue-light)] hover:border-[var(--electric-blue)] border border-transparent transition-colors touch-manipulation"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <p className="text-neutral-900">Issue Document</p>
              <p className="text-sm text-neutral-500 mt-1">Send documents to students</p>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}