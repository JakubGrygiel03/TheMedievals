import type { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl">
      <body className="min-h-full bg-[#f3e5ab] text-[#2c1810] antialiased">
        {children}
      </body>
    </html>
  );
}
