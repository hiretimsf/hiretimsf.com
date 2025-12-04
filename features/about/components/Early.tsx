import EmbedVideos from "./EmbedVideos";
import { EARLY_VIDEOS } from "../data/early-videos";

export default function Early() {
  return <EmbedVideos videos={EARLY_VIDEOS} />;
}
