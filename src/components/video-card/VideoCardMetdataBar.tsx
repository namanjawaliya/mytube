import { FC } from "react";

import { Link } from "react-router-dom";

import { formatTotalCount, getFormattedTime } from "@/utils/helper";

import { DotIcon } from "lucide-react";

type Props = {
  isSidebarOpen: boolean;
  channelId: string;
  channelTitle: string;
  viewCount: string;
  publishedAt: string;
};

const VideoCardMetdataBar: FC<Props> = ({
  isSidebarOpen,
  channelId,
  channelTitle,
  viewCount,
  publishedAt,
}) => {
  return (
    <>
      <p className={` ${isSidebarOpen ? "text-2xl" : "text-xl"}`}>
        <Link to={`/channel/${channelId}`}>{channelTitle}</Link>
      </p>
      <div className={`flex items-center gap-1 text-xl`}>
        <span>{formatTotalCount(viewCount)}&nbsp;views</span>
        <DotIcon />
        <span>{getFormattedTime(publishedAt)}</span>
      </div>
    </>
  );
};

export default VideoCardMetdataBar;
