import { useAppSelector } from "@/store/store";

const Sidebar = () => {
  const { isSidebarOpen } = useAppSelector((store) => store.globalSlice);

  const sidebarWidth = isSidebarOpen ? "w-52" : "w-20";

  return (
    <div
      className={`transition-all ease-in-out ${sidebarWidth} bg-red-500 h-full`}
    >
      Sidebar
    </div>
  );
};

export default Sidebar;
