import type { NextPage } from "next";
import Sidebar from "../components/SideBar";
import { PricingTable } from "../types";

const Home: NextPage = () => {
  const handleClick = (theme: string) => {
    document.body.setAttribute("data-theme", theme);
  };
  return (
    <>
      <p className="theme-test" onClick={() => handleClick("default")}>
        Default
      </p>
      <p className="theme-test" onClick={() => handleClick("primary")}>
        Primary
      </p>
    </>
  );
};

export default Home;
