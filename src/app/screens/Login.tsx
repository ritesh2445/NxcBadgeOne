import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="h-screen w-full bg-white flex items-center justify-center px-6">
      <motion.div
        className="w-full max-w-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl tracking-tight text-neutral-900 mb-2">
            NXC Badge ONE
          </h2>
          <p className="text-neutral-500">Admin Portal</p>
        </motion.div>

        <form onSubmit={handleLogin} className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <label
              htmlFor="email"
              className="block text-sm text-neutral-600 mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[var(--electric-blue)] transition-colors"
              placeholder="admin@example.com"
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <label
              htmlFor="password"
              className="block text-sm text-neutral-600 mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[var(--electric-blue)] transition-colors"
              placeholder="••••••••"
              required
            />
          </motion.div>

          <motion.button
            type="submit"
            className="w-full mt-8 py-3.5 bg-[var(--electric-blue)] text-white rounded-xl hover:bg-[var(--electric-blue-dark)] transition-colors active:scale-[0.98] touch-manipulation"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileTap={{ scale: 0.98 }}
          >
            Sign In
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}