import "./Nav.css";
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
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo">
          <img
            src="https://berrydashboard.io/favicon.ico"
            alt=""
          />
          <h2>SHOP.CO</h2>
        </div>

        <div className="menu-btn">
          <FiMenu />
        </div>

        <div className="search-box">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Search" />
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
            alt=""
          />
          <FiSettings />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;