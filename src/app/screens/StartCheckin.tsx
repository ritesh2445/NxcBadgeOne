import { useNavigate, useParams } from "react-router";
import { ChevronLeft } from "lucide-react";

export default function StartCheckin() {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleStart = () => {
    navigate(`/room/${id}/active-checkin`);
  };

  return (
    <div className="h-screen w-full bg-neutral-50 flex flex-col">
      {/* Header */}
      <div className="px-6 py-4 bg-white border-b border-[var(--electric-blue-light)] flex items-center gap-3">
        <button
          onClick={() => navigate(`/room/${id}`)}
          className="p-1 hover:bg-[var(--electric-blue-light)] rounded-lg transition-colors"
          aria-label="Go back"
        >
          <ChevronLeft className="w-6 h-6 text-[var(--electric-blue)]" />
        </button>
        <h1 className="text-lg text-neutral-900">Classroom 101</h1>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="text-center mb-12">
          <p className="text-neutral-500 mb-1">Ready to begin</p>
          <h2 className="text-xl text-neutral-900">Check-in Session</h2>
        </div>

        <button
          onClick={handleStart}
          className="w-full max-w-sm py-4 bg-[var(--electric-blue)] text-white rounded-xl hover:bg-[var(--electric-blue-dark)] transition-colors active:scale-[0.98] touch-manipulation"
        >
          Start Check-in
        </button>
      </div>
    </div>
  );
}