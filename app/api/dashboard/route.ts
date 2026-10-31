export async function GET() {
  return Response.json({
    summary: {
      totalPages: 18,
      totalVideos: 214,
      processing: 12,
      pending: 31,
      success: 146,
      failed: 8,
      totalViews: "1.29M",
      totalInteractions: "96.4K",
      clicks: "24.2K",
      revenue: "$4,280",
    },
    trends: [
      { day: "Mon", value: 54 },
      { day: "Tue", value: 68 },
      { day: "Wed", value: 72 },
      { day: "Thu", value: 84 },
      { day: "Fri", value: 96 },
      { day: "Sat", value: 88 },
      { day: "Sun", value: 110 },
    ],
    fanpagePerformance: [
      { name: "Beauty Hub", value: 72 },
      { name: "Smart Try", value: 64 },
      { name: "Glow Studio", value: 58 },
      { name: "Home Pro", value: 48 },
    ],
  });
}
