import { FC } from "react";

type Props = {
  src: string;
  alt: string;
};

const VideoCardChannelImage: FC<Props> = ({ src, alt }) => {
  return <img className="rounded-full max-w-16 mt-1" src={src} alt={alt} />;
};

export default VideoCardChannelImage;
