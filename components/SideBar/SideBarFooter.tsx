import Link from "next/link";
import LogoutIcon from "../../assets/icons/LogoutIcon";
import Avatar from "../UI/Avatar";
import RoundedButton, { ButtonsVariant } from "../UI/Buttons/RoundedButton";

const SideBarFooter = () => {
  return (
    <div className="flex flex-col items-center mb-5">
      <Avatar
        className="mb-1"
        src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1321&q=80"
      />
      <Link href="/">
        <p className="text-xs leading-5 cursor-pointer text-blue-1000">
          john@appleseed.com
        </p>
      </Link>
      <RoundedButton
        variant={ButtonsVariant.UNSTYLED}
        className="flex items-center mt-1"
      >
        <span className="mr-2">Logout</span>
        <LogoutIcon />
      </RoundedButton>
    </div>
  );
};

export default SideBarFooter;
