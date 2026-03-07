import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, Upload, Check, Search, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function IssueDocument() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);
  const [fileName, setFileName] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const students = [
    { id: "1", name: "Sarah Johnson", rollNumber: "CS2021001" },
    { id: "2", name: "Michael Chen", rollNumber: "CS2021002" },
    { id: "3", name: "Emily Rodriguez", rollNumber: "CS2021003" },
    { id: "4", name: "James Wilson", rollNumber: "CS2021004" },
    { id: "5", name: "Olivia Brown", rollNumber: "CS2021005" },
    { id: "6", name: "David Martinez", rollNumber: "CS2021006" },
    { id: "7", name: "Sophia Taylor", rollNumber: "CS2021007" },
    { id: "8", name: "Daniel Anderson", rollNumber: "CS2021008" },
  ];

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.rollNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleStudent = (studentId: string) => {
    setSelectedStudents((prev) =>
      prev.includes(studentId)
        ? prev.filter((id) => id !== studentId)
        : [...prev, studentId]
    );
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleSubmit = () => {
    alert(`Document issued to ${selectedStudents.length} student(s) successfully!`);
    navigate("/home");
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
          onClick={() => navigate("/home")}
          className="p-1 hover:bg-[var(--electric-blue-light)] rounded-lg transition-colors"
          aria-label="Go back"
        >
          <ChevronLeft className="w-6 h-6 text-[var(--electric-blue)]" />
        </button>
        <h1 className="text-lg text-neutral-900">Issue Document</h1>
      </motion.div>

      {/* Progress Indicator */}
      <motion.div
        className="px-6 py-4 border-b border-neutral-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <div className="flex items-center gap-2">
          <motion.div
            className={`flex-1 h-1 rounded-full ${
              currentStep >= 1 ? "bg-[var(--electric-blue)]" : "bg-neutral-200"
            }`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: currentStep >= 1 ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className={`flex-1 h-1 rounded-full ${
              currentStep >= 2 ? "bg-[var(--electric-blue)]" : "bg-neutral-200"
            }`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: currentStep >= 2 ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className={`flex-1 h-1 rounded-full ${
              currentStep >= 3 ? "bg-[var(--electric-blue)]" : "bg-neutral-200"
            }`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: currentStep >= 3 ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </motion.div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div
              className="space-y-4 h-full flex flex-col"
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-sm text-neutral-500">Select Students</h2>
                {selectedStudents.length > 0 && (
                  <motion.span
                    className="text-sm text-[var(--electric-blue)]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    {selectedStudents.length} selected
                  </motion.span>
                )}
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by name or roll number"
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

              {/* Student List */}
              <div className="flex-1 overflow-y-auto -mx-6 px-6">
                <div className="space-y-2">
                  {filteredStudents.map((student, index) => {
                    const isSelected = selectedStudents.includes(student.id);

                    return (
                      <motion.label
                        key={student.id}
                        className={`flex items-start p-4 rounded-xl cursor-pointer border transition-colors ${
                          isSelected
                            ? "bg-[var(--electric-blue-light)] border-[var(--electric-blue)]"
                            : "bg-neutral-50 border-transparent hover:bg-neutral-100"
                        }`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.05 * index }}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                      >
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => toggleStudent(student.id)}
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
                        <div className="ml-3">
                          <p className="text-neutral-900">{student.name}</p>
                          <p className="text-sm text-neutral-500">
                            {student.rollNumber}
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

              <motion.button
                onClick={() => setCurrentStep(2)}
                disabled={selectedStudents.length === 0}
                className="w-full py-3.5 bg-[var(--electric-blue)] text-white rounded-xl hover:bg-[var(--electric-blue-dark)] transition-colors active:scale-[0.98] touch-manipulation disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: selectedStudents.length > 0 ? 1.02 : 1 }}
                whileTap={{ scale: selectedStudents.length > 0 ? 0.98 : 1 }}
              >
                Continue
              </motion.button>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              className="space-y-6"
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <h2 className="text-sm text-neutral-500 mb-4">Upload Document</h2>
                <label className="block">
                  <motion.div
                    className="p-8 border-2 border-dashed border-neutral-200 rounded-xl hover:border-[var(--electric-blue)] transition-colors cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex flex-col items-center text-center">
                      <Upload className="w-10 h-10 text-[var(--electric-blue)] mb-3" />
                      <p className="text-neutral-900 mb-1">
                        {fileName || "Choose a PDF file"}
                      </p>
                      <p className="text-sm text-neutral-500">
                        Tap to browse files
                      </p>
                    </div>
                  </motion.div>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileSelect}
                    className="sr-only"
                  />
                </label>
              </div>
              <div className="flex gap-3">
                <motion.button
                  onClick={() => setCurrentStep(1)}
                  className="flex-1 py-3.5 bg-neutral-100 text-neutral-900 rounded-xl hover:bg-neutral-200 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Back
                </motion.button>
                <motion.button
                  onClick={() => setCurrentStep(3)}
                  disabled={!fileName}
                  className="flex-1 py-3.5 bg-[var(--electric-blue)] text-white rounded-xl hover:bg-[var(--electric-blue-dark)] transition-colors active:scale-[0.98] touch-manipulation disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: fileName ? 1.02 : 1 }}
                  whileTap={{ scale: fileName ? 0.98 : 1 }}
                >
                  Continue
                </motion.button>
              </div>
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              className="space-y-6"
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <h2 className="text-sm text-neutral-500 mb-4">Review & Send</h2>
                <motion.div
                  className="bg-neutral-50 rounded-xl p-4 space-y-3"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <div className="flex items-start justify-between">
                    <p className="text-sm text-neutral-500">Students</p>
                    <div className="text-right">
                      <p className="text-neutral-900 mb-1">
                        {selectedStudents.length} student{selectedStudents.length > 1 ? "s" : ""}
                      </p>
                      <div className="space-y-1">
                        {selectedStudents.slice(0, 3).map((id) => {
                          const student = students.find((s) => s.id === id);
                          return (
                            <p key={id} className="text-sm text-neutral-500">
                              {student?.name}
                            </p>
                          );
                        })}
                        {selectedStudents.length > 3 && (
                          <p className="text-sm text-neutral-400">
                            +{selectedStudents.length - 3} more
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="h-px bg-neutral-200" />
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-neutral-500">Document</p>
                    <p className="text-neutral-900 truncate max-w-[200px]">
                      {fileName}
                    </p>
                  </div>
                </motion.div>
              </div>
              <div className="flex gap-3">
                <motion.button
                  onClick={() => setCurrentStep(2)}
                  className="flex-1 py-3.5 bg-neutral-100 text-neutral-900 rounded-xl hover:bg-neutral-200 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Back
                </motion.button>
                <motion.button
                  onClick={handleSubmit}
                  className="flex-1 py-3.5 bg-[var(--electric-blue)] text-white rounded-xl hover:bg-[var(--electric-blue-dark)] transition-colors active:scale-[0.98] touch-manipulation flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Check className="w-5 h-5" />
                  <span>Issue Document</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}