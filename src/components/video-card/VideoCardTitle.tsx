import { FC } from "react";

type Props = {
  isSidebarOpen: boolean;
  videoTitle: string;
};

const VideoCardTitle: FC<Props> = ({ isSidebarOpen, videoTitle }) => {
  return (
    <p
      className={`line-clamp-2 ${
        isSidebarOpen ? "text-[1.6rem]" : "text-[1.5rem]"
      }`}
    >
      {videoTitle}
    </p>
  );
};

export default VideoCardTitle;
