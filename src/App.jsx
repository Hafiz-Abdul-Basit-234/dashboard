
import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./components/Loginpage";
import Dashbord from "./pages/dashbord/Dashbord";
import Users from "./pages/users/Users";
import Order from "./pages/orders/Order";
import Products from "./pages/products/Products";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // App open ya refresh hone par purana login clear karo
  useEffect(() => {
    localStorage.removeItem("adminToken");
  }, []);

  // Successful login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setIsLoggedIn(false);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          isLoggedIn ? (
            <Navigate to="/dashbord" replace />
          ) : (
            <LoginPage onLogin={handleLogin} />
          )
        }
      />

      <Route
        path="/dashbord"
        element={
          isLoggedIn ? (
            <Dashbord onLogout={handleLogout} />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />

      <Route
        path="/products"
        element={
          isLoggedIn ? (
            <Products />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />

      <Route
        path="/orders"
        element={
          isLoggedIn ? (
            <Order />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />

      <Route
        path="/users"
        element={
          isLoggedIn ? (
            <Users />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
