import { useAppSelector } from "@/store/store";
import { SIDEBAR_MENU_ITEMS } from "@/utils/sidebar";

const Sidebar = () => {
  const { isSidebarOpen } = useAppSelector((store) => store.globalSlice);

  const sidebarWidth = isSidebarOpen ? "w-96" : "w-24";

  return (
    <div
      className={`ease-linear ${sidebarWidth} transition-all duration-150 overflow-auto hidden md:block`}
    >
      {SIDEBAR_MENU_ITEMS.map((menuItem, idx) => (
        <ul key={menuItem.title}>
          {idx > 0 && <hr className="my-2" />}
          {isSidebarOpen && <p className="font-bold ml-2">{menuItem.title}</p>}
          {menuItem.items.map((subItem) => (
            <li
              key={subItem.name}
              className={`px-4 py-2 m-2 hover-bg cursor-pointer rounded-xl text-sm`}
            >
              <span className={`flex items-center gap-6`}>
                {subItem.icon && (
                  <subItem.icon size={26} className="overflow-visible" />
                )}
                <span className={`truncate overflow-clip text-xl`}>
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
