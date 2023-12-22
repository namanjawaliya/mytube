import { ReactNode, useCallback } from "react";

type Props = {
  children?: ReactNode;
  className?: string;
  callback: () => void;
};

const PrimaryButton = ({ children, className = "", callback }: Props) => {
  const handleClick = useCallback(() => {
    callback();
  }, [callback]);

  return (
    <button
      className={`${className} p-2 hover-bg`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
