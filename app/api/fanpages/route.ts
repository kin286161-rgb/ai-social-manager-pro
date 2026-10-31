export async function GET() {
  return Response.json([
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
  ]);
}
