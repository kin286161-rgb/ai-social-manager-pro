const agentCards = [
  { name: "Manager Agent", desc: "Điều phối và phân công nhiệm vụ", status: "Online" },
  { name: "TikTok Channel Agent", desc: "Xác minh nguồn video và lọc nội dung", status: "Processing" },
  { name: "Video Editing Agent", desc: "Render, subtitle, logo và export", status: "Ready" },
  { name: "Content Agent", desc: "Caption, CTA, hashtag và copywriting", status: "Online" },
  { name: "Product Agent", desc: "Ghép sản phẩm và affiliate links", status: "Sync" },
  { name: "Publishing Agent", desc: "Chọn Fanpage và lên lịch đăng", status: "Awaiting approval" },
  { name: "Analytics Agent", desc: "Theo dõi hiệu suất và đề xuất thời gian", status: "Online" },
];

export default function AgentsPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-white/10 bg-[#101827]/80 p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-violet-300">AI Agent Manager</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Hệ thống multi-agent</h2>
          </div>
          <button className="rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white">
            Trigger workflow
          </button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {agentCards.map((agent) => (
          <div key={agent.name} className="rounded-3xl border border-white/10 bg-[#101827]/80 p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-white">{agent.name}</h3>
              <span className={`rounded-full px-2 py-1 text-[10px] font-medium ${agent.status === "Online" ? "bg-emerald-500/15 text-emerald-300" : agent.status === "Processing" ? "bg-violet-500/15 text-violet-200" : "bg-amber-500/15 text-amber-300"}`}>
                {agent.status}
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-300">{agent.desc}</p>
            <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-slate-800">
              <div className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" style={{ width: agent.status === "Processing" ? "72%" : "88%" }} />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
