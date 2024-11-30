import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function UpdateProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    id: "",
    name: "",
    brand: "",
    category: "",
    price: "",
    description: "",
    image: "",
    createdAt: "",
  });

  useEffect(() => {
    fetch(`http://localhost:3001/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`http://localhost:3001/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    if (response.ok) {
      alert("Product updated successfully!");
      navigate("/admin/list");
    } else {
      alert("Failed to update the product.");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Update Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productBrand" className="form-label">
            Brand
          </label>
          <select
            className="form-select"
            id="productBrand"
            name="brand"
            onChange={handleChange}
          >
            <option value="">Choisir Brand...</option>
            <option value="TechBrand">TechBrand</option>
            <option value="FitWear">FitWear</option>
            <option value="MobileCorp">MobileCorp</option>
            <option value="SoundWave">SoundWave</option>
            <option value="StyleWear">StyleWear</option>
            <option value="AdventureCo">AdventureCo</option>
            <option value="HomeEssentials">HomeEssentials</option>
            <option value="VisionTech">VisionTech</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="productCategory" className="form-label">
            Category
          </label>
          <select
            className="form-select"
            id="productCategory"
            name="category"
            onChange={handleChange}
          >
            <option value="">Choisir Category...</option>
            <option value="Electronics">Electronics</option>
            <option value="Sportswear">Sportswear</option>
            <option value="Accessories">Accessories</option>
            <option value="Wearables">Wearables</option>
            <option value="Apparel">Apparel</option>
            <option value="Sports">Sports</option>
            <option value="Appliances">Appliances</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            name="description"
            rows="3"
            value={product.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Image</label>
          <input
            type="text"
            className="form-control"
            name="image"
            value={product.image}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-success">
          Update Product
        </button>
        <button
          type="button"
          className="btn btn-secondary ms-2"
          onClick={() => navigate("/admin/list")}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
