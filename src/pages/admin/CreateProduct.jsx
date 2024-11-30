import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateProduct() {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    id: "",
    name: "",
    brand: "",
    category: "",
    price: 0,
    description: "",
    image: "image.png",
    createdAt: new Date().toISOString(),
  });

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((response) => response.json())
      .then((products) => {
        
        const lastProductId = products.length > 0 ? products[products.length - 1].id : 0;
        const newId = (parseInt(lastProductId) + 1).toString();
        
        setProduct((prevState) => ({ ...prevState, id: newId }));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setProduct((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3001/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    if (response.ok) {
      setProduct({
        id: product.id + 1, 
        name: "",
        brand: "",
        category: "",
        price: 0,
        description: "",
        image: "image.png",
        createdAt: new Date().toISOString(),
      });

      navigate("/admin/list");
    } else {
      alert("Failed to add the product");
    }
  };


  return (
    <div className="container">
      <form id="productForm" className="p-4 border rounded">
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="productName"
            placeholder="Enter Product Name"
            name="name"
            onChange={handleChange}
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
          <label htmlFor="productPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            id="productPrice"
            placeholder="Enter Product Price"
            name="price"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productDescription" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="productDescription"
            rows="3"
            placeholder="Enter Product Description"
            name="description"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="productImage" className="form-label">
            Image
          </label>
          <input
            type="text"
            className="form-control"
            id="productImage"
            placeholder="Enter Image Filename (e.g., image.png)"
            name="image"
            onChange={handleChange}
          />
        </div>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleSubmit}
        >
          Ajouter Produit
        </button>
      </form>
    </div>
  );
}
