import { Item } from "@/interfaces/Item";
import { PageInfo } from "@/interfaces/PageInfo";

export interface YoutubeSearchListResponse {
  kind: string;
  etag: string;
  nextPageToken?: string;
  regionCode: string;
  pageInfo: PageInfo;
  items?: Item[];
}
