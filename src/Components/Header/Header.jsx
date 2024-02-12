import { useState } from "react";
import FavoriteListModal from "./FavoriteListModal";
import Favorites from "./Favorites";
import Logo from "./Logo";
import Search from "./Search";

const Header = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
      <nav className="container flex items-center justify-between py-6">
        <Logo />
        <div className="flex items-center gap-4 relative">
          <Search />
          <Favorites onToggle={() => setIsShow(!isShow)} />
          {isShow && <FavoriteListModal />}
        </div>
      </nav>
    </header>
  );
};

export default Header;
