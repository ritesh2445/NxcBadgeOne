import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Wifi, X } from "lucide-react";

type CheckinEntry = {
  id: string;
  name: string;
  rollNumber: string;
  timestamp: string;
};

const mockCheckins: CheckinEntry[] = [
  { id: "1", name: "Sarah Johnson", rollNumber: "CS2021001", timestamp: "10:15 AM" },
  { id: "2", name: "Michael Chen", rollNumber: "CS2021002", timestamp: "10:15 AM" },
  { id: "3", name: "Emily Rodriguez", rollNumber: "CS2021003", timestamp: "10:16 AM" },
];

export default function ActiveCheckin() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [checkins, setCheckins] = useState<CheckinEntry[]>([]);
  const [showStopModal, setShowStopModal] = useState(false);
  const [isPulsing, setIsPulsing] = useState(true);

  useEffect(() => {
    // Simulate check-ins appearing
    const timer = setTimeout(() => {
      setCheckins(mockCheckins);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleStop = () => {
    navigate(`/room/${id}`);
  };

  return (
    <div className="h-screen w-full bg-white flex flex-col">
      {/* Header */}
      <div className="px-6 py-4 border-b border-[var(--electric-blue-light)] flex items-center justify-between">
        <div>
          <h1 className="text-lg text-neutral-900">Active Check-in</h1>
          <p className="text-sm text-neutral-500">Classroom 101</p>
        </div>
        <button
          onClick={() => setShowStopModal(true)}
          className="p-2 hover:bg-[var(--electric-blue-light)] rounded-lg transition-colors"
          aria-label="Stop check-in"
        >
          <X className="w-6 h-6 text-[var(--electric-blue)]" />
        </button>
      </div>

      {/* Scanning Indicator */}
      <div className="px-6 py-8 flex flex-col items-center">
        <motion.div
          animate={isPulsing ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mb-4"
        >
          <div className="w-20 h-20 rounded-full bg-[var(--electric-blue-light)] flex items-center justify-center">
            <Wifi className="w-10 h-10 text-[var(--electric-blue)]" />
          </div>
        </motion.div>
        <p className="text-neutral-500">Scanning active</p>
        <p className="text-sm text-[var(--electric-blue)] mt-1">{checkins.length} checked in</p>
      </div>

      {/* Recent Check-ins */}
      <div className="flex-1 overflow-y-auto px-6">
        <h3 className="text-sm text-neutral-500 mb-3">Recent Check-ins</h3>
        <AnimatePresence mode="popLayout">
          {checkins.map((checkin) => (
            <motion.div
              key={checkin.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-2 p-4 bg-[var(--electric-blue-light)] border border-[var(--electric-blue)] rounded-xl"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-neutral-900">{checkin.name}</p>
                  <p className="text-sm text-neutral-500">{checkin.rollNumber}</p>
                </div>
                <p className="text-sm text-neutral-500">{checkin.timestamp}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Stop Modal */}
      {showStopModal && (
        <div className="fixed inset-0 bg-black/20 flex items-end sm:items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-t-3xl sm:rounded-2xl w-full sm:max-w-sm mx-4 p-6"
          >
            <h3 className="text-lg text-neutral-900 mb-2">Stop Check-in?</h3>
            <p className="text-sm text-neutral-500 mb-6">
              This will end the current check-in session.
            </p>
            <div className="space-y-2">
              <button
                onClick={handleStop}
                className="w-full py-3 bg-[var(--electric-blue)] text-white rounded-xl hover:bg-[var(--electric-blue-dark)] transition-colors"
              >
                Stop Check-in
              </button>
              <button
                onClick={() => setShowStopModal(false)}
                className="w-full py-3 bg-neutral-100 text-neutral-900 rounded-xl hover:bg-neutral-200 transition-colors"
              >
                Continue
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}