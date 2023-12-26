import { YT_API_URI } from "@/utils/constants";
import { useQuery } from "react-query";
import VideoCard from "./VideoCard";

import { VideoData } from "@/interfaces/VideoData";

const fetchPopularVideos = async (): Promise<VideoData> => {
  const endpoint = `${YT_API_URI}/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=IN&key=${
    import.meta.env.VITE_YT_API_KEY
  }`;
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error("Failed to fetch popular videos");
  }
  return await response.json();
};

const Body = () => {
  const { data, error, isLoading } = useQuery<VideoData>(
    ["popularVideos"],
    () => fetchPopularVideos()
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {`${error}`}</div>;
  }

  if (!data) return;

  console.log({ data });
  const videos = data?.items || [];

  return (
    <div className="w-full overflow-scroll">
      <div className="flex flex-wrap gap-6">
        {videos.map(({ snippet, statistics }) => {
          const {
            thumbnails,
            channelTitle,
            title: videoTitle,
            publishedAt,
            channelId,
          } = snippet;

          const { viewCount } = statistics;

          return (
            <VideoCard
              key={videoTitle}
              thumbnail={thumbnails?.maxres?.url || thumbnails?.high?.url}
              channelTitle={channelTitle}
              videoTitle={videoTitle}
              viewCount={viewCount}
              publishedAt={publishedAt}
              channelId={channelId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
