import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Logo />
        </div>
        <HeaderMenu />
      </div>
    </header>
  );
};

export default Header;
