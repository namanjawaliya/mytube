import { FC } from "react";

import { useQuery } from "react-query";

import { YT_API_URI } from "@/utils/constants";
import ChannelBanner from "./ChannelBanner";

type Props = {
  channelId: string | string;
};

const fetchChannelDetails = async (channelId: string) => {
  const endpoint = `${YT_API_URI}/channels?part=brandingSettings%2CcontentDetails%2Cid%2Clocalizations%2Csnippet%2Cstatistics%2Cstatus%2CtopicDetails&id=${channelId}&key=${
    import.meta.env.VITE_YT_API_KEY
  }`;

  const response = await fetch(endpoint);
  const data = await response.json();

  return data;
};

const Channel: FC<Props> = ({ channelId }) => {
  const { data } = useQuery(["channelDetails", channelId], () =>
    fetchChannelDetails(channelId)
  );

  const { brandingSettings } = data.items[0];

  return (
    <div className="w-full">
      <ChannelBanner
        src={brandingSettings?.image?.bannerExternalUrl}
        alt={brandingSettings?.channel?.title}
      />
    </div>
  );
};

export default Channel;
