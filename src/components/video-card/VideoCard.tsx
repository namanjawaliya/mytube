import { useState } from "react";

import { useQuery } from "react-query";

import { useAppSelector } from "@/store/store";

import { YT_API_URI } from "@/utils/constants";

import { Link } from "react-router-dom";

import VideoCardPreview from "@/components/video-card/VideoCardPreview";
import VideoCardThumbnail from "@/components/video-card/VideoCardThumbnail";
import VideoCardDuration from "@/components/video-card/VideoCardDuration";
import VideoCardTitle from "@/components/video-card/VideoCardTitle";
import VideoCardChannelImage from "@/components/video-card/VideoCardChannelImage";
import VideoCardMetdataBar from "@/components/video-card/VideoCardMetdataBar";

import VideoCardShimmer from "@/components/shimmer/VideoCardShimmer";

type Props = {
  thumbnail: string;
  channelTitle: string;
  videoTitle: string;
  viewCount: string;
  publishedAt: string;
  channelId: string;
  duration: string;
  embed: string;
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
  embed,
  innerRef,
}: Props) => {
  const { isSidebarOpen } = useAppSelector((store) => store.globalSlice);
  const [isHover, setIsHover] = useState(false);

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

  const srcMatch = embed.match(/src=["'](.*?)["']/);
  const src = srcMatch ? srcMatch[1] : "";

  const { url: channelThumbnail } = data.items[0].snippet.thumbnails.medium;

  return (
    <div
      className={`flex flex-col transition-all duration-300 ease-in-out ${
        isSidebarOpen ? "w-[30rem] lg:w-[40rem]" : "w-[33rem]"
      } gap-3 mx-4 md:mx-0 cursor-pointer`}
      ref={innerRef}
    >
      <div
        className="relative"
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
      >
        {!isHover ? (
          <>
            <VideoCardThumbnail thumbnail={thumbnail} />
            <VideoCardDuration
              isSidebarOpen={isSidebarOpen}
              duration={duration}
            />
          </>
        ) : (
          <VideoCardPreview src={src} />
        )}
      </div>
      <div className="flex gap-x-4 items-start mt-2">
        <Link to={`/channel/${channelId}`}>
          <VideoCardChannelImage src={channelThumbnail} alt={channelTitle} />
        </Link>

        <div className="flex flex-col gap-y-1 mt-1">
          <VideoCardTitle
            isSidebarOpen={isSidebarOpen}
            videoTitle={videoTitle}
          />

          <div className="mt-1">
            <VideoCardMetdataBar
              isSidebarOpen={isSidebarOpen}
              channelId={channelId}
              channelTitle={channelTitle}
              viewCount={viewCount}
              publishedAt={publishedAt}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
