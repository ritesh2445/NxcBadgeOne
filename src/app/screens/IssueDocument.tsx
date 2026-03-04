import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, Upload, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function IssueDocument() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedStudent, setSelectedStudent] = useState("");
  const [fileName, setFileName] = useState("");

  const students = [
    { id: "1", name: "Sarah Johnson", rollNumber: "CS2021001" },
    { id: "2", name: "Michael Chen", rollNumber: "CS2021002" },
    { id: "3", name: "Emily Rodriguez", rollNumber: "CS2021003" },
  ];

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleSubmit = () => {
    alert("Document issued successfully!");
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
              className="space-y-4"
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-sm text-neutral-500 mb-4">Select Student</h2>
              <div className="space-y-2">
                {students.map((student, index) => (
                  <motion.label
                    key={student.id}
                    className="flex items-start p-4 bg-neutral-50 rounded-xl cursor-pointer hover:bg-[var(--electric-blue-light)] hover:border-[var(--electric-blue)] border border-transparent transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <input
                      type="radio"
                      name="student"
                      value={student.id}
                      checked={selectedStudent === student.id}
                      onChange={(e) => setSelectedStudent(e.target.value)}
                      className="w-5 h-5 mt-0.5 text-[var(--electric-blue)] border-neutral-300 focus:ring-[var(--electric-blue)]"
                    />
                    <div className="ml-3">
                      <p className="text-neutral-900">{student.name}</p>
                      <p className="text-sm text-neutral-500">
                        {student.rollNumber}
                      </p>
                    </div>
                  </motion.label>
                ))}
              </div>
              <motion.button
                onClick={() => setCurrentStep(2)}
                disabled={!selectedStudent}
                className="w-full py-3.5 bg-[var(--electric-blue)] text-white rounded-xl hover:bg-[var(--electric-blue-dark)] transition-colors active:scale-[0.98] touch-manipulation disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: selectedStudent ? 1.02 : 1 }}
                whileTap={{ scale: selectedStudent ? 0.98 : 1 }}
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
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-neutral-500">Student</p>
                    <p className="text-neutral-900">
                      {students.find((s) => s.id === selectedStudent)?.name}
                    </p>
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