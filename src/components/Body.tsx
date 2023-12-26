import { useEffect } from "react";

import { YT_API_URI } from "@/utils/constants";

import { useInfiniteQuery } from "react-query";
import { useInView } from "react-intersection-observer";

import VideoCard from "@/components/VideoCard";

import { VideoData } from "@/interfaces/VideoData";
import BodyShimmer from "./shimmer/BodyShimmer";

const fetchPopularVideos = async (nextPageToken = ""): Promise<VideoData> => {
  const endpoint = `${YT_API_URI}/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=15&regionCode=IN&key=${
    import.meta.env.VITE_YT_API_KEY
  }&pageToken=${nextPageToken}`;

  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error("Failed to fetch popular videos");
  }

  const data = await response.json();

  const { nextPageToken: newPageToken, ...restData } = data;

  return { ...restData, nextPageToken: newPageToken };
};

const Body = () => {
  const { data, status, hasNextPage, fetchNextPage } =
    useInfiniteQuery<VideoData>(
      ["popularVideos"],
      ({ pageParam = "" }) => fetchPopularVideos(pageParam),
      {
        getNextPageParam: (lastPage) => lastPage.nextPageToken || undefined,
      }
    );
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  if (status === "loading") {
    return <BodyShimmer />;
  }
  
  const videos = data?.pages.flatMap((page) => page.items) || [];

  return (
    <div className="w-full overflow-scroll">
      <div className="flex flex-wrap justify-around gap-y-6">
        {videos.map(({ snippet, statistics }, idx) => {
          return videos.length === idx + 1 ? (
            <VideoCard
              key={snippet.title}
              thumbnail={
                snippet.thumbnails?.maxres?.url || snippet.thumbnails?.high?.url
              }
              channelTitle={snippet.channelTitle}
              videoTitle={snippet.title}
              viewCount={statistics?.viewCount}
              publishedAt={snippet.publishedAt}
              channelId={snippet.channelId}
              innerRef={ref}
            />
          ) : (
            <VideoCard
              key={snippet.title}
              thumbnail={
                snippet.thumbnails?.maxres?.url || snippet.thumbnails?.high?.url
              }
              channelTitle={snippet.channelTitle}
              videoTitle={snippet.title}
              viewCount={statistics?.viewCount}
              publishedAt={snippet.publishedAt}
              channelId={snippet.channelId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
