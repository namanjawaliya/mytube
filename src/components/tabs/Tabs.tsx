import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Tabs: FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default Tabs;
