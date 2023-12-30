import { FC } from "react";

import Channel from "@/components/channel/Channel";

import { useParams } from "react-router-dom";

const ChannelDetailsPage: FC = () => {
  const { channelId } = useParams();

  return <Channel channelId={channelId || ""} />;
};

export default ChannelDetailsPage;
