import React from "react";
import { FiCheck } from "react-icons/fi";
import "./UserList.css";

const UserList = ({ user }) => {
  return (
    <div className="user-list-row">

      {/* =========================
          NUMBER
      ========================= */}

      <div className="user-number">
        {user.id}
      </div>


      {/* =========================
          PROFILE
      ========================= */}

      <div className="user-profile">

        <img
          src={user.image}
          alt={user.name}
          className="user-avatar"
        />

        <div className="user-details">

          <div className="user-name">

            <span>
              {user.name}
            </span>

            {user.verified && (
              <span className="verified-icon">
                <FiCheck />
              </span>
            )}

          </div>

          <div className="user-email">
            {user.email}
          </div>

        </div>

      </div>


      {/* =========================
          COUNTRY
      ========================= */}

      <div className="user-country">
        {user.country}
      </div>


      {/* =========================
          FRIENDS
      ========================= */}

      <div className="user-friends">
        {user.friends}
      </div>


      {/* =========================
          FOLLOWERS
      ========================= */}

      <div className="user-followers">
        {user.followers}
      </div>


      {/* =========================
          STATUS
      ========================= */}

      <div className="user-status">

        <span
          className={`status-badge ${user.status.toLowerCase()}`}
        >
          {user.status}
        </span>

      </div>

    </div>
  );
};

export default UserList;
