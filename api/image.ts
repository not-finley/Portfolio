import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const IMMICH_BASE_URL = process.env.IMMICH_BASE_URL || 'https://immich.finleyharrison.ca';
  const apiKey = process.env.IMMICH_API_KEY;
  const { id, size } = req.query;

  if (!apiKey || !id) {
    return res.status(400).json({ error: "Missing asset ID or API key" });
  }

  const thumbSize = size === 'original' ? 'original' : 'preview';
  const immichImageurl = `${IMMICH_BASE_URL}/api/assets/${id}/thumbnail?size=${thumbSize}`;

  try {
    const imageRes = await fetch(immichImageurl, {
      method: 'GET',
      headers: {
        'x-api-key': apiKey,
      },
    });

    if (!imageRes.ok) {
      return res.status(imageRes.status).send("Failed to fetch image from Immich");
    }

    // Forward the correct content type (e.g., image/jpeg)
    const contentType = imageRes.headers.get('content-type') || 'image/jpeg';
    res.setHeader('Content-Type', contentType);
    res.setHeader('Cache-Control', 'public, max-age=86400'); // Cache for performance

    // Stream the image binary data back to the browser
    const buffer = Buffer.from(await imageRes.arrayBuffer());
    return res.status(200).send(buffer);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
}