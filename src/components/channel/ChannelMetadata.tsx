import { FC, useState } from "react";

import { formatTotalCount } from "@/utils/helper";

import { ArrowRight, DotIcon } from "lucide-react";
import AboutChannelModal from "../modals/AboutChannelModal";
import PrimaryButton from "../buttons/PrimaryButton";

type Props = {
  title: string;
  description: string;
  customUrl: string;
  publishedAt: string;
  videoCount: string;
  viewCount: string;
  subscriberCount: string;
  hiddenSubscriberCount: boolean;
};

const ChannelMetadata: FC<Props> = ({
  title,
  description,
  customUrl,
  videoCount,
  viewCount,
  subscriberCount,
  hiddenSubscriberCount,
  publishedAt,
}) => {
  const [isModalOpen, setModalState] = useState(false);

  return (
    <>
      <div className="flex items-center my-6 gap-6 h-60">
        <div>
          <img
            src="https://yt3.googleusercontent.com/H2iVobIT5dpeQdVaxYO4EbWNeSnSuu-UuiIJKMy0l8l-KVY_bpXe2rQt38mf2KwWN20RgJ2fkQ=s176-c-k-c0x00ffffff-no-rj"
            className="rounded-full max-w-60"
          />
        </div>
        <div className="flex flex-col items-start justify-evenly h-full">
          <h2 className="text-5xl font-bold">{title}</h2>
          <span className="flex items-center text-2xl text-slate-200">
            <span>{customUrl}</span>
            {!hiddenSubscriberCount && (
              <>
                <DotIcon />
                <span>
                  {formatTotalCount(subscriberCount)}&nbsp;subscribers
                </span>
              </>
            )}
            <DotIcon />
            <span>{formatTotalCount(videoCount)}&nbsp;videos</span>
            <DotIcon />
            <span>{formatTotalCount(viewCount)}&nbsp;views</span>
          </span>
          <span className="flex items-center">
            <p className="line-clamp-1 w-2/3 text-2xl">{description}</p>
            <PrimaryButton
              callback={() => {
                setModalState(true);
              }}
              className="rounded-full"
            >
              <ArrowRight />
            </PrimaryButton>
          </span>
          <button className="px-6 py-4 bg-white text-black rounded-full text-2xl font-bold">
            Subscribe
          </button>
        </div>
      </div>
      {isModalOpen && (
        <AboutChannelModal
          description={description}
          videoCount={videoCount}
          subscriberCount={subscriberCount}
          hiddenSubscriberCount={hiddenSubscriberCount}
          publishedAt={publishedAt}
          closeFn={() => setModalState(false)}
        />
      )}
    </>
  );
};

export default ChannelMetadata;
