import type { ButtonHTMLAttributes, ReactNode } from "react";

type CodexButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "vermilion" | "gold" | "ink";
  children: ReactNode;
};

export function CodexButton({
  variant = "vermilion",
  className = "",
  children,
  ...props
}: CodexButtonProps) {
  const palette = {
    vermilion: "codex-btn-primary",
    gold: "codex-btn-secondary",
    ink: "codex-btn-secondary",
  };

  return (
    <button className={`codex-btn ${palette[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
