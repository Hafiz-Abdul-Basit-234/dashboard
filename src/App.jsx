


import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./components/Loginpage";
import Dashbord from "./pages/dashbord/Dashbord";
import Users from "./pages/users/Users";
import Order from "./pages/orders/Order";
import Products from "./pages/products/Products";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => !!localStorage.getItem("adminToken")
  );

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

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
            <Products onLogout={handleLogout} />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />

      <Route
        path="/orders"
        element={
          isLoggedIn ? (
            <Order onLogout={handleLogout} />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />

      <Route
        path="/users"
        element={
          isLoggedIn ? (
            <Users onLogout={handleLogout} />
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

