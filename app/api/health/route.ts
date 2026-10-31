export async function GET() {
  return Response.json({
    status: "ok",
    app: "AI Social Manager Pro",
    timestamp: new Date().toISOString(),
    features: [
      "dashboard",
      "facebook_manager",
      "tiktok_importer",
      "multi_agent_manager",
      "publish_scheduler",
    ],
  });
}
