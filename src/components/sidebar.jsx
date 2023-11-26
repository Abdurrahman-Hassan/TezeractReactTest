import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import formsymbol from "../assets/form.svg";
import { GoTable } from "react-icons/go";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const location = useLocation();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <div>
      {windowWidth < 768 && (
        <div className="mobiletogglebtn absolute top-[10px] bg-grey h-[50px] flex flex-row pl-4 justify-start items-center w-[100vw]">
          <button className="toggle-button" onClick={toggleSidebar}>
            <span className="text-2xl">
              <CiMenuBurger />
            </span>
          </button>
        </div>
      )}
      {windowWidth > 768 ? (
        <div className="bg-white w-[220px] h-[95vh] pl-[33px] flex flex-col justify-start items-start">
          <div className="mt-[26px] mb-[38px] flex flex-row justify-start items-start w-full"></div>
          <div
            className={`${
              location.pathname === "/"
                ? "bg-purple text-white"
                : "bg-grey text-white"
            } p-[16px] text-center w-[157px] rounded-lg`}
          >
            <Link
              to={"/"}
              className="flex flex-row justify-center items-center gap-4"
            >
              <img src={formsymbol} alt="formsymbol" />
              <h3>User Form</h3>
            </Link>
          </div>
          <div
            className={`${
              location.pathname === "/user-table"
                ? "bg-purple text-white"
                : "bg-grey text-white"
            } p-[16px] text-center w-[157px] rounded-lg mt-[17px]`}
          >
            <Link
              to={"/user-table"}
              className="flex flex-row justify-center items-center gap-4"
            >
              <span className="font-bold text-xl">
                <GoTable />
              </span>
              <h3>User Table</h3>
            </Link>
          </div>
        </div>
      ) : (
        <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
          {isSidebarOpen && (
            <div className="bg-grey w-[100vw] h-[100vh] pl-[33px] flex flex-col justify-start items-start">
              <div className="mt-[26px] mb-[38px] flex flex-row justify-start items-start w-full">
              </div>
              <div
                className={`${
                  location.pathname === "/"
                    ? "bg-purple text-white"
                    : "bg-grey text-white"
                } p-[16px] text-center w-[157px] rounded-lg`}
              >
                <Link
                  to={"/"}
                  className="flex flex-row justify-center items-center gap-4"
                >
                  <img src={formsymbol} alt="formsymbol" />
                  <h3>User Form</h3>
                </Link>
              </div>
              <div
                className={`${
                  location.pathname === "/user-table"
                    ? "bg-purple text-white"
                    : "bg-white text-black"
                } p-[16px] text-center w-[157px] rounded-lg mt-[17px]`}
              >
                <Link
                  to={"/user-table"}
                  className="flex flex-row justify-center items-center gap-4"
                >
                  <span className="font-bold text-xl">
                    <GoTable />
                  </span>
                  <h3>User Table</h3>
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
