import { Plus } from "lucide-react";
import { useNavigate } from "react-router";

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
      <div className="px-6 py-4 border-b border-[var(--electric-blue-light)] bg-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg text-neutral-900">Springfield Institute</h1>
            <p className="text-sm text-neutral-500">Admin Dashboard</p>
          </div>
          <button
            onClick={() => navigate("/create-room")}
            className="p-2 hover:bg-[var(--electric-blue-light)] rounded-lg transition-colors"
            aria-label="Create Room"
          >
            <Plus className="w-6 h-6 text-[var(--electric-blue)]" />
          </button>
        </div>
      </div>

      {/* Room List */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-6 py-4">
          <h2 className="text-sm text-neutral-500 mb-3">Rooms</h2>
          <div className="space-y-2">
            {mockRooms.map((room) => (
              <button
                key={room.id}
                onClick={() => navigate(`/room/${room.id}`)}
                className="w-full text-left p-4 bg-neutral-50 rounded-xl hover:bg-[var(--electric-blue-light)] hover:border-[var(--electric-blue)] border border-transparent transition-colors touch-manipulation"
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
              </button>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="px-6 py-4 border-t border-neutral-200">
          <h2 className="text-sm text-neutral-500 mb-3">Quick Actions</h2>
          <button
            onClick={() => navigate("/issue-document")}
            className="w-full text-left p-4 bg-neutral-50 rounded-xl hover:bg-[var(--electric-blue-light)] hover:border-[var(--electric-blue)] border border-transparent transition-colors touch-manipulation"
          >
            <p className="text-neutral-900">Issue Document</p>
            <p className="text-sm text-neutral-500 mt-1">Send documents to students</p>
          </button>
        </div>
      </div>
    </div>
  );
}