export async function GET() {
  const uuidReq = await fetch("https://www.uuidgenerator.net/api/version4", {
    headers: {
      "Content-Type": "text/plain",
    },
  });

  if (!uuidReq.ok) {
    return new Response("Failed to fetch UUID", {
      status: uuidReq.status,
    });
  }

  const uuid = await uuidReq.text();

  return new Response(uuid, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
