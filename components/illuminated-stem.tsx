"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const spine =
  "M6 34C38 34 52 16 84 22C118 28 128 46 164 34C200 22 214 12 250 20C276 26 310 14 348 18C390 23 418 8 458 16C500 24 528 38 572 26C616 14 656 10 708 14";
const tendrilA = "M84 22C76 8 92 2 106 12";
const tendrilB = "M164 34C174 48 158 56 146 48";
const tendrilC = "M250 20C242 6 258 0 274 10C280 16 270 20 264 14";
const tendrilD = "M458 16C450 2 466 -4 480 8";
const tendrilE = "M572 26C584 42 568 50 556 42";
const leafA = "M100 14C86-4 118-6 120 12C120 20 108 22 100 14Z";
const leafB = "M148 46C132 62 164 66 166 48C166 40 156 40 148 46Z";
const leafC = "M268 12C256-6 286-4 284 14C282 22 274 20 268 12Z";
const leafD = "M474 12C460-6 492-8 494 10C494 18 482 20 474 12Z";
const leafE = "M558 44C542 60 574 64 576 46C576 38 566 38 558 44Z";
const bud = "M708 14C714 6 726 10 720 18C728 18 726 30 714 24C708 30 702 18 708 14Z";

const draw = {
  hidden: { pathLength: 0, opacity: 0.25 },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.55, ease },
  },
};

const sprout = {
  hidden: { opacity: 0, scale: 0.35 },
  show: {
    opacity: 0.86,
    scale: 1,
    transition: { duration: 0.45, ease },
  },
};

export function IlluminatedStem() {
  const reduce = useReducedMotion();

  return (
    <motion.svg
      className="illuminated-stem"
      viewBox="0 0 732 58"
      preserveAspectRatio="xMinYMid slice"
      fill="none"
      aria-hidden="true"
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        show: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
      }}
    >
      <motion.path d={spine} className="illuminated-stem-line" variants={draw} />
      <motion.path d={tendrilA} className="illuminated-stem-line" variants={draw} />
      <motion.path d={tendrilB} className="illuminated-stem-line" variants={draw} />
      <motion.path d={tendrilC} className="illuminated-stem-line" variants={draw} />
      <motion.path d={tendrilD} className="illuminated-stem-line" variants={draw} />
      <motion.path d={tendrilE} className="illuminated-stem-line" variants={draw} />
      <motion.path d={leafA} className="illuminated-stem-leaf" variants={sprout} />
      <motion.path d={leafB} className="illuminated-stem-leaf" variants={sprout} />
      <motion.path d={leafC} className="illuminated-stem-leaf" variants={sprout} />
      <motion.path d={leafD} className="illuminated-stem-leaf" variants={sprout} />
      <motion.path d={leafE} className="illuminated-stem-leaf" variants={sprout} />
      <g className="illuminated-stem-bloom">
        <motion.circle cx="128" cy="18" r="3.1" variants={sprout} />
        <motion.circle cx="122.8" cy="26.2" r="3.1" variants={sprout} />
        <motion.circle cx="133.2" cy="26.2" r="3.1" variants={sprout} />
        <motion.circle cx="128" cy="24" r="1.6" variants={sprout} />
      </g>
      <g className="illuminated-stem-bloom">
        <motion.circle cx="500" cy="12" r="3.1" variants={sprout} />
        <motion.circle cx="494.8" cy="20.2" r="3.1" variants={sprout} />
        <motion.circle cx="505.2" cy="20.2" r="3.1" variants={sprout} />
        <motion.circle cx="500" cy="18" r="1.6" variants={sprout} />
      </g>
      <motion.path d={bud} className="illuminated-stem-leaf" variants={sprout} />
    </motion.svg>
  );
}
