import { useState } from "react";

import "./Nav.css";

import Sidebar from "../sidebar/Sidebar";

import { LuMessageCircleMore } from "react-icons/lu";

import {
  FiMenu,
  FiSearch,
  FiSettings,
  FiBell,
} from "react-icons/fi";

import { TbAdjustmentsHorizontal } from "react-icons/tb";

import { MdOutlineTranslate } from "react-icons/md";


const Navbar = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  return (
    <>

      <nav className="navbar">

        <div className="nav-left">

          <div className="logo">

            

            <h2>SHOP.CO</h2>

          </div>


          {/* THREE LINE BUTTON */}

          <button
            className="menu-btn"
            onClick={() => setIsSidebarOpen(true)}
          >
            <FiMenu />
          </button>


          <div className="search-box">

            <FiSearch className="search-icon" />

            <input
              type="text"
              placeholder="Search"
            />

            <div className="filter-btn">
              <TbAdjustmentsHorizontal />
            </div>

          </div>

        </div>


        <div className="nav-right">

          <div className="icon-box">
            <LuMessageCircleMore />
          </div>

          <div className="icon-box">
            <MdOutlineTranslate />
          </div>

          <div className="icon-box">
            <FiBell />
          </div>

          <div className="profile-box">

            <img
              src="https://i.pravatar.cc/100"
              alt="profile"
            />

            <FiSettings />

          </div>

        </div>

      </nav>


      {/* SIDEBAR */}

      <Sidebar
        isOpen={isSidebarOpen}
        closeSidebar={() => setIsSidebarOpen(false)}
      />

    </>
  );
};


export default Navbar;