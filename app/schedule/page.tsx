const schedules = [
  { date: "Today", time: "14:30", page: "Glow Studio", status: "Queued" },
  { date: "Tue", time: "19:00", page: "Beauty Hub", status: "Scheduled" },
  { date: "Wed", time: "10:30", page: "Smart Try", status: "Pending review" },
  { date: "Sat", time: "12:15", page: "Glow Studio", status: "Draft" },
];

export default function SchedulePage() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-white/10 bg-[#101827]/80 p-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-violet-300">Auto Posting</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Lịch đăng Facebook</h2>
          </div>
          <button className="rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white">
            + Tạo lịch
          </button>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-white/10 bg-[#101827]/80 p-4">
          <div className="mb-4 flex justify-between text-sm text-slate-300">
            <span>Ngày</span>
            <span>Giờ</span>
            <span>Fanpage</span>
            <span>Trạng thái</span>
          </div>
          <div className="space-y-3">
            {schedules.map((item) => (
              <div key={`${item.date}-${item.time}`} className="grid grid-cols-4 items-center gap-3 rounded-2xl bg-white/5 p-3 text-sm text-slate-200">
                <span>{item.date}</span>
                <span>{item.time}</span>
                <span>{item.page}</span>
                <span className={`rounded-full px-2 py-1 text-center text-[10px] ${item.status === "Queued" ? "bg-violet-500/15 text-violet-200" : item.status === "Scheduled" ? "bg-emerald-500/15 text-emerald-300" : "bg-amber-500/15 text-amber-300"}`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#101827]/80 p-4">
          <p className="text-sm text-slate-400">Tự động hóa</p>
          <div className="mt-4 space-y-4">
            <label className="flex items-center justify-between rounded-2xl bg-white/5 p-3 text-sm text-slate-200">
              Số video mỗi ngày
              <span>5</span>
            </label>
            <label className="flex items-center justify-between rounded-2xl bg-white/5 p-3 text-sm text-slate-200">
              Khung giờ đăng
              <span>12:00 - 20:00</span>
            </label>
            <label className="flex items-center justify-between rounded-2xl bg-white/5 p-3 text-sm text-slate-200">
              Đăng định kỳ
              <span>Đã bật</span>
            </label>
            <label className="flex items-center justify-between rounded-2xl bg-white/5 p-3 text-sm text-slate-200">
              Chế độ duyệt
              <span>Cần duyệt</span>
            </label>
          </div>
        </div>
      </section>
    </div>
  );
}
