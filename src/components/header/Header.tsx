import { FC } from "react";

import { Link } from "react-router-dom";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import SearchBar from "@/components/search-bar/SearchBar";

import { BRAND_NAME } from "@/utils/constants";

import { useAppDispatch } from "@/store/store";
import { setSidebarState } from "@/store/reducers/globalSlice";

import { MenuIcon } from "lucide-react";

const Header: FC = () => {
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
        <h1 className="font-bold uppercase text-3xl">
          <Link to={"/"}>{BRAND_NAME}</Link>
        </h1>
      </div>
      <SearchBar className="hidden md:block" />
      <div>Action</div>
    </header>
  );
};

export default Header;
