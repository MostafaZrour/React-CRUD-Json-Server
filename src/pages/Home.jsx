import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  function getProducts() {
    return products.map((product) => (
      <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={product.id}>
        <div className="card h-100 p-2">
          <img
            src={product.image}
            className="card-img-top rounded border"
            alt={product.name}
            style={{ height: "200px", objectFit: "cover" }}
          />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{product.brand}</h6>
            <p className="card-text">{product.description}</p>
            <p className="card-text">
              <strong>Category:</strong> {product.category}
            </p>
            <p className="card-text">
              <strong>Price:</strong> ${product.price}
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Created at: {product.createdAt}</small>
          </div>
        </div>
      </div>
    ));
  }

  return (
    <div className="container">
      <div className="row">{getProducts()}</div>
    </div>
  );
};

export default Home;
