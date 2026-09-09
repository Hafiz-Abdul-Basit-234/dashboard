import React, { useState } from "react";
import Navbar from "../../components/nav/Nav";
import UserList from "../../components/userlist/UserList";
import "./Users.css";

const initialUsers = [
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
];

const Users = () => {
  const [userData, setUserData] = useState(initialUsers);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    friends: "",
    followers: "",
    status: "Active",
  });

  const [errors, setErrors] = useState({});

  // ✅ handle input
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // remove error on typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // ✅ validation
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";
    if (!formData.friends) newErrors.friends = "Required";
    if (!formData.followers) newErrors.followers = "Required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ add user
  const addUser = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const newUser = {
      id: String(userData.length + 1).padStart(2, "0"),
      ...formData,
      friends: Number(formData.friends),
      followers: Number(formData.followers),
      verified: false,
      image: `https://i.pravatar.cc/150?img=${Math.floor(
        Math.random() * 70
      )}`,
    };

    setUserData((prev) => [...prev, newUser]);

    setFormData({
      name: "",
      email: "",
      country: "",
      friends: "",
      followers: "",
      status: "Active",
    });

    setErrors({});
    setShowForm(false);
  };

  return (
    <>
      <Navbar />

      {/* BUTTON */}
      <div className="users-actions">
        <button
          className="add-user-btn"
          onClick={() => setShowForm(true)}
        >
          Add New +
        </button>
      </div>

      {/* LIST */}
      <main className="users-page">
        <div className="users-card">

          <div className="users-header">
            <div>#</div>
            <div>User Profile</div>
            <div>Country</div>
            <div>Friends</div>
            <div>Followers</div>
            <div>Status</div>
          </div>

          <div className="users-list">
            {userData.map((user) => (
              <UserList key={user.id} user={user} />
            ))}
          </div>

        </div>
      </main>

      {/* MODAL */}
      {showForm && (
        <div
          className="modal-overlay"
          onClick={() => setShowForm(false)}
        >
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h2>Add New User</h2>
              <button onClick={() => setShowForm(false)}>✕</button>
            </div>

            <form className="modal-form" onSubmit={addUser}>

              {/* NAME */}
              <div className="form-group">
                <label>Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? "error-input" : ""}
                />
                {errors.name && <span className="error">{errors.name}</span>}
              </div>

              {/* EMAIL */}
              <div className="form-group">
                <label>Email</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "error-input" : ""}
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>

              {/* COUNTRY */}
              <div className="form-group">
                <label>Country</label>
                <input
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className={errors.country ? "error-input" : ""}
                />
                {errors.country && <span className="error">{errors.country}</span>}
              </div>

              {/* ROW */}
              <div className="form-row">

                <div className="form-group">
                  <label>Friends</label>
                  <input
                    type="number"
                    name="friends"
                    value={formData.friends}
                    onChange={handleChange}
                    className={errors.friends ? "error-input" : ""}
                  />
                  {errors.friends && <span className="error">{errors.friends}</span>}
                </div>

                <div className="form-group">
                  <label>Followers</label>
                  <input
                    type="number"
                    name="followers"
                    value={formData.followers}
                    onChange={handleChange}
                    className={errors.followers ? "error-input" : ""}
                  />
                  {errors.followers && <span className="error">{errors.followers}</span>}
                </div>

              </div>

              {/* STATUS */}
              <div className="form-group">
                <label>Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="Active">Active</option>
                  <option value="Pending">Pending</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>

              {/* FOOTER */}
              <div className="modal-footer">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>

                <button type="submit" className="submit-btn">
                  Add User
                </button>
              </div>

            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Users;