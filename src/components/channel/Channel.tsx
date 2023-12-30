import { FC } from "react";

type Props = {
  channelId: string | undefined;
};

const Channel: FC<Props> = ({ channelId }) => {
  return <div>Channel - {channelId}</div>;
};

export default Channel;
