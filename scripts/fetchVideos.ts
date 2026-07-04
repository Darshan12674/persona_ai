import fs from "node:fs";
import path from "node:path";
import { XMLParser } from "fast-xml-parser";

export interface Video {
  id: string;
  title: string;
}

export default async function fetchVideos(
  channelId: string,
  outputFile: string
): Promise<Video[]> {
  const url = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;

  console.log(`📺 Fetching videos from ${channelId}`);

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch RSS feed");
  }

  const xml = await response.text();

  const parser = new XMLParser({
    ignoreAttributes: false,
  });

  const data = parser.parse(xml);

  const entries = Array.isArray(data.feed.entry)
    ? data.feed.entry
    : [data.feed.entry];

  const videos: Video[] = entries.map((entry: any) => ({
    id: entry["yt:videoId"],
    title: entry.title,
  }));

  fs.mkdirSync(path.dirname(outputFile), {
    recursive: true,
  });

  fs.writeFileSync(
    outputFile,
    JSON.stringify(videos, null, 2),
    "utf8"
  );

  console.log(`✅ Saved ${videos.length} videos`);

  return videos;
}