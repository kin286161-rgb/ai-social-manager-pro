import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Social Manager Pro",
  description: "AI Social Media Manager Pro",
};

const navItems = [
  { href: "/", label: "Trang chủ" },
  { href: "/fanpages", label: "Fanpage" },
  { href: "/tiktok", label: "TikTok" },
  { href: "/schedule", label: "Lịch đăng" },
  { href: "/agents", label: "AI Agent" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className="bg-[#070b14] text-slate-100 antialiased">
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(124,108,255,0.16),_transparent_28%),linear-gradient(180deg,#070b14,#0f172a_55%,#090d17)]">
          <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0f1b]/80 backdrop-blur-xl">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 text-lg font-bold shadow-glow">
                  A
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">PRO</p>
                  <h1 className="text-sm font-semibold text-white">AI Social Manager</h1>
                </div>
              </div>
              <div className="hidden items-center gap-6 md:flex">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-white">
                    {item.label}
                  </Link>
                ))}
              </div>
              <button className="rounded-full border border-violet-400/40 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-200 transition hover:bg-violet-500/20">
                + Kết nối
              </button>
            </div>
          </header>

          <main className="mx-auto max-w-6xl px-4 pb-24 pt-6 sm:px-6">{children}</main>

          <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#0b101a]/95 px-3 py-2 backdrop-blur-xl md:hidden">
            <div className="mx-auto grid max-w-md grid-cols-5 gap-2 text-[11px]">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex flex-col items-center justify-center rounded-xl px-2 py-2 ${
                    index === 0 ? "bg-violet-500/15 text-violet-100" : "text-slate-400"
                  }`}
                >
                  <span className="mb-1 text-base">{["⌂", "◉", "▶", "◫", "◎"][index]}</span>
                  {item.label.split(" ")[0]}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </body>
    </html>
  );
}
