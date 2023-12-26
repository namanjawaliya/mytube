import { YT_API_URI } from "@/utils/constants";
import { useQuery } from "react-query";

type Props = {
  thumbnail: string;
  channelTitle: string;
  videoTitle: string;
  viewCount: string;
  publishedAt: string;
  channelId: string;
};
const fetchChannelDetails = async (channelId: string) => {
  const endpoint = `${YT_API_URI}/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${
    import.meta.env.VITE_YT_API_KEY
  }`;
  const response = await fetch(endpoint);
  return await response.json();
};

const VideoCard = ({
  thumbnail,
  channelTitle,
  videoTitle,
  viewCount,
  publishedAt,
  channelId,
}: Props) => {
  const { data } = useQuery(["channelDetails"], () =>
    fetchChannelDetails(channelId)
  );

  if (!data) return;

  const { url: channelThumbnail } = data.items[0].snippet.thumbnails.high;

  return (
    <div className="flex flex-col w-96 gap-2 m-2 cursor-pointer">
      <div>
        <img src={thumbnail} className="aspect-video rounded-lg" />
      </div>
      <div className="flex gap-2 items-start">
        <img src={channelThumbnail} className="rounded-full w-8 h-8 mt-1" />
        <div>
          <p
            className="overflow-hidden text-[1.6rem]"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
            }}
          >
            {videoTitle}
          </p>
          <p>{channelTitle}</p>
          <p>{viewCount}</p>
          <p>{publishedAt}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
