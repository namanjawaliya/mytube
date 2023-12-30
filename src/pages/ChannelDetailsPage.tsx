import { FC } from "react";
import { useParams } from "react-router-dom";

const ChannelDetailsPage: FC = () => {
  const { channelId } = useParams();
  return <div>ChannelDetailsPage - {channelId}</div>;
};

export default ChannelDetailsPage;
