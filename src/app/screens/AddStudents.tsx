import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ChevronLeft, Plus, Search, X } from "lucide-react";
import { motion } from "motion/react";

type Student = {
  id: string;
  name: string;
  rollNumber: string;
  email: string;
};

const allStudents: Student[] = [
  { id: "1", name: "Sarah Johnson", rollNumber: "CS2021001", email: "sarah.j@example.com" },
  { id: "2", name: "Michael Chen", rollNumber: "CS2021002", email: "michael.c@example.com" },
  { id: "3", name: "Emily Rodriguez", rollNumber: "CS2021003", email: "emily.r@example.com" },
  { id: "4", name: "James Wilson", rollNumber: "CS2021004", email: "james.w@example.com" },
  { id: "5", name: "Olivia Brown", rollNumber: "CS2021005", email: "olivia.b@example.com" },
  { id: "6", name: "David Martinez", rollNumber: "CS2021006", email: "david.m@example.com" },
  { id: "7", name: "Sophia Taylor", rollNumber: "CS2021007", email: "sophia.t@example.com" },
  { id: "8", name: "Daniel Anderson", rollNumber: "CS2021008", email: "daniel.a@example.com" },
];

export default function AddStudents() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);
  const [enrolledStudents] = useState<string[]>(["1", "2", "3"]); // Mock enrolled students

  const filteredStudents = allStudents.filter(
    (student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.rollNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleStudent = (studentId: string) => {
    setSelectedStudents((prev) =>
      prev.includes(studentId)
        ? prev.filter((id) => id !== studentId)
        : [...prev, studentId]
    );
  };

  const handleAddStudents = () => {
    alert(`Added ${selectedStudents.length} student(s) to the classroom`);
    navigate(`/room/${id}`);
  };

  const isEnrolled = (studentId: string) => enrolledStudents.includes(studentId);

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
          <h1 className="text-lg text-neutral-900">Add Students</h1>
        </div>
        {selectedStudents.length > 0 && (
          <motion.span
            className="text-sm text-[var(--electric-blue)]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            {selectedStudents.length} selected
          </motion.span>
        )}
      </motion.div>

      {/* Search Bar */}
      <motion.div
        className="px-6 py-4 border-b border-neutral-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name, roll number, or email"
            className="w-full pl-10 pr-10 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[var(--electric-blue)] transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-neutral-200 rounded-full transition-colors"
            >
              <X className="w-4 h-4 text-neutral-500" />
            </button>
          )}
        </div>
      </motion.div>

      {/* Student List */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        <div className="space-y-2">
          {filteredStudents.map((student, index) => {
            const enrolled = isEnrolled(student.id);
            const selected = selectedStudents.includes(student.id);

            return (
              <motion.label
                key={student.id}
                className={`flex items-center p-4 rounded-xl cursor-pointer border transition-colors ${
                  enrolled
                    ? "bg-neutral-100 border-neutral-300 cursor-not-allowed"
                    : selected
                    ? "bg-[var(--electric-blue-light)] border-[var(--electric-blue)]"
                    : "bg-neutral-50 border-transparent hover:bg-neutral-100"
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.05 * index + 0.2 }}
                whileHover={{ scale: enrolled ? 1 : 1.01 }}
                whileTap={{ scale: enrolled ? 1 : 0.99 }}
              >
                <input
                  type="checkbox"
                  checked={selected}
                  disabled={enrolled}
                  onChange={() => !enrolled && toggleStudent(student.id)}
                  className="sr-only"
                />
                <div
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                    selected
                      ? "border-[var(--electric-blue)] bg-[var(--electric-blue)]"
                      : enrolled
                      ? "border-neutral-400 bg-neutral-200"
                      : "border-neutral-300"
                  }`}
                >
                  {(selected || enrolled) && (
                    <motion.svg
                      className="w-3 h-3 text-white"
                      viewBox="0 0 12 12"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    >
                      <path
                        fill="currentColor"
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
                  <div className="flex items-center gap-2">
                    <p className={`${enrolled ? "text-neutral-500" : "text-neutral-900"}`}>
                      {student.name}
                    </p>
                    {enrolled && (
                      <span className="text-xs px-2 py-0.5 bg-neutral-200 text-neutral-600 rounded-full">
                        Enrolled
                      </span>
                    )}
                  </div>
                  <p className={`text-sm ${enrolled ? "text-neutral-400" : "text-neutral-500"}`}>
                    {student.rollNumber} • {student.email}
                  </p>
                </div>
              </motion.label>
            );
          })}
        </div>

        {filteredStudents.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-neutral-500">No students found</p>
          </motion.div>
        )}
      </div>

      {/* Add Button */}
      {selectedStudents.length > 0 && (
        <motion.div
          className="px-6 py-4 border-t border-neutral-200 bg-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            onClick={handleAddStudents}
            className="w-full py-4 bg-[var(--electric-blue)] text-white rounded-xl hover:bg-[var(--electric-blue-dark)] transition-colors flex items-center justify-center gap-2 touch-manipulation"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Plus className="w-5 h-5" />
            <span>Add {selectedStudents.length} Student{selectedStudents.length > 1 ? "s" : ""}</span>
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}
