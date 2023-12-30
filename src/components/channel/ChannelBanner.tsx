import { FC } from "react";

type Props = {
  src: string;
  alt: string;
};

const ChannelBanner: FC<Props> = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="h-80 w-11/12 object-cover rounded-3xl"
    />
  );
};

export default ChannelBanner;
