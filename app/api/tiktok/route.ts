export async function GET() {
  return Response.json({
    channel: {
      id: "tt_123456",
      name: "BeautyHub",
      handle: "@beautyhub",
      avatar: "BH",
      status: "Verified",
      link: "https://www.tiktok.com/@beautyhub",
    },
    videos: [
      { title: "Product try-on review", date: "2026-10-30", duration: "00:31", source: "Verified", status: "Valid" },
      { title: "Quick unboxing", date: "2026-10-29", duration: "00:41", source: "Verified", status: "Valid" },
      { title: "Lifestyle reel", date: "2026-10-28", duration: "00:23", source: "Unverified", status: "Rejected" },
      { title: "Compilation repost", date: "2026-10-27", duration: "00:19", source: "Duplicate", status: "Rejected" },
    ],
    warnings: [
      "Video không đủ điều kiện vì ID creator không khớp.",
      "Một video bị lọt vì là repost/chia sẻ lại không phải nội dung gốc.",
    ],
  });
}
