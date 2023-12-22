import { useAppSelector } from "@/store/store";
import { SIDEBAR_MENU_ITEMS } from "@/utils/constants";
import { HomeIcon } from "lucide-react";

const Sidebar = () => {
  const { isSidebarOpen } = useAppSelector((store) => store.globalSlice);

  const sidebarWidth = isSidebarOpen ? "w-56" : "w-20";

  return (
    <div className={`ease-linear ${sidebarWidth} h-full`}>
      {SIDEBAR_MENU_ITEMS.map((menuItem, idx) => (
        <ul key={menuItem.title}>
          {idx > 0 && <hr />}
          <p>{menuItem.title}</p>
          {menuItem.items.map((subItem) => (
            <li
              key={subItem.name}
              className={`mx-2 px-2 py-2 hover-bg cursor-pointer rounded-xl text-sm`}
            >
              <span
                className={`flex items-center justify-center ${
                  isSidebarOpen && "justify-stretch"
                }`}
              >
                <HomeIcon size={26} />
                <span className={`${!isSidebarOpen ? "hidden" : "block pl-6"}`}>
                  {subItem.name}
                </span>
              </span>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default Sidebar;
