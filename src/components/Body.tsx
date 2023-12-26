import { YT_API_URI } from "@/utils/constants";
import { useInfiniteQuery } from "react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import VideoCard from "@/components/VideoCard";

import { VideoData } from "@/interfaces/VideoData";

const fetchPopularVideos = async (pageToken = ""): Promise<VideoData> => {
  const endpoint = `${YT_API_URI}/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=IN&key=${
    import.meta.env.VITE_YT_API_KEY
  }&pageToken=${pageToken}`;

  const response = await fetch(endpoint);

  if (!response.ok) {
    const errorMessage = `Failed to fetch popular videos. Status: ${response.status} - ${response.statusText}`;
    throw new Error(errorMessage);
  }

  return response.json();
};

const Body = () => {
  const { data, fetchNextPage, hasNextPage, status } =
    useInfiniteQuery<VideoData>(
      ["popularVideos"],
      ({ pageParam = "" }) => fetchPopularVideos(pageParam),
      {
        getNextPageParam: (lastPage) => lastPage.nextPageToken || undefined,
      }
    );

  const videos = data?.pages.flatMap((page) => page.items) || [];

  if (status === "loading" && !videos.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full overflow-scroll">
      <InfiniteScroll
        dataLength={videos.length}
        next={fetchNextPage}
        hasMore={!!hasNextPage}
        loader={
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            Loading more...
          </div>
        }
        endMessage={
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            No more videos to load
          </div>
        }
      >
        <div className="flex flex-wrap justify-around gap-y-6">
          {videos.map(({ snippet, statistics }) => (
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
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Body;
