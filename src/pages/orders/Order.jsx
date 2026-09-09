import React, { useState } from "react";
import Navbar from "../../components/nav/Nav";
import "./Order.css";

const ordersData = [
  { id: "#1001", customer: "Ali Khan", product: "iPhone 15 Pro", amount: "$1200", status: "Delivered", image: "https://i.pravatar.cc/150?img=1" },
  { id: "#1002", customer: "Ahmed Raza", product: "MacBook Air M3", amount: "$1450", status: "Pending", image: "https://i.pravatar.cc/150?img=2" },
  { id: "#1003", customer: "Sara Ahmed", product: "AirPods Pro", amount: "$500", status: "Processing", image: "https://i.pravatar.cc/150?img=3" },
  { id: "#1004", customer: "Bilal Ahmed", product: "Dell XPS", amount: "$1800", status: "Delivered", image: "https://i.pravatar.cc/150?img=4" },
  { id: "#1005", customer: "Fatima Noor", product: "Apple Watch", amount: "$450", status: "Pending", image: "https://i.pravatar.cc/150?img=5" },
  { id: "#1006", customer: "Usman Tariq", product: "Gaming Mouse", amount: "$120", status: "Delivered", image: "https://i.pravatar.cc/150?img=6" },
  { id: "#1007", customer: "Zain Malik", product: "Mechanical Keyboard", amount: "$180", status: "Processing", image: "https://i.pravatar.cc/150?img=7" },
  { id: "#1008", customer: "Hassan Ali", product: "Sony Headphones", amount: "$350", status: "Pending", image: "https://i.pravatar.cc/150?img=8" },
];

const Order = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredOrders = ordersData.filter((order) => {
    return (
      (filter === "All" || order.status === filter) &&
      order.customer.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <>
      <Navbar />

      <div className="orders-page">
        {/* Top Section */}
       {/* Top Section */}
<div className="orders-top">
  <div className="orders-title">
    <h1>Orders</h1>
    <p>Manage and track all customer orders</p>
  </div>

  <div className="orders-stats">
    <div className="stat-box">
      <span>Total</span>
      <h3>{ordersData.length}</h3>
    </div>

    <div className="stat-box delivered">
      <span>Delivered</span>
      <h3>{ordersData.filter(o => o.status === "Delivered").length}</h3>
    </div>

    <div className="stat-box pending">
      <span>Pending</span>
      <h3>{ordersData.filter(o => o.status === "Pending").length}</h3>
    </div>
  </div>
</div>

        {/* Filters */}
        <div className="orders-controls">
          <input
            type="text"
            placeholder="Search customer..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select onChange={(e) => setFilter(e.target.value)}>
            <option>All</option>
            <option>Delivered</option>
            <option>Pending</option>
            <option>Processing</option>
          </select>
        </div>

        {/* Table */}
        <div className="orders-card">
          <div className="orders-header">
            <div>ID</div>
            <div>Customer</div>
            <div>Product</div>
            <div>Amount</div>
            <div>Status</div>
          </div>

          {filteredOrders.map((order) => (
            <div className="order-row" key={order.id}>
              <div>{order.id}</div>

              <div className="customer-info">
                <img src={order.image} alt="" />
                <span>{order.customer}</span>
              </div>

              <div>{order.product}</div>
              <div>{order.amount}</div>

              <div>
                <span className={`status ${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Order;