import { APP_NAME } from "@/lib/constants";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";
import Link from "next/link";
import CategoryDrawer from "./CategoryDrawer";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <CategoryDrawer />
          <Link href="/" className="flex-start ml-4">
            <Logo width={60} height={50} />
            <span className="hidden lg:block font-bold text-2xl ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <HeaderMenu />
      </div>
    </header>
  );
};

export default Header;
