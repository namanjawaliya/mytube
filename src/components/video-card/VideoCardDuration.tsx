import { FC } from "react";

import { getFormattedDuration } from "@/utils/helper";

type Props = {
  isSidebarOpen: boolean;
  duration: string;
};

const VideoCardDuration: FC<Props> = ({ isSidebarOpen, duration }: Props) => {
  return (
    <span
      className={`absolute right-0 bottom-1 bg-black bg-opacity-80 px-3 py-1 rounded-lg ${
        isSidebarOpen ? "text-xl" : "text-lg"
      }`}
    >
      {getFormattedDuration(duration)}
    </span>
  );
};

export default VideoCardDuration;
