import React from "react";
import Navbar from "../../components/nav/Nav";
import UserList from "../../components/userlist/UserList";
import "./Users.css";
import  { useState } from "react";
import { FiX } from "react-icons/fi";
const users = [
  {
    id: "01",
    name: "Curtis",
    email: "wiegand@hotmail.com",
    country: "Saucerize",
    friends: 834,
    followers: 3645,
    status: "Active",
    verified: true,
    image: "https://i.pravatar.cc/150?img=11",
  },

  {
    id: "02",
    name: "Xavier",
    email: "tyrell86@company.com",
    country: "South Bradfordstad",
    friends: 634,
    followers: 2345,
    status: "Pending",
    verified: false,
    image: "https://i.pravatar.cc/150?img=12",
  },

  {
    id: "03",
    name: "Lola",
    email: "aufderhar56@yahoo.com",
    country: "North Tannermouth",
    friends: 164,
    followers: 9345,
    status: "Rejected",
    verified: false,
    image: "https://i.pravatar.cc/150?img=47",
  },

  {
    id: "04",
    name: "Milton",
    email: "dikinson49@hotmail.com",
    country: "North Anika",
    friends: 684,
    followers: 3654,
    status: "Pending",
    verified: false,
    image: "https://i.pravatar.cc/150?img=13",
  },

  {
    id: "05",
    name: "Lysanne",
    email: "lysanne@example.com",
    country: "Bettelande",
    friends: 842,
    followers: 5863,
    status: "Active",
    verified: true,
    image: "https://i.pravatar.cc/150?img=14",
  },

  {
    id: "06",
    name: "Marlon",
    email: "marlon@example.com",
    country: "West Michael",
    friends: 521,
    followers: 4278,
    status: "Active",
    verified: false,
    image: "https://i.pravatar.cc/150?img=15",
  },

  {
    id: "07",
    name: "Sophia",
    email: "sophia@example.com",
    country: "East Jonathan",
    friends: 391,
    followers: 7284,
    status: "Pending",
    verified: true,
    image: "https://i.pravatar.cc/150?img=44",
  },

  {
    id: "08",
    name: "Robert",
    email: "robert@example.com",
    country: "Lake Robert",
    friends: 713,
    followers: 4921,
    status: "Rejected",
    verified: false,
    image: "https://i.pravatar.cc/150?img=68",
  },
];

const Users = () => {
    const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Navbar />

      {/* Add New Button */}
      <div className="users-actions">
        <button className="add-user-btn"   onClick={() => setShowForm(true)}>
          Add New +
        </button>
      </div>

      <main className="users-page">

        <div className="users-card">

          {/* =========================
              HEADER
          ========================= */}

          <div className="users-header">

            <div className="header-number">
              #
            </div>

            <div className="header-profile">
              User Profile
            </div>

            <div className="header-country">
              Country
            </div>

            <div className="header-friends">
              Friends
            </div>

            <div className="header-followers">
              Followers
            </div>

            <div className="header-status">
              Status
            </div>

          </div>


          {/* =========================
              USERS
          ========================= */}

          <div className="users-list">

            {users.map((user) => (
              <UserList
                key={user.id}
                user={user}
              />
            ))}

          </div>

        </div>

      </main>
{showForm && (
  <div className="modal-overlay">
    <div className="modal">

      {/* HEADER */}
      <div className="modal-header">
        <h2>Add New User</h2>
        <button onClick={() => setShowForm(false)}>✕</button>
      </div>

      {/* FORM */}
      <form className="modal-form">

        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="e.g. Jordan Lee" />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="e.g. jordan@company.com" />
        </div>

        <div className="form-group">
          <label>Country</label>
          <input type="text" placeholder="e.g. New Lisbon" />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Friends</label>
            <input type="number" placeholder="0" />
          </div>

          <div className="form-group">
            <label>Followers</label>
            <input type="number" placeholder="1" />
          </div>
        </div>

        <div className="form-group">
          <label>Status</label>
          <select>
            <option>Active</option>
            <option>Pending</option>
            <option>Rejected</option>
          </select>
        </div>

        <button className="submit-btn">Add User</button>

      </form>
      <div className="modal-footer">
  <button
    type="button"
    className="cancel-btn"
    onClick={() => setShowForm(false)}
  >
    Cancel
  </button>

  <button
    type="button"
    className="submit-btn"
  >
    Add User
  </button>
    <FiX />
</div>
    </div>
  </div>
)}
    </>
  );
};

export default Users;
