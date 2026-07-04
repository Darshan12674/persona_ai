import fs from "node:fs";
import path from "node:path";
import { YoutubeTranscript } from "youtube-transcript";

interface Video {
  id: string;
  title: string;
}

function sanitizeFileName(name: string): string {
  return name
    .replace(/[<>:"/\\|?*]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();
}

async function downloadTranscript(
  video: Video,
  outputFolder: string
): Promise<boolean> {
  try {
    console.log(`📥 ${video.title}`);

    const transcript = await YoutubeTranscript.fetchTranscript(video.id);

    const text = transcript.map((item) => item.text).join(" ");

    fs.mkdirSync(outputFolder, {
      recursive: true,
    });

    const filePath = path.join(
      outputFolder,
      `${sanitizeFileName(video.title)}.txt`
    );

    fs.writeFileSync(filePath, text, "utf8");

    console.log(`✅ Saved ${video.title}`);

    return true;
  } catch (error) {
  console.error(`\n❌ Failed: ${video.title}`);
  console.error("Video ID:", video.id);

  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error(error);
  }

  return false;
}
}

async function collect(
  videosFile: string,
  outputFolder: string
) {
  const videos: Video[] = JSON.parse(
    fs.readFileSync(videosFile, "utf8")
  );

  let success = 0;

  for (const video of videos) {
    const ok = await downloadTranscript(video, outputFolder);

    if (ok) success++;
  }

  console.log(
    `\n🎉 Downloaded ${success}/${videos.length} transcripts`
  );
}

async function main() {
  await collect(
    "./data/hitesh/videos.json",
    "./data/hitesh/transcripts"
  );

  await collect(
    "./data/piyush/videos.json",
    "./data/piyush/transcripts"
  );
}

main();