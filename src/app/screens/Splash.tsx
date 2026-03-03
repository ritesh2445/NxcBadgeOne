import { useEffect } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen w-full bg-white flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-3xl tracking-tight text-neutral-900">
          NXC Badge ONE
        </h1>
      </motion.div>
    </div>
  );
}
