import { useNavigate, useParams } from "react-router";
import { ChevronLeft, Plus } from "lucide-react";
import { motion } from "motion/react";

type Announcement = {
  id: string;
  title: string;
  preview: string;
  expiry: string;
};

const mockAnnouncements: Announcement[] = [
  {
    id: "1",
    title: "Midterm Examination Schedule",
    preview: "The midterm exams will be held from March 1-5. Please review the detailed schedule...",
    expiry: "Expires Mar 5, 2026",
  },
  {
    id: "2",
    title: "Library Hours Extended",
    preview: "During exam week, the library will remain open until 11 PM...",
    expiry: "Expires Feb 28, 2026",
  },
  {
    id: "3",
    title: "Guest Lecture on AI",
    preview: "Dr. Smith will be delivering a special lecture on Machine Learning...",
    expiry: "Expires Feb 25, 2026",
  },
];

export default function Announcements() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="h-screen w-full bg-white flex flex-col">
      {/* Header */}
      <motion.div 
        className="px-6 py-4 border-b border-[var(--electric-blue-light)] flex items-center justify-between"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(`/room/${id}`)}
            className="p-1 hover:bg-[var(--electric-blue-light)] rounded-lg transition-colors"
            aria-label="Go back"
          >
            <ChevronLeft className="w-6 h-6 text-[var(--electric-blue)]" />
          </button>
          <h1 className="text-lg text-neutral-900">Announcements</h1>
        </div>
        <motion.button
          onClick={() => navigate(`/room/${id}/announcements/create`)}
          className="p-2 hover:bg-[var(--electric-blue-light)] rounded-lg transition-colors"
          aria-label="Create announcement"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Plus className="w-6 h-6 text-[var(--electric-blue)]" />
        </motion.button>
      </motion.div>

      {/* Announcements List */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        <div className="space-y-3">
          {mockAnnouncements.map((announcement, index) => (
            <motion.div
              key={announcement.id}
              className="p-4 bg-neutral-50 rounded-xl hover:bg-[var(--electric-blue-light)] hover:border-[var(--electric-blue)] border border-transparent transition-colors cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index + 0.2 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <h3 className="text-neutral-900 mb-2">{announcement.title}</h3>
              <p className="text-sm text-neutral-500 mb-3 line-clamp-2">
                {announcement.preview}
              </p>
              <p className="text-xs text-neutral-400">{announcement.expiry}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}