import { useQuery } from "react-query";

import { useAppSelector } from "@/store/store";

import { YT_API_URI } from "@/utils/constants";
import {
  formatViewsCount,
  getFormattedDuration,
  getFormattedTime,
} from "@/utils/helper";

import { DotIcon } from "lucide-react";

import VideoCardShimmer from "@/components/shimmer/VideoCardShimmer";

type Props = {
  thumbnail: string;
  channelTitle: string;
  videoTitle: string;
  viewCount: string;
  publishedAt: string;
  channelId: string;
  duration: string;
  innerRef?: React.Ref<HTMLDivElement>;
};

const fetchChannelDetails = async (channelId: string) => {
  const endpoint = `${YT_API_URI}/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${
    import.meta.env.VITE_YT_API_KEY
  }`;
  const response = await fetch(endpoint);
  return await response.json();
};

const VideoCard = ({
  thumbnail,
  channelTitle,
  videoTitle,
  viewCount,
  publishedAt,
  channelId,
  duration,
  innerRef,
}: Props) => {
  const { isSidebarOpen } = useAppSelector((store) => store.globalSlice);

  const { data, status } = useQuery(
    ["channelDetails", channelId],
    () => fetchChannelDetails(channelId),
    {
      onError: (err) => {
        console.error("Error fetching channel details:", err);
      },
    }
  );

  if (status === "loading") {
    return <VideoCardShimmer />;
  }

  const { url: channelThumbnail } = data.items[0].snippet.thumbnails.medium;

  return (
    <div
      className={`flex flex-col transition-all duration-300 ease-in-out ${
        isSidebarOpen ? "w-[40rem]" : "w-[33rem]"
      } gap-3 mx-4 md:mx-0 cursor-pointer`}
      ref={innerRef}
    >
      <div className="relative">
        <img
          src={thumbnail}
          className="aspect-video rounded-lg h-full w-full"
          alt="Video Thumbnail"
        />
        <span
          className={`absolute right-0 bottom-1 bg-black bg-opacity-80 px-3 py-1 rounded-lg ${
            isSidebarOpen ? "text-xl" : "text-lg"
          }`}
        >
          {getFormattedDuration(duration)}
        </span>
      </div>
      <div className="flex gap-x-4 items-start mt-2">
        <img
          className="rounded-full w-16 mt-1"
          src={channelThumbnail}
          alt={channelTitle}
        />
        <div className="flex flex-col gap-y-1 mt-1">
          <p
            className={`line-clamp-2 ${
              isSidebarOpen ? "text-[1.6rem]" : "text-[1.5rem]"
            }`}
          >
            {videoTitle}
          </p>
          <div className="mt-1">
            <p className={` ${isSidebarOpen ? "text-2xl" : "text-xl"}`}>
              {channelTitle}
            </p>
            <div className={`flex items-center gap-1 text-xl`}>
              <span>{formatViewsCount(viewCount)}</span>
              <DotIcon />
              <span>{getFormattedTime(publishedAt)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
