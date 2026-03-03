import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react";

export default function CreateRoom() {
  const navigate = useNavigate();
  const [roomName, setRoomName] = useState("");
  const [roomType, setRoomType] = useState("classroom");
  const [checkinMode, setCheckinMode] = useState("manual");
  const [nfcRequired, setNfcRequired] = useState(false);
  const [qrFallback, setQrFallback] = useState(true);
  const [timeWindow, setTimeWindow] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/home");
  };

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
        <h1 className="text-lg text-neutral-900">Create Room</h1>
      </div>

      {/* Form */}
      <div className="flex-1 overflow-y-auto">
        <form onSubmit={handleSubmit} className="px-6 py-6 space-y-8">
          {/* Basic Info Section */}
          <div className="space-y-4">
            <h3 className="text-sm text-neutral-500">Basic Information</h3>
            <div className="bg-neutral-50 rounded-xl overflow-hidden divide-y divide-neutral-200">
              <div className="p-4">
                <label
                  htmlFor="roomName"
                  className="block text-sm text-neutral-600 mb-2"
                >
                  Room Name
                </label>
                <input
                  id="roomName"
                  type="text"
                  value={roomName}
                  onChange={(e) => setRoomName(e.target.value)}
                  className="w-full px-0 py-1 bg-transparent border-none text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
                  placeholder="e.g., Classroom 101"
                  required
                />
              </div>
              <div className="p-4">
                <label
                  htmlFor="roomType"
                  className="block text-sm text-neutral-600 mb-2"
                >
                  Room Type
                </label>
                <select
                  id="roomType"
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  className="w-full px-0 py-1 bg-transparent border-none text-neutral-900 focus:outline-none"
                >
                  <option value="classroom">Classroom</option>
                  <option value="event">Event</option>
                  <option value="library">Library</option>
                </select>
              </div>
            </div>
          </div>

          {/* Check-in Settings Section */}
          <div className="space-y-4">
            <h3 className="text-sm text-neutral-500">Check-in Settings</h3>
            <div className="bg-neutral-50 rounded-xl overflow-hidden divide-y divide-neutral-200">
              <div className="p-4">
                <label
                  htmlFor="checkinMode"
                  className="block text-sm text-neutral-600 mb-2"
                >
                  Check-in Mode
                </label>
                <select
                  id="checkinMode"
                  value={checkinMode}
                  onChange={(e) => setCheckinMode(e.target.value)}
                  className="w-full px-0 py-1 bg-transparent border-none text-neutral-900 focus:outline-none"
                >
                  <option value="manual">Manual</option>
                  <option value="active">Active Scanning</option>
                </select>
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-neutral-900">NFC Required</p>
                  <p className="text-sm text-neutral-500">
                    Students must scan NFC badge
                  </p>
                </div>
                <label className="relative inline-block w-12 h-7">
                  <input
                    type="checkbox"
                    checked={nfcRequired}
                    onChange={(e) => setNfcRequired(e.target.checked)}
                    className="sr-only peer"
                  />
                  <span className="absolute inset-0 bg-neutral-300 rounded-full peer-checked:bg-[var(--electric-blue)] transition-colors" />
                  <span className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-5" />
                </label>
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-neutral-900">QR Fallback</p>
                  <p className="text-sm text-neutral-500">
                    Allow QR code scanning
                  </p>
                </div>
                <label className="relative inline-block w-12 h-7">
                  <input
                    type="checkbox"
                    checked={qrFallback}
                    onChange={(e) => setQrFallback(e.target.checked)}
                    className="sr-only peer"
                  />
                  <span className="absolute inset-0 bg-neutral-300 rounded-full peer-checked:bg-[var(--electric-blue)] transition-colors" />
                  <span className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-5" />
                </label>
              </div>
              <div className="p-4">
                <label
                  htmlFor="timeWindow"
                  className="block text-sm text-neutral-600 mb-2"
                >
                  Time Window (Optional)
                </label>
                <input
                  id="timeWindow"
                  type="text"
                  value={timeWindow}
                  onChange={(e) => setTimeWindow(e.target.value)}
                  className="w-full px-0 py-1 bg-transparent border-none text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
                  placeholder="e.g., 9:00 AM - 5:00 PM"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3.5 bg-[var(--electric-blue)] text-white rounded-xl hover:bg-[var(--electric-blue-dark)] transition-colors active:scale-[0.98] touch-manipulation"
          >
            Create Room
          </button>
        </form>
      </div>
    </div>
  );
}