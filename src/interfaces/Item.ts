import { Snippet } from "@/interfaces/Snippet";
import { VideoId } from "@/interfaces/VideoId";

export interface Item {
  kind: string;
  etag: string;
  id: VideoId;
  snippet: Snippet;
}
