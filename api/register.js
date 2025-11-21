export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "POST only" });

  const { email, username } = req.body;

  return res.status(200).json({
    ok: true,
    id: Math.random().toString(36).slice(2),  // temporary user ID
  });
}
