import SearchBar from "../SearchBar";
import Notifications from "./Notifications";
import BellWithNotification from "../../../assets/svg/Bell.svg";
import Bell from "../../../assets/svg/bellWithoutNotification.svg";
import Image from "next/image";

const Navbar = () => {
  const notifications = false;
  return (
    <nav className="pt-8 pb-5.5 pl-6 pr-12 flex items-center justify-between">
      <div className="w-full max-w-[456px] flex justify-center items-center gap-3">
        {!notifications ? (
          <Image
            src={Bell}
            alt="Bell icon"
            width={36}
            height={36}
            className="block object-contain"
          />
        ) : (
          <Image
            src={BellWithNotification}
            alt="Bell icon"
            width={36}
            height={36}
            className="block object-contain"
          />
        )}
        <Notifications />
      </div>
      <SearchBar />
    </nav>
  );
};

export default Navbar;
