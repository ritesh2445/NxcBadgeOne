import { useNavigate, useParams } from "react-router";
import { ChevronLeft, Smartphone, Nfc } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

export default function StartCheckin() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [scanMethod, setScanMethod] = useState<"qr" | "nfc">("nfc");

  const handleStart = () => {
    navigate(`/room/${id}/active-checkin`);
  };

  return (
    <div className="h-screen w-full bg-neutral-50 flex flex-col">
      {/* Header */}
      <motion.div
        className="px-6 py-4 bg-white border-b border-[var(--electric-blue-light)] flex items-center gap-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <button
          onClick={() => navigate(`/room/${id}`)}
          className="p-1 hover:bg-[var(--electric-blue-light)] rounded-lg transition-colors"
          aria-label="Go back"
        >
          <ChevronLeft className="w-6 h-6 text-[var(--electric-blue)]" />
        </button>
        <h1 className="text-lg text-neutral-900">Classroom 101</h1>
      </motion.div>

      {/* Content */}
      <div className="flex-1 flex flex-col px-6 py-6">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-neutral-500 mb-1">Ready to begin</p>
          <h2 className="text-xl text-neutral-900">Check-in Session</h2>
        </motion.div>

        {/* Scan Method Selection */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-sm text-neutral-500 mb-4">Select Scan Method</h3>
          <div className="space-y-3">
            <motion.label
              className={`flex items-center p-4 bg-white rounded-xl cursor-pointer border transition-colors ${
                scanMethod === "nfc"
                  ? "border-[var(--electric-blue)] bg-[var(--electric-blue-light)]"
                  : "border-neutral-200 hover:bg-neutral-50"
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <input
                type="radio"
                name="scanMethod"
                value="nfc"
                checked={scanMethod === "nfc"}
                onChange={(e) => setScanMethod(e.target.value as "nfc")}
                className="sr-only"
              />
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                  scanMethod === "nfc"
                    ? "border-[var(--electric-blue)]"
                    : "border-neutral-300"
                }`}
              >
                {scanMethod === "nfc" && (
                  <motion.div
                    className="w-3 h-3 rounded-full bg-[var(--electric-blue)]"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </div>
              <div className="ml-3 flex-1 flex items-center gap-3">
                <Nfc className="w-5 h-5 text-[var(--electric-blue)]" />
                <div>
                  <p className="text-neutral-900">NFC Scanning</p>
                  <p className="text-sm text-neutral-500">Tap badge to check in</p>
                </div>
              </div>
            </motion.label>

            <motion.label
              className={`flex items-center p-4 bg-white rounded-xl cursor-pointer border transition-colors ${
                scanMethod === "qr"
                  ? "border-[var(--electric-blue)] bg-[var(--electric-blue-light)]"
                  : "border-neutral-200 hover:bg-neutral-50"
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <input
                type="radio"
                name="scanMethod"
                value="qr"
                checked={scanMethod === "qr"}
                onChange={(e) => setScanMethod(e.target.value as "qr")}
                className="sr-only"
              />
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                  scanMethod === "qr"
                    ? "border-[var(--electric-blue)]"
                    : "border-neutral-300"
                }`}
              >
                {scanMethod === "qr" && (
                  <motion.div
                    className="w-3 h-3 rounded-full bg-[var(--electric-blue)]"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </div>
              <div className="ml-3 flex-1 flex items-center gap-3">
                <Smartphone className="w-5 h-5 text-[var(--electric-blue)]" />
                <div>
                  <p className="text-neutral-900">QR Code Scanning</p>
                  <p className="text-sm text-neutral-500">Scan QR code to check in</p>
                </div>
              </div>
            </motion.label>
          </div>
        </motion.div>

        {/* Start Button */}
        <motion.div
          className="mt-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.button
            onClick={handleStart}
            className="w-full py-4 bg-[var(--electric-blue)] text-white rounded-xl hover:bg-[var(--electric-blue-dark)] transition-colors active:scale-[0.98] touch-manipulation"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Start Check-in
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}