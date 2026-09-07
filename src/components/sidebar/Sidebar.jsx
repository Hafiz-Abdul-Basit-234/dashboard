import { Link } from "react-router-dom";
import "./Sidebar.css";
import {
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
} from "react-icons/fi";

const Sidebar = ({ isOpen, closeSidebar }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`sidebar-overlay ${isOpen ? "show" : ""}`}
        onClick={closeSidebar}
      ></div>

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>

        {/* Close */}
        <button className="sidebar-close" onClick={closeSidebar}>
          <FiX />
        </button>

        <Link to='/' className="dahbord">
        <h3>Dashboard </h3>
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

  <div className="sidebar-item">
    <FiUser />
  <Link to="/users" className="users-link">
  <span>Users</span>
</Link>

    <FiChevronDown className="arrow" />
  </div>

  <div className="sidebar-item">
    <FiHeadphones />
    <span>Customer</span>

    <FiChevronDown className="arrow" />
  </div>

  <div className="sidebar-item">
    <FiShoppingCart />
    <span>Order</span>

    <FiChevronDown className="arrow" />
  </div>

  <div className="sidebar-item">
    <FiMessageSquare />
    <span>Chat</span>
  </div>

</div>
      </aside>
    </>
  );
};

export default Sidebar;