import React from "react";
import Navbar from "../../components/nav/Nav";
import "./Users.css";

const Users = () => {
  return (
    <>
      <Navbar />

      <div className="users-header">
        <button className="add-user-btn">
          + Add New
        </button>
      </div>
    </>
  );
};

export default Users;