import Link from "next/link";

const cards = [
  { label: "Tổng số Fanpage", value: "18", delta: "+3" },
  { label: "Tổng số video", value: "214", delta: "+26" },
  { label: "Video đang xử lý", value: "12", delta: "-4" },
  { label: "Video chờ đăng", value: "31", delta: "+7" },
  { label: "Bài đăng thành công", value: "146", delta: "+19" },
  { label: "Bài đăng thất bại", value: "8", delta: "-2" },
  { label: "Tổng lượt xem", value: "1.29M", delta: "+18%" },
  { label: "Tổng tương tác", value: "96.4K", delta: "+13%" },
  { label: "Lượt click link", value: "24.2K", delta: "+21%" },
  { label: "Doanh thu affiliate", value: "$4,280", delta: "+8%" },
];

const performanceData = [
  { day: "Mon", value: 54 },
  { day: "Tue", value: 68 },
  { day: "Wed", value: 72 },
  { day: "Thu", value: 84 },
  { day: "Fri", value: 96 },
  { day: "Sat", value: 88 },
  { day: "Sun", value: 110 },
];

const pagePerformance = [
  { name: "Beauty Hub", value: 72 },
  { name: "Smart Try", value: 64 },
  { name: "Glow Studio", value: 58 },
  { name: "Home Pro", value: 48 },
];

export default function HomePage() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-white/10 bg-[#101827]/80 p-5 shadow-glow">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-violet-300">Dashboard</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Tổng quan vận hành hệ thống</h2>
          </div>
          <div className="flex items-center gap-3">
            <button className="rounded-2xl border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-100">
              Tự động / cần duyệt
            </button>
            <button className="rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white">
              Bắt đầu workflow
            </button>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-3 md:grid-cols-5">
        {cards.map((item) => (
          <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs text-slate-400">{item.label}</p>
            <div className="mt-3 flex items-end justify-between gap-2">
              <h3 className="text-2xl font-bold text-white">{item.value}</h3>
              <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-[10px] font-semibold text-emerald-300">
                {item.delta}
              </span>
            </div>
          </div>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.4fr_0.8fr]">
        <div className="rounded-3xl border border-white/10 bg-[#101827]/80 p-4">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-400">Hiệu suất theo ngày</p>
              <h3 className="text-xl font-semibold text-white">Performance</h3>
            </div>
            <span className="text-xs text-violet-300">+22.4% tuần này</span>
          </div>
          <div className="flex h-52 items-end gap-3">
            {performanceData.map((bar) => (
              <div key={bar.day} className="flex flex-1 flex-col items-center gap-2">
                <div className="w-full rounded-t-2xl bg-gradient-to-t from-violet-500 via-violet-400 to-cyan-400" style={{ height: `${bar.value}%` }} />
                <span className="text-[10px] text-slate-400">{bar.day}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#101827]/80 p-4">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-400">Theo Fanpage</p>
              <h3 className="text-xl font-semibold text-white">Hiệu suất</h3>
            </div>
          </div>
          <div className="space-y-4">
            {pagePerformance.map((item) => (
              <div key={item.name}>
                <div className="mb-2 flex justify-between text-sm text-slate-300">
                  <span>{item.name}</span>
                  <span>{item.value}%</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" style={{ width: `${item.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-[#101827]/80 p-4">
          <p className="text-sm text-slate-400">Workflow hiện tại</p>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center justify-between rounded-2xl bg-white/5 p-3">
              <span>Khởi tạo TikTok importer</span>
              <span className="text-emerald-300">Hoàn tất</span>
            </li>
            <li className="flex items-center justify-between rounded-2xl bg-white/5 p-3">
              <span>Xác minh ID kênh</span>
              <span className="text-violet-300">Đang chạy</span>
            </li>
            <li className="flex items-center justify-between rounded-2xl bg-white/5 p-3">
              <span>AI video editor</span>
              <span className="text-amber-300">Chờ duyệt</span>
            </li>
          </ul>
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#101827]/80 p-4">
          <p className="text-sm text-slate-400">Facebook Reels sắp đăng</p>
          <ul className="mt-4 space-y-3">
            <li className="rounded-2xl bg-white/5 p-3">
              <div className="flex justify-between"><span>Glow Studio</span><span>14:30</span></div>
              <p className="mt-2 text-sm text-slate-300">Quick review - 6.2K views forecast</p>
            </li>
            <li className="rounded-2xl bg-white/5 p-3">
              <div className="flex justify-between"><span>Beauty Hub</span><span>19:00</span></div>
              <p className="mt-2 text-sm text-slate-300">New product unboxing - AI caption ready</p>
            </li>
          </ul>
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#101827]/80 p-4">
          <p className="text-sm text-slate-400">AI Agent status</p>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center justify-between rounded-2xl bg-white/5 p-3">
              <span>Manager Agent</span>
              <span className="text-emerald-300">Online</span>
            </li>
            <li className="flex items-center justify-between rounded-2xl bg-white/5 p-3">
              <span>Content Agent</span>
              <span className="text-emerald-300">Online</span>
            </li>
            <li className="flex items-center justify-between rounded-2xl bg-white/5 p-3">
              <span>Publishing Agent</span>
              <span className="text-amber-300">Need approval</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
