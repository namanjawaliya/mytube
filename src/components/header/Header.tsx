import { MenuIcon } from "lucide-react";
import PrimaryButton from "@/components/buttons/PrimaryButton";

import { BRAND_NAME } from "@/utils/constants";
import { useAppDispatch } from "@/store/store";
import { setSidebarState } from "@/store/reducers/globalSlice";
import SearchBar from "../search-bar/SearchBar";

const Header = () => {
  const dispatch = useAppDispatch();

  const toggleSidebar = () => dispatch(setSidebarState());

  return (
    <header className="flex justify-between items-center py-3 px-3 h-20 md:h-auto">
      <div className="flex items-center gap-2">
        <PrimaryButton
          className="rounded-full hidden md:block"
          callback={toggleSidebar}
        >
          <MenuIcon size={24} />
        </PrimaryButton>
        <h1 className="font-bold uppercase text-3xl">{BRAND_NAME}</h1>
      </div>
      <SearchBar className="hidden md:block" />
      <div>Action</div>
    </header>
  );
};

export default Header;
