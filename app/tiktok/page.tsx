const importerSteps = [
  "Nhập link TikTok",
  "Xác minh ID kênh",
  "Quét video",
  "Lọc video hợp lệ",
  "Lưu vào kho video",
];

const sampleVideos = [
  { title: "Product try-on review", date: "2026-10-30", duration: "00:31", source: "Verified", status: "Valid" },
  { title: "Quick unboxing", date: "2026-10-29", duration: "00:41", source: "Verified", status: "Valid" },
  { title: "Lifestyle reel", date: "2026-10-28", duration: "00:23", source: "Unverified", status: "Rejected" },
  { title: "Compilation repost", date: "2026-10-27", duration: "00:19", source: "Duplicate", status: "Rejected" },
];

export default function TiktokPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-white/10 bg-[#101827]/80 p-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-violet-300">TikTok Channel Importer</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Nhập và xác minh nguồn video</h2>
          </div>
          <button className="rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white">
            Bắt đầu tự động
          </button>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-3xl border border-white/10 bg-[#101827]/80 p-4">
          <div className="space-y-4">
            <label className="block">
              <span className="mb-2 block text-sm text-slate-300">Link kênh TikTok</span>
              <input
                type="text"
                value="https://www.tiktok.com/@beautyhub"
                className="w-full rounded-2xl border border-white/10 bg-[#0b1220] px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500"
              />
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button className="rounded-2xl border border-violet-300/30 bg-violet-500/10 px-3 py-3 text-sm font-medium text-violet-100">
                Kiểm tra kênh
              </button>
              <button className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-sm font-medium text-white">
                Quét video
              </button>
              <button className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-sm font-medium text-white">
                Cập nhật danh sách
              </button>
              <button className="rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-500 px-3 py-3 text-sm font-semibold text-white">
                Xử lý video
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#101827]/80 p-4">
          <p className="text-sm text-slate-400">Thông tin kênh</p>
          <div className="mt-4 flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 font-bold text-lg text-white">
              BH
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">BeautyHub</h3>
              <p className="text-sm text-slate-400">@beautyhub • 18.4K followers</p>
            </div>
          </div>
          <div className="mt-5 space-y-3 text-sm text-slate-300">
            {importerSteps.map((step, index) => (
              <div key={step} className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs text-violet-200">
                  {index + 1}
                </span>
                {step}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-[#101827]/80 p-4">
        <div className="mb-4 flex flex-wrap gap-2">
          {['Mới nhất', 'Cũ nhất', 'Chưa xử lý', 'Đã xử lý', 'Hợp lệ', 'Bị loại'].map((filter) => (
            <button key={filter} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200">
              {filter}
            </button>
          ))}
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10">
          <div className="grid grid-cols-[1.5fr_1fr_0.7fr_0.7fr] gap-3 bg-white/5 p-3 text-xs uppercase tracking-[0.14em] text-slate-400">
            <span>Video</span>
            <span>Ngày</span>
            <span>Thời lượng</span>
            <span>Trạng thái</span>
          </div>
          {sampleVideos.map((video) => (
            <div key={video.title} className="grid grid-cols-[1.5fr_1fr_0.7fr_0.7fr] items-center gap-3 border-t border-white/10 bg-[#0b1220] p-3 text-sm text-slate-200">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/80 to-cyan-400/80 text-[10px] font-semibold text-white">
                  PREVIEW
                </span>
                <span>{video.title}</span>
              </div>
              <span>{video.date}</span>
              <span>{video.duration}</span>
              <span className={`rounded-full px-2 py-1 text-center text-[10px] font-medium ${video.status === "Valid" ? "bg-emerald-500/15 text-emerald-300" : "bg-rose-500/15 text-rose-300"}`}>
                {video.status}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
