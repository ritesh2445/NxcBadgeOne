import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ChevronLeft, Download, Calendar } from "lucide-react";
import { motion } from "motion/react";

type LogEntry = {
  id: string;
  name: string;
  rollNumber: string;
  date: string;
  time: string;
};

const mockLogs: LogEntry[] = [
  { id: "1", name: "Sarah Johnson", rollNumber: "CS2021001", date: "Feb 23, 2026", time: "10:15 AM" },
  { id: "2", name: "Michael Chen", rollNumber: "CS2021002", date: "Feb 23, 2026", time: "10:15 AM" },
  { id: "3", name: "Emily Rodriguez", rollNumber: "CS2021003", date: "Feb 23, 2026", time: "10:16 AM" },
  { id: "4", name: "James Wilson", rollNumber: "CS2021004", date: "Feb 22, 2026", time: "09:30 AM" },
  { id: "5", name: "Olivia Brown", rollNumber: "CS2021005", date: "Feb 22, 2026", time: "09:31 AM" },
  { id: "6", name: "David Martinez", rollNumber: "CS2021006", date: "Feb 21, 2026", time: "11:45 AM" },
];

export default function RoomLogs() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState("all");

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
          onClick={() => navigate(`/room/${id}`)}
          className="p-1 hover:bg-[var(--electric-blue-light)] rounded-lg transition-colors"
          aria-label="Go back"
        >
          <ChevronLeft className="w-6 h-6 text-[var(--electric-blue)]" />
        </button>
        <h1 className="text-lg text-neutral-900">Check-in Logs</h1>
      </motion.div>

      {/* Filters and Export */}
      <motion.div 
        className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-[var(--electric-blue)]" />
          <select
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="text-sm text-neutral-700 border-none bg-transparent focus:outline-none"
          >
            <option value="all">All dates</option>
            <option value="today">Today</option>
            <option value="yesterday">Yesterday</option>
            <option value="week">This week</option>
          </select>
        </div>
        <motion.button
          onClick={() => navigate(`/room/${id}/export`)}
          className="p-2 hover:bg-[var(--electric-blue-light)] rounded-lg transition-colors"
          aria-label="Export logs"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Download className="w-5 h-5 text-[var(--electric-blue)]" />
        </motion.button>
      </motion.div>

      {/* Logs List */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        <div className="space-y-2">
          {mockLogs.map((log, index) => (
            <motion.div
              key={log.id}
              className="p-4 bg-neutral-50 rounded-xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.05 * index + 0.2 }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-neutral-900">{log.name}</p>
                  <p className="text-sm text-neutral-500">{log.rollNumber}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-neutral-500">
                <span>{log.date}</span>
                <span>•</span>
                <span>{log.time}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}