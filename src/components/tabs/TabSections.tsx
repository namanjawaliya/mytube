import { setCurrentChannelTab } from "@/store/reducers/globalSlice";
import { useAppDispatch } from "@/store/store";
import { FC } from "react";

type Props = {
  sections: string[];
  selected: number;
};

const TabSections: FC<Props> = ({ sections, selected }) => {
  const dispatch = useAppDispatch();
  const handleTabChange = (idx: number) => {
    dispatch(setCurrentChannelTab(idx));
  };

  return (
    <>
      <div className="flex gap-10">
        {sections.map((sectionTitle, idx) => (
          <button
            className={`text-2xl text-white transition-opacity duration-300 ${
              idx === selected ? "opacity-100" : "opacity-50"
            }`}
            key={sectionTitle}
            onClick={() => handleTabChange(idx)}
          >
            {sectionTitle}
            <hr
              className={`mt-4 mx-1 transition-opacity duration-300 opacity-0 ${
                idx === selected && "opacity-100"
              }`}
            />
          </button>
        ))}
      </div>
      <hr className="opacity-50" />
    </>
  );
};

export default TabSections;
