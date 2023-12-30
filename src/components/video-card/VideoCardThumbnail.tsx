import { FC } from "react";

type Props = {
  thumbnail: string;
};

const VideoCardThumbnail: FC<Props> = ({ thumbnail }: Props) => {
  return (
    <img
      src={thumbnail}
      className="aspect-video rounded-lg h-full w-full"
      alt="Video Thumbnail"
    />
  );
};

export default VideoCardThumbnail;
