export async function GET() {
  return Response.json([
    { name: "Manager Agent", desc: "Điều phối và phân công nhiệm vụ", status: "Online" },
    { name: "TikTok Channel Agent", desc: "Xác minh nguồn video và lọc nội dung", status: "Processing" },
    { name: "Video Editing Agent", desc: "Render, subtitle, logo và export", status: "Ready" },
    { name: "Content Agent", desc: "Caption, CTA, hashtag và copywriting", status: "Online" },
    { name: "Product Agent", desc: "Ghép sản phẩm và affiliate links", status: "Sync" },
    { name: "Publishing Agent", desc: "Chọn Fanpage và lên lịch đăng", status: "Awaiting approval" },
    { name: "Analytics Agent", desc: "Theo dõi hiệu suất và đề xuất thời gian", status: "Online" },
  ]);
}
