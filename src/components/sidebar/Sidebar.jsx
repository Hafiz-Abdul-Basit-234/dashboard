
import { Link } from "react-router-dom";
import "./Sidebar.css";

import {
  FiPackage,
  FiGrid,
  FiMonitor,
  FiFileText,
  FiUsers,
  FiBookOpen,
  FiBarChart2,
  FiUser,
  FiHeadphones,
  FiShoppingCart,
  FiMessageSquare,
  FiChevronDown,
  FiX,
  FiLogOut,
} from "react-icons/fi";

const Sidebar = ({ isOpen, closeSidebar, onLogout }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`sidebar-overlay ${isOpen ? "show" : ""}`}
        onClick={closeSidebar}
      ></div>

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>

        {/* Close Button */}
        <button className="sidebar-close" onClick={closeSidebar}>
          <FiX />
        </button>

        {/* Dashboard */}
        <Link to="/dashbord" className="dahbord">
          <h3>Dashboard</h3>
        </Link>

        <div className="sidebar-menu">
          <div className="sidebar-item active">
            <FiGrid />
            <span>Default</span>
          </div>

          <div className="sidebar-item">
            <FiMonitor />
            <span>Analytics</span>
          </div>

          <div className="sidebar-item">
            <FiFileText />
            <span>Invoice</span>
          </div>

          <div className="sidebar-item">
            <FiUsers />
            <span>CRM</span>
          </div>

          <div className="sidebar-item">
            <FiBookOpen />
            <span>Blog</span>
          </div>
        </div>

        <div className="sidebar-line"></div>

        <h3>Widget</h3>

        <div className="sidebar-item">
          <FiBarChart2 />
          <span>Statistics</span>
        </div>

        <div className="sidebar-line"></div>

        <h3>Application</h3>

        <div className="sidebar-menu">
          <Link to="/users" className="users-link">
            <div className="sidebar-item">
              <FiUser />
              <span>Users</span>
              <FiChevronDown className="arrow" />
            </div>
          </Link>

          <Link to="/orders" className="users-link">
            <div className="sidebar-item">
              <FiHeadphones />
              <span>Customer</span>
              <FiChevronDown className="arrow" />
            </div>
          </Link>

          <Link to="/orders" className="users-link">
            <div className="sidebar-item">
              <FiShoppingCart />
              <span>Order</span>
              <FiChevronDown className="arrow" />
            </div>
          </Link>

          <div className="sidebar-item">
            <FiMessageSquare />
            <span>Chat</span>
          </div>
        </div>

        <Link to="/products" className="users-link">
          <div className="sidebar-item">
            <FiPackage />
            <span>Products</span>
          </div>
        </Link>

        {/* Logout Button */}
        <div className="sidebar-logout">
          <button
            type="button"
            className="logout-btn"
            onClick={onLogout}
          >
            <FiLogOut />
            <span>Logout</span>
          </button>
        </div>

      </aside>
    </>
  );
};

export default Sidebar;
