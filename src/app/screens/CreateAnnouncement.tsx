import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ChevronLeft, Search, X, Building2, DoorOpen } from "lucide-react";
import { motion } from "motion/react";

type Room = {
  id: string;
  name: string;
  type: string;
};

const mockRooms: Room[] = [
  { id: "1", name: "Classroom 101", type: "Classroom" },
  { id: "2", name: "Library Hall", type: "Library" },
  { id: "3", name: "Annual Event", type: "Event" },
  { id: "4", name: "Lab 202", type: "Classroom" },
  { id: "5", name: "Conference Room A", type: "Conference" },
  { id: "6", name: "Auditorium", type: "Event" },
];

export default function CreateAnnouncement() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [expiry, setExpiry] = useState("");
  const [scope, setScope] = useState<"university" | "rooms">("university");
  const [selectedRooms, setSelectedRooms] = useState<string[]>(id ? [id] : []);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRooms = mockRooms.filter((room) =>
    room.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    room.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleRoom = (roomId: string) => {
    setSelectedRooms((prev) =>
      prev.includes(roomId)
        ? prev.filter((id) => id !== roomId)
        : [...prev, roomId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (scope === "university") {
      alert("Announcement sent to entire university!");
    } else {
      alert(`Announcement sent to ${selectedRooms.length} room(s)!`);
    }
    
    if (id) {
      navigate(`/room/${id}/announcements`);
    } else {
      navigate("/home");
    }
  };

  const handleBack = () => {
    if (id) {
      navigate(`/room/${id}/announcements`);
    } else {
      navigate("/home");
    }
  };

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
          onClick={handleBack}
          className="p-1 hover:bg-[var(--electric-blue-light)] rounded-lg transition-colors"
          aria-label="Go back"
        >
          <ChevronLeft className="w-6 h-6 text-[var(--electric-blue)]" />
        </button>
        <h1 className="text-lg text-neutral-900">New Announcement</h1>
      </motion.div>

      {/* Form */}
      <div className="flex-1 overflow-y-auto">
        <form onSubmit={handleSubmit} className="px-6 py-6 space-y-6">
          {/* Announcement Scope */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <label className="block text-sm text-neutral-600 mb-3">
              Announcement Scope
            </label>
            <div className="space-y-3">
              <motion.label
                className={`flex items-center p-4 rounded-xl cursor-pointer border transition-colors ${
                  scope === "university"
                    ? "border-[var(--electric-blue)] bg-[var(--electric-blue-light)]"
                    : "border-neutral-200 bg-neutral-50 hover:bg-neutral-100"
                }`}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <input
                  type="radio"
                  name="scope"
                  value="university"
                  checked={scope === "university"}
                  onChange={(e) => setScope(e.target.value as "university")}
                  className="sr-only"
                />
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                    scope === "university"
                      ? "border-[var(--electric-blue)]"
                      : "border-neutral-300"
                  }`}
                >
                  {scope === "university" && (
                    <motion.div
                      className="w-3 h-3 rounded-full bg-[var(--electric-blue)]"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </div>
                <div className="ml-3 flex-1 flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-[var(--electric-blue)]" />
                  <div>
                    <p className="text-neutral-900">University-wide</p>
                    <p className="text-sm text-neutral-500">
                      Send to all rooms and students
                    </p>
                  </div>
                </div>
              </motion.label>

              <motion.label
                className={`flex items-center p-4 rounded-xl cursor-pointer border transition-colors ${
                  scope === "rooms"
                    ? "border-[var(--electric-blue)] bg-[var(--electric-blue-light)]"
                    : "border-neutral-200 bg-neutral-50 hover:bg-neutral-100"
                }`}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <input
                  type="radio"
                  name="scope"
                  value="rooms"
                  checked={scope === "rooms"}
                  onChange={(e) => setScope(e.target.value as "rooms")}
                  className="sr-only"
                />
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                    scope === "rooms"
                      ? "border-[var(--electric-blue)]"
                      : "border-neutral-300"
                  }`}
                >
                  {scope === "rooms" && (
                    <motion.div
                      className="w-3 h-3 rounded-full bg-[var(--electric-blue)]"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </div>
                <div className="ml-3 flex-1 flex items-center gap-3">
                  <DoorOpen className="w-5 h-5 text-[var(--electric-blue)]" />
                  <div>
                    <p className="text-neutral-900">Specific Rooms</p>
                    <p className="text-sm text-neutral-500">
                      Choose one or multiple rooms
                    </p>
                  </div>
                </div>
              </motion.label>
            </div>
          </motion.div>

          {/* Room Selection (shown only when scope is "rooms") */}
          {scope === "rooms" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between mb-3">
                <label className="block text-sm text-neutral-600">
                  Select Rooms
                </label>
                {selectedRooms.length > 0 && (
                  <motion.span
                    className="text-sm text-[var(--electric-blue)]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    {selectedRooms.length} selected
                  </motion.span>
                )}
              </div>

              {/* Search Bar */}
              <div className="relative mb-3">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search rooms"
                  className="w-full pl-10 pr-10 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[var(--electric-blue)] transition-colors"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-neutral-200 rounded-full transition-colors"
                  >
                    <X className="w-4 h-4 text-neutral-500" />
                  </button>
                )}
              </div>

              {/* Room List */}
              <div className="max-h-48 overflow-y-auto space-y-2 p-1">
                {filteredRooms.map((room, index) => {
                  const isSelected = selectedRooms.includes(room.id);

                  return (
                    <motion.label
                      key={room.id}
                      className={`flex items-center p-3 rounded-xl cursor-pointer border transition-colors ${
                        isSelected
                          ? "bg-[var(--electric-blue-light)] border-[var(--electric-blue)]"
                          : "bg-neutral-50 border-transparent hover:bg-neutral-100"
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.05 * index }}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => toggleRoom(room.id)}
                        className="sr-only"
                      />
                      <div
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                          isSelected
                            ? "border-[var(--electric-blue)] bg-[var(--electric-blue)]"
                            : "border-neutral-300"
                        }`}
                      >
                        {isSelected && (
                          <motion.svg
                            className="w-3 h-3 text-white"
                            viewBox="0 0 12 12"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          >
                            <path
                              d="M10 3L4.5 8.5L2 6"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              fill="none"
                            />
                          </motion.svg>
                        )}
                      </div>
                      <div className="ml-3 flex-1">
                        <p className="text-neutral-900">{room.name}</p>
                        <p className="text-sm text-neutral-500">{room.type}</p>
                      </div>
                    </motion.label>
                  );
                })}
              </div>

              {filteredRooms.length === 0 && (
                <motion.div
                  className="text-center py-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <p className="text-neutral-500">No rooms found</p>
                </motion.div>
              )}
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <label
              htmlFor="title"
              className="block text-sm text-neutral-600 mb-2"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[var(--electric-blue)] transition-colors"
              placeholder="Enter announcement title"
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <label
              htmlFor="body"
              className="block text-sm text-neutral-600 mb-2"
            >
              Message
            </label>
            <textarea
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={8}
              className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[var(--electric-blue)] transition-colors resize-none"
              placeholder="Write your announcement..."
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <label
              htmlFor="expiry"
              className="block text-sm text-neutral-600 mb-2"
            >
              Expiry Date
            </label>
            <input
              id="expiry"
              type="date"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[var(--electric-blue)] transition-colors"
              required
            />
          </motion.div>

          <motion.button
            type="submit"
            disabled={scope === "rooms" && selectedRooms.length === 0}
            className="w-full py-3.5 bg-[var(--electric-blue)] text-white rounded-xl hover:bg-[var(--electric-blue-dark)] transition-colors active:scale-[0.98] touch-manipulation disabled:opacity-50 disabled:cursor-not-allowed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            whileHover={{ scale: (scope === "university" || selectedRooms.length > 0) ? 1.02 : 1 }}
            whileTap={{ scale: (scope === "university" || selectedRooms.length > 0) ? 0.98 : 1 }}
          >
            Create Announcement
          </motion.button>
        </form>
      </div>
    </div>
  );
}