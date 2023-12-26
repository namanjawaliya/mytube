import { useAppSelector } from "@/store/store";

const VideoCardShimmer = () => {
  const { isSidebarOpen } = useAppSelector((store) => store.globalSlice);

  return (
    <div
      className={`flex flex-col transition-all duration-300 ease-in-out ${
        isSidebarOpen ? "w-[400px]" : "w-[320px]"
      } gap-3`}
    >
      <div>
        <div className="aspect-video w-full shimmer" />
      </div>
      <div className="flex gap-x-4 items-start mt-2">
        <div className="w-16 h-16 mt-1 shimmer !rounded-full"></div>
        <div className="flex flex-col gap-y-1 mt-1">
          <p
            className="overflow-hidden text-[1.6rem]"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
            }}
          ></p>
          <div className="mt-1">
            <div className="w-[350px] h-5 shimmer"></div>
            <div className="w-[350px] h-5 shimmer mt-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCardShimmer;
