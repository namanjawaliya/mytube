import { useQuery } from "react-query";

import { useAppSelector } from "@/store/store";

import { YT_API_URI } from "@/utils/constants";
import { formatViewsCount, getFormattedTime } from "@/utils/helper";

import { DotIcon } from "lucide-react";
import React from "react";

type Props = {
  thumbnail: string;
  channelTitle: string;
  videoTitle: string;
  viewCount: string;
  publishedAt: string;
  channelId: string;
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
  innerRef,
}: Props) => {
  const { isSidebarOpen } = useAppSelector((store) => store.globalSlice);

  const { data } = useQuery(["channelDetails", channelId], () =>
    fetchChannelDetails(channelId)
  );

  if (!data) return;

  const { url: channelThumbnail } = data.items[0].snippet.thumbnails.high;

  return (
    <div
      className={`flex flex-col transition-all duration-300 ease-in-out ${
        isSidebarOpen ? "w-[400px]" : "w-[320px]"
      } gap-3 cursor-pointer`}
      ref={innerRef}
    >
      <div>
        <img src={thumbnail} className="aspect-video rounded-lg" />
      </div>
      <div className="flex gap-x-4 items-start mt-2">
        <img src={channelThumbnail} className="rounded-full w-16 mt-1" />
        <div className="flex flex-col gap-y-1 mt-1">
          <p
            className="overflow-hidden text-[1.6rem]"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
            }}
          >
            {videoTitle}
          </p>
          <div className="mt-1">
            <p className="text-2xl">{channelTitle}</p>
            <div className="flex text-xl items-center gap-1">
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
