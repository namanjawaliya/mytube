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
    <header className="flex justify-between items-center py-3 px-3">
      <div className="flex items-center gap-2">
        <PrimaryButton className="rounded-full" callback={toggleSidebar}>
          <MenuIcon size={24} />
        </PrimaryButton>
        <h1 className=" font-bold uppercase">{BRAND_NAME}</h1>
      </div>
      <SearchBar />
      <div>Action</div>
    </header>
  );
};

export default Header;
