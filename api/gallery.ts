import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const IMMICH_BASE_URL = process.env.IMMICH_BASE_URL || 'https://immich.finleyharrison.ca';
  const apiKey = process.env.IMMICH_API_KEY;
  const albumId = process.env.IMMICH_PORTFOLIO_ALBUM_ID;

  if (!apiKey || !albumId) {
    return res.status(500).json({ error: "Missing IMMICH_API_KEY or IMMICH_PORTFOLIO_ALBUM_ID" });
  }

  try {
    const targetUrl = `${IMMICH_BASE_URL}/api/search/metadata`;
    const response = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
      },
      body: JSON.stringify({ albumIds: [albumId] })
    });

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(response.status).json({ error: errorText });
    }

    const searchResult = await response.json();
    const rawAssets = searchResult?.assets?.items || [];

    // Fetch full metadata (including EXIF & description) for each asset concurrently
    const formattedAssets = await Promise.all(
      rawAssets.map(async (baseAsset: any) => {
        let assetDetail = baseAsset;

        try {
          const detailRes = await fetch(`${IMMICH_BASE_URL}/api/assets/${baseAsset.id}`, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'x-api-key': apiKey,
            },
          });
          if (detailRes.ok) {
            assetDetail = await detailRes.json();
          }
        } catch (err) {
          console.error(`Failed to fetch detail for asset ${baseAsset.id}`, err);
        }

        const exif = assetDetail.exifInfo || {};
        const make = exif.make || '';
        const model = exif.model || '';
        const cameraName = model.toLowerCase().startsWith(make.toLowerCase())
          ? model
          : `${make} ${model}`;

        return {
          id: baseAsset.id,
          previewImg: `/api/image?id=${baseAsset.id}&size=preview`,
          img: `/api/image?id=${baseAsset.id}&size=original`,
          alt: exif.description || baseAsset.originalFileName || "Gallery photo",
          
          // Pulls description or caption first, falls back to file name
          title: exif.description || 
                 exif.caption || 
                 (baseAsset.originalFileName ? baseAsset.originalFileName.replace(/\.[^/.]+$/, "") : "Untitled"),
                 
          category: "photography",
          exif: {
            camera: cameraName.trim() || undefined,
            focalLength: exif.focalLength ? `${exif.focalLength}mm` : undefined,
            aperture: exif.fstop ? `f/${exif.fstop}` : undefined,
            shutterSpeed: exif.exposureTime || undefined,
            iso: exif.iso?.toString() || undefined,
          }
        };
      })
    );

    return res.status(200).json(formattedAssets);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
}