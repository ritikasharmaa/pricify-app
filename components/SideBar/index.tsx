import Link from "next/link";
import NewExperimentIcon from "../../assets/icons/NewExperimentIcon";
import PricifyIcon from "../../assets/icons/PricifyIcon";
import RoundedButton, { ButtonsVariant } from "../UI/Buttons/RoundedButton";
import Heading from "../UI/Heading";
import SideBarFooter from "./SideBarFooter";
import SideBarTabs from "./SideBarTabs";

const Sidebar = () => {
  return (
    <div className="w-52 xl:w-60 h-screen fixed bg-white py-2.5 flex flex-col justify-between shadow-lg	">
      <div>
        <div className="flex justify-center gap-1 items-center mb-6">
          <span className="inline-block">
            <PricifyIcon />
          </span>
          <Heading variant="main" className=" text-amber-700">
            Pricify
          </Heading>
        </div>
        <div className="flex justify-center mb-4">
          <Link href="/new-experiment">
            <RoundedButton
              className="mx-auto"
              leftIcon={<NewExperimentIcon />}
              variant={ButtonsVariant.SECONDARY}
              text={"New Experiment"}
            />
          </Link>
        </div>
        <SideBarTabs />
      </div>
      <SideBarFooter />
    </div>
  );
};

export default Sidebar;
