"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08, margin: "0px 0px 28% 0px" }}
      transition={{ duration: 0.5, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerList({
  children,
  className,
  stagger = 0.11,
  delayChildren = 0.06,
  amount = 0.2,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  amount?: number;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <ul className={className}>{children}</ul>;
  }

  return (
    <motion.ul
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: stagger, delayChildren },
        },
      }}
    >
      {children}
    </motion.ul>
  );
}

export function StaggerItem({
  children,
  className,
  tone = "card",
}: {
  children: ReactNode;
  className?: string;
  tone?: "card" | "frame";
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <li className={className}>{children}</li>;
  }

  // Frame: opacity on the list item so CSS hover transform on the figure still works.
  const variants =
    tone === "frame"
      ? {
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { duration: 0.55, ease },
          },
        }
      : {
          hidden: { opacity: 0, y: 14, scale: 0.97 },
          show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.55, ease },
          },
        };

  return (
    <motion.li className={className} variants={variants}>
      {tone === "frame" ? (
        <motion.div
          className="gallery-frame-media h-full w-full"
          variants={{
            hidden: { y: 22, scale: 1.04 },
            show: {
              y: 0,
              scale: 1,
              transition: { duration: 0.85, ease },
            },
          }}
        >
          {children}
        </motion.div>
      ) : (
        children
      )}
    </motion.li>
  );
}

export function InkRule() {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className="ornament-rule" aria-hidden="true" />;
  }

  return (
    <motion.div
      className="ornament-rule"
      aria-hidden="true"
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.9 }}
      transition={{ duration: 0.7, delay: 0.12, ease }}
      style={{ originX: 0 }}
    />
  );
}
