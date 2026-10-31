const fanpages = [
  {
    id: "FP-001",
    name: "Glow Studio",
    category: "Beauty & Lifestyle",
    status: "Connected",
    avatar: "GS",
    default: true,
    permissions: ["Create content", "Publish reels", "Manage schedule"],
  },
  {
    id: "FP-002",
    name: "Smart Try",
    category: "Tech & Gadgets",
    status: "Connected",
    avatar: "ST",
    default: false,
    permissions: ["Create content", "Publish reels"],
  },
  {
    id: "FP-003",
    name: "Beauty Hub",
    category: "Beauty & Commerce",
    status: "Pending OAuth",
    avatar: "BH",
    default: false,
    permissions: ["Needs token refresh"],
  },
];

export default function FanpagesPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-white/10 bg-[#101827]/80 p-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-violet-300">Facebook Manager</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Quản lý Fanpage</h2>
          </div>
          <button className="rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white">
            Kết nối Fanpage
          </button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {fanpages.map((page) => (
          <div key={page.id} className="rounded-3xl border border-white/10 bg-[#101827]/80 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 font-bold text-white">
                  {page.avatar}
                </div>
                <div>
                  <h3 className="font-semibold text-white">{page.name}</h3>
                  <p className="text-xs text-slate-400">{page.category}</p>
                </div>
              </div>
              <span className={`rounded-full px-2 py-1 text-[10px] font-medium ${page.status === "Connected" ? "bg-emerald-500/15 text-emerald-300" : "bg-amber-500/15 text-amber-300"}`}>
                {page.status}
              </span>
            </div>

            <div className="mt-4 space-y-2 text-sm text-slate-300">
              {page.permissions.map((permission) => (
                <div key={permission} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-violet-400" />
                  {permission}
                </div>
              ))}
            </div>

            <div className="mt-5 flex gap-2">
              {page.default ? (
                <button className="flex-1 rounded-2xl bg-violet-500/15 px-3 py-2 text-sm font-medium text-violet-200">
                  Mặc định
                </button>
              ) : (
                <button className="flex-1 rounded-2xl bg-white/5 px-3 py-2 text-sm font-medium text-white">
                  Đặt mặc định
                </button>
              )}
              <button className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
                Cài đặt
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
