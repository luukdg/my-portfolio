"use client";
import { motion } from "framer-motion";

const CORNER_SIZE = 20;
const CORNER_POS = 30;
const CORNER_DRIFT = -29; // animation travel distance

export function CrosshairCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="relative cursor-pointer overflow-hidden"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {children}

      {/* Dark overlay */}
      <motion.div
        className="absolute inset-0 bg-black/50 pointer-events-none"
        variants={{
          rest: { opacity: 0 },
          hover: { opacity: 1 },
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Top Left */}
      <motion.div
        className="absolute border-t-2 border-l-2 border-white pointer-events-none rounded-tl-md"
        style={{ width: CORNER_SIZE, height: CORNER_SIZE }}
        variants={{
          rest: {
            top: CORNER_POS + CORNER_DRIFT,
            left: CORNER_POS + CORNER_DRIFT,
            opacity: 0,
          },
          hover: { top: CORNER_POS, left: CORNER_POS, opacity: 1 },
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />

      {/* Top Right */}
      <motion.div
        className="absolute border-t-2 border-r-2  border-white pointer-events-none rounded-tr-md"
        style={{ width: CORNER_SIZE, height: CORNER_SIZE }}
        variants={{
          rest: {
            top: CORNER_POS + CORNER_DRIFT,
            right: CORNER_POS + CORNER_DRIFT,
            opacity: 0,
          },
          hover: { top: CORNER_POS, right: CORNER_POS, opacity: 1 },
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />

      {/* Bottom Left */}
      <motion.div
        className="absolute border-b-2 border-l-2 border-white pointer-events-none rounded-bl-md"
        style={{ width: CORNER_SIZE, height: CORNER_SIZE }}
        variants={{
          rest: {
            bottom: CORNER_POS + CORNER_DRIFT,
            left: CORNER_POS + CORNER_DRIFT,
            opacity: 0,
          },
          hover: { bottom: CORNER_POS, left: CORNER_POS, opacity: 1 },
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />

      {/* Bottom Right */}
      <motion.div
        className="absolute border-b-2 border-r-2 border-white pointer-events-none rounded-br-md"
        style={{ width: CORNER_SIZE, height: CORNER_SIZE }}
        variants={{
          rest: {
            bottom: CORNER_POS + CORNER_DRIFT,
            right: CORNER_POS + CORNER_DRIFT,
            opacity: 0,
          },
          hover: { bottom: CORNER_POS, right: CORNER_POS, opacity: 1 },
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />

      {/* Read More */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        variants={{
          rest: { opacity: 0, y: 6 },
          hover: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.25, delay: 0.08 }}
      >
        <span className="text-white text-xl font-black tracking-wide uppercase">
          Read More
        </span>
      </motion.div>
    </motion.div>
  );
}
