
import { useEffect, useState } from "react";
import Navbar from "../../components/nav/Nav";
import { FiEdit, FiTrash2, FiPlus, FiX } from "react-icons/fi";
import "./Products.css";

const API_URL = "https://shop-backend-vjqf.vercel.app/api/products";
const emptyForm = {
  name: "",
  price: "",
  image: "",
  rating: "0",
  stars: "0",
  category: "tshirt",
  stock: "10",
};

const Products = ({ onLogout }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyForm);

  async function loadProducts() {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Products load nahi ho sake.");
      }

      const data = await response.json();
      setProducts(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(
        err.message === "Failed to fetch"
          ? "Backend se connection nahi ho raha. Check karo ke backend port 4000 par chal raha hai."
          : err.message
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);

  function openAddForm() {
    setEditingId(null);
    setForm(emptyForm);
    setMessage("");
    setError("");
    setShowForm(true);
  }

  function openEditForm(product) {
    setEditingId(product._id);

    setForm({
      name: product.name || "",
      price: String(product.price ?? ""),
      image: product.image || "",
      rating: String(product.rating ?? 0),
      stars: String(product.stars ?? 0),
      category: product.category || "tshirt",
      stock: String(product.stock ?? 0),
    });

    setMessage("");
    setError("");
    setShowForm(true);
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError("");
    setMessage("");

    const token = localStorage.getItem("adminToken");

    if (!token) {
      setError("Login session nahi mila. Dobara login karo.");
      setSaving(false);
      return;
    }

    const productData = {
      name: form.name.trim(),
      price: Number(form.price),
      image: form.image.trim(),
      rating: Number(form.rating),
      stars: Number(form.stars),
      category: form.category,
      stock: Number(form.stock),
    };

    try {
      const response = await fetch(
        editingId ? `${API_URL}/${editingId}` : API_URL,
        {
          method: editingId ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(productData),
        }
      );

      const data = await response.json().catch(() => ({}));

      if (response.status === 401 || response.status === 403) {
        throw new Error("Login expire ho gaya ya admin permission nahi hai. Dobara login karo.");
      }

      if (!response.ok) {
        throw new Error(data.message || "Product save nahi hua.");
      }

      setShowForm(false);
      setEditingId(null);
      setForm(emptyForm);
      setMessage(
        editingId
          ? "Product successfully update ho gaya."
          : "Product successfully add ho gaya."
      );

      await loadProducts();
    } catch (err) {
      setError(err.message || "Kuch ghalat ho gaya.");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(product) {
    const confirmed = window.confirm(
      `Kya tum "${product.name}" ko delete karna chahte ho?`
    );

    if (!confirmed) return;

    setError("");
    setMessage("");

    const token = localStorage.getItem("adminToken");

    if (!token) {
      setError("Login session nahi mila. Dobara login karo.");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/${product._id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json().catch(() => ({}));

      if (response.status === 401 || response.status === 403) {
        throw new Error("Login expire ho gaya ya admin permission nahi hai.");
      }

      if (!response.ok) {
        throw new Error(data.message || "Product delete nahi hua.");
      }

      setProducts((previous) =>
        previous.filter((item) => item._id !== product._id)
      );

      setMessage("Product delete ho gaya.");
    } catch (err) {
      setError(err.message || "Delete karte waqt error aaya.");
    }
  }

  const lowStock = products.filter(
    (product) => Number(product.stock || 0) < 5
  ).length;

  const categories = new Set(
    products.map((product) => product.category).filter(Boolean)
  ).size;

  const averageRating = products.length
    ? (
        products.reduce(
          (total, product) => total + Number(product.rating || 0),
          0
        ) / products.length
      ).toFixed(1)
    : "0.0";

  return (
    <>
      <Navbar onLogout={onLogout} />

      <div className="products">
        <div className="products-top">
          <div className="product-stat">
            <h2>{products.length}</h2>
            <p>Total Products</p>
          </div>

          <div className="product-stat">
            <h2>{categories}</h2>
            <p>Categories</p>
          </div>

          <div className="product-stat">
            <h2>{lowStock}</h2>
            <p>Low Stock</p>
          </div>

          <div className="product-stat">
            <h2>{averageRating} / 5</h2>
            <p>Average Rating</p>
          </div>
        </div>

        <div className="product-header">
          <div>
            <h1>Products</h1>
            <p>Manage your clothing products</p>
          </div>

          <button className="add-product-btn" onClick={openAddForm}>
            <FiPlus /> Add Product
          </button>
        </div>

        {error && <p className="products-error">{error}</p>}
        {message && <p className="products-success">{message}</p>}

        {loading ? (
          <p className="products-status">Loading products...</p>
        ) : products.length === 0 ? (
          <div className="products-status">
            <p>Abhi koi product nahi hai.</p>
            <button className="add-product-btn" onClick={openAddForm}>
              <FiPlus /> Add First Product
            </button>
          </div>
        ) : (
          <div className="products-grid">
            {products.map((item) => (
              <div className="product-card" key={item._id}>
                <div className="product-image">
                  <img
                    src={item.image}
                    alt={item.name}
                    onError={(e) => {
                      e.currentTarget.style.visibility = "hidden";
                    }}
                  />

                  <span
                    className={`stock-badge ${
                      Number(item.stock) >= 5 ? "success" : "danger"
                    }`}
                  >
                    {Number(item.stock) > 0
                      ? `${item.stock} in stock`
                      : "Out of Stock"}
                  </span>
                </div>

                <div className="product-info">
                  <span className="category-tag">{item.category}</span>

                  <h3>{item.name}</h3>

                  <p className="product-rating">
                    <span>★</span> {Number(item.rating || 0).toFixed(1)} / 5
                    <span className="rating-stars">
                      {"★".repeat(
                        Math.max(
                          0,
                          Math.min(5, Number(item.stars || 0))
                        )
                      )}
                    </span>
                  </p>

                  <div className="price-row">
                    <h2>${Number(item.price).toFixed(2)}</h2>
                  </div>

                  <div className="action-btns">
                    <button
                      className="edit-btn"
                      onClick={() => openEditForm(item)}
                      aria-label={`Edit ${item.name}`}
                      title="Edit product"
                    >
                      <FiEdit />
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(item)}
                      aria-label={`Delete ${item.name}`}
                      title="Delete product"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {showForm && (
        <div className="product-modal-overlay">
          <div
            className="product-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-form-title"
          >
            <div className="product-modal-header">
              <h2 id="product-form-title">
                {editingId ? "Edit Product" : "Add Product"}
              </h2>

              <button
                type="button"
                className="close-modal-btn"
                onClick={() => setShowForm(false)}
                aria-label="Close form"
              >
                <FiX />
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <label>
                Product Name
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  maxLength={120}
                  placeholder="e.g. Black Slim Fit T-shirt"
                />
              </label>

              <label>
                Price ($)
                <input
                  name="price"
                  type="number"
                  value={form.price}
                  onChange={handleChange}
                  min="0"
                  step="0.01"
                  required
                />
              </label>

              <label>
                Image Path
                <input
                  name="image"
                  value={form.image}
                  onChange={handleChange}
                  placeholder="/images/product1.png"
                />
              </label>

              <label>
                Category
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                >
                  <option value="tshirt">T-shirt</option>
                  <option value="shirts">Shirts</option>
                  <option value="pants">Pants</option>
                </select>
              </label>

              <div className="product-form-row">
                <label>
                  Rating
                  <input
                    name="rating"
                    type="number"
                    min="0"
                    max="5"
                    step="0.1"
                    value={form.rating}
                    onChange={handleChange}
                  />
                </label>

                <label>
                  Stars
                  <input
                    name="stars"
                    type="number"
                    min="0"
                    max="5"
                    step="1"
                    value={form.stars}
                    onChange={handleChange}
                  />
                </label>

                <label>
                  Stock
                  <input
                    name="stock"
                    type="number"
                    min="0"
                    step="1"
                    value={form.stock}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <button
                className="add-product-btn save-product-btn"
                type="submit"
                disabled={saving}
              >
                {saving
                  ? "Saving..."
                  : editingId
                    ? "Update Product"
                    : "Save Product"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
