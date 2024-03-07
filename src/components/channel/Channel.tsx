import { FC } from "react";

import { useQuery } from "react-query";

import { YT_API_URI } from "@/utils/constants";

import ChannelBanner from "@/components/channel/ChannelBanner";
import ChannelMetadata from "@/components/channel/ChannelMetadata";
import Tabs from "@/components/tabs/Tabs";
import TabSections from "../tabs/TabSections";
import TabContent from "../tabs/TabContent";
import { useSelector } from "react-redux";
import { useAppSelector } from "@/store/store";

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
  const { data, status } = useQuery(["channelDetails", channelId], () =>
    fetchChannelDetails(channelId)
  );
  const selectedTab = useAppSelector(
    (store) => store.globalSlice.currentChannelTab
  );

  if (status === "loading") return;

  const { brandingSettings, snippet, statistics } = data.items[0];

  const { videoCount, viewCount, subscriberCount, hiddenSubscriberCount } =
    statistics;
  const { title, description, customUrl, publishedAt } = snippet;

  return (
    <div className="w-full">
      <ChannelBanner
        src={brandingSettings?.image?.bannerExternalUrl}
        alt={brandingSettings?.channel?.title}
      />
      <ChannelMetadata
        title={title}
        description={description}
        customUrl={customUrl}
        publishedAt={publishedAt}
        videoCount={videoCount}
        viewCount={viewCount}
        subscriberCount={subscriberCount}
        hiddenSubscriberCount={hiddenSubscriberCount}
      />
      {/* <p className="text-2xl">{JSON.stringify(statistics)}</p> */}
      <Tabs>
        <TabSections sections={["Home", "Videos", "Playlists", "Community"]} selected={selectedTab} />
        <TabContent content={[<h1>nello</h1>, <h2>World</h2>, <h3>bayy</h3>]} selected={selectedTab} />
      </Tabs>
    </div>
  );
};

export default Channel;
