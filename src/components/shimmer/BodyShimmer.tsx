import VideoCardShimmer from "./VideoCardShimmer";

const repetitions = Array.from({ length: 15 });

const BodyShimmer = () => {
  return (
    <div className="w-full overflow-scroll">
      <div className="flex flex-wrap justify-around gap-y-6">
        {repetitions.map((_, idx) => (
          <VideoCardShimmer key={idx} />
        ))}
      </div>
    </div>
  );
};

export default BodyShimmer;
