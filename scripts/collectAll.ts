import fetchVideos from "./fetchVideos";
import { channels } from "./channels";

async function main() {
  await fetchVideos(
    channels.chaiAurCode.channelId,
    channels.chaiAurCode.output
  );

  await fetchVideos(
    channels.piyush.channelId,
    channels.piyush.output
  );
}

main().catch(console.error);