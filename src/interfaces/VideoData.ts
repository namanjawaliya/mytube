import { Snippet } from "@/interfaces/Snippet";
import { Statistics } from "@/interfaces/Statistics";
import { ContentDetails } from "@/interfaces/ContentDetails";

export interface VideoData {
  items: {
    snippet: Snippet;
    statistics: Statistics;
    contentDetails: ContentDetails;
  }[];
  nextPageToken: "string";
}
