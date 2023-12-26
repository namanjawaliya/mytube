import { Snippet } from "@/interfaces/Snippet";
import { Statistics } from "@/interfaces/Statistics";

export interface VideoData {
  items: {
    snippet: Snippet;
    statistics: Statistics;
  }[];
  nextPageToken: "string";
}
