import { FC } from "react";

type Props = {
  content: any[];
  selected: number;
};

const TabContent: FC<Props> = ({ content, selected }) => {
  return (
    <div>
      {content.map(
        (el, idx) => idx === selected && <span key={idx}>{el}</span>
      )}
    </div>
  );
};

export default TabContent;
