import React from "react";
import Navbar from "../../components/nav/Nav";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import "./Products.css";

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    category: "Mobile",
    price: "$1200",
    stock: "In Stock",
    img: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg",
  },
  {
    id: 2,
    name: "MacBook Air M3",
    category: "Laptop",
    price: "$1450",
    stock: "In Stock",
    img: "https://images.pexels.com/photos/18105/pexels-photo.jpg",
  },
  {
    id: 3,
    name: "AirPods Pro",
    category: "Accessories",
    price: "$500",
    stock: "Low Stock",
    img: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg",
  },
  {
    id: 4,
    name: "Apple Watch",
    category: "Watch",
    price: "$450",
    stock: "In Stock",
    img: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg",
  },
 {
  id: 5,
  name: "Dell XPS",
  category: "Laptop",
  price: "$1800",
  stock: "In Stock",
  img: "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg",
},
  {
    id: 6,
    name: "Gaming Mouse",
    category: "Gaming",
    price: "$120",
    stock: "Low Stock",
    img: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg",
  },
];

const Products = () => {
  return (
    <>
      <Navbar />

      <div className="products">

        <div className="products-top">
          <div className="product-stat">
            <h2>{products.length}</h2>
            <p>Total Products</p>
          </div>

          <div className="product-stat">
            <h2>124</h2>
            <p>Total Orders</p>
          </div>

          <div className="product-stat">
            <h2>$45K</h2>
            <p>Total Revenue</p>
          </div>

          <div className="product-stat">
            <h2>
              {products.filter((p) => p.stock !== "In Stock").length}
            </h2>
            <p>Low Stock</p>
          </div>
        </div>

        <div className="product-header">
          <h1>Products</h1>
        </div>

        <div className="products-grid">
          {products.map((item) => (
            <div className="product-card" key={item.id}>

              <div className="product-image">
                <img src={item.img} alt={item.name} />

                <span
                  className={`stock-badge ${
                    item.stock === "In Stock"
                      ? "success"
                      : "danger"
                  }`}
                >
                  {item.stock}
                </span>
              </div>

              <div className="product-info">
                <span className="category-tag">
                  {item.category}
                </span>

                <h3>{item.name}</h3>

                <div className="price-row">
                  <h2>{item.price}</h2>
                </div>

                <div className="action-btns">
                  <button className="view-btn">
                    View
                  </button>

                  <button className="edit-btn">
                    <FiEdit />
                  </button>

                  <button className="delete-btn">
                    <FiTrash2 />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </>
  );
};

export default Products;