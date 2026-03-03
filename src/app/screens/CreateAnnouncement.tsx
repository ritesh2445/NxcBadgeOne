import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ChevronLeft } from "lucide-react";

export default function CreateAnnouncement() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [expiry, setExpiry] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/room/${id}/announcements`);
  };

  return (
    <div className="h-screen w-full bg-white flex flex-col">
      {/* Header */}
      <div className="px-6 py-4 border-b border-[var(--electric-blue-light)] flex items-center gap-3">
        <button
          onClick={() => navigate(`/room/${id}/announcements`)}
          className="p-1 hover:bg-[var(--electric-blue-light)] rounded-lg transition-colors"
          aria-label="Go back"
        >
          <ChevronLeft className="w-6 h-6 text-[var(--electric-blue)]" />
        </button>
        <h1 className="text-lg text-neutral-900">New Announcement</h1>
      </div>

      {/* Form */}
      <div className="flex-1 overflow-y-auto">
        <form onSubmit={handleSubmit} className="px-6 py-6 space-y-6">
          <div>
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
          </div>

          <div>
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
          </div>

          <div>
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
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-[var(--electric-blue)] text-white rounded-xl hover:bg-[var(--electric-blue-dark)] transition-colors active:scale-[0.98] touch-manipulation"
          >
            Create Announcement
          </button>
        </form>
      </div>
    </div>
  );
}