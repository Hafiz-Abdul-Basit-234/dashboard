import React from "react";
import Navbar from "../../components/nav/Nav";
import "./Order.css";
const orders = [{ id: "#1001", customer: "Ali Khan", product: "iPhone 15 Pro", amount: "$1200", status: "Delivered", image: "https://i.pravatar.cc/150?img=1", }, { id: "#1002", customer: "Ahmed Raza", product: "MacBook Air M3", amount: "$1450", status: "Pending", image: "https://i.pravatar.cc/150?img=2", },
     { id: "#1003", customer: "Sara Ahmed", product: "AirPods Pro", amount: "$500", status: "Processing", image: "https://i.pravatar.cc/150?img=3", }, { id: "#1004", customer: "Bilal Ahmed", product: "Dell XPS", amount: "$1800", status: "Delivered", image: "https://i.pravatar.cc/150?img=4", }, 
     { id: "#1005", customer: "Fatima Noor", product: "Apple Watch", amount: "$450", status: "Pending", image: "https://i.pravatar.cc/150?img=5", },
      { id: "#1006", customer: "Usman Tariq", product: "Gaming Mouse", amount: "$120", status: "Delivered", image: "https://i.pravatar.cc/150?img=6", }, { id: "#1007", customer: "Zain Malik", product: "Mechanical Keyboard", amount: "$180", status: "Processing", image: "https://i.pravatar.cc/150?img=7", }, 
      { id: "#1008", customer: "Hassan Ali", product: "Sony Headphones", amount: "$350", status: "Pending", image: "https://i.pravatar.cc/150?img=8", },];
       const Order = () => { 
        return (
        <> <Navbar />
         <div className="orders-page">
             <div className="orders-top">
                 <div> <h1>Orders</h1>
                  <p>Manage all customer orders</p>
                   </div> <button className="add-order-btn"> + New Order </button> </div> <div className="orders-card"> <div className="orders-header"> <div>Order ID</div> <div>Customer</div> <div>Product</div> <div>Amount</div> <div>Status</div> </div> {orders.map((order) => (<div className="order-row" key={order.id}> <div>{order.id}</div> <div className="customer-info"> <img src={order.image} alt={order.customer} /> <span>{order.customer}</span> </div> <div>{order.product}</div> <div>{order.amount}</div> <div> <span className={`status ${order.status.toLowerCase()}`} > {order.status} </span> </div> </div>))} </div> </div> </>); };
export default Order;