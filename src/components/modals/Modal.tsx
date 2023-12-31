import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Modal: FC<Props> = ({ children }) => {
  return (
    <section className="bg-black bg-opacity-50 absolute inset-0 flex justify-center items-center w-full h-full">
      {children}
    </section>
  );
};

export default Modal;
