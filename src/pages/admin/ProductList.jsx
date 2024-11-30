import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  function fetchdata() {
    fetch("http://localhost:3001/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }

  useEffect(() => {
    fetchdata();
  }, []);

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:3001/products/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      // Optimistically update the state (remove the product without refetching)
      setProducts(products.filter((product) => product.id !== id));
    } else {
      alert("Failed to delete the product");
    }
  };

  function display() {
    return products.map((product) => {
      return (
        <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.brand}</td>
          <td>{product.category}</td>
          <td>{product.price}</td>
          <td>{product.description}</td>
          <td>
            <img src={"../" + product.image} alt="" width={100} />
          </td>
          <td>{product.createdAt.slice(0, 10)}</td>
          <td>
            <Link
              className="btn btn-primary m-1"
              to={`../admin/update/${product.id}`}
            >
              <i className="bi bi-pencil"></i>
            </Link>

            <button
              className="btn btn-danger m-1"
              onClick={() => handleDelete(product.id)}
            >
              <i className="bi bi-trash"></i>
            </button>
          </td>
        </tr>
      );
    });
  }

  return (
    <div className="container">
      <div className="row mb-4">
        <div className="col-6">
          <Link
            type="button"
            className="btn btn-primary w-100"
            to="/admin/create"
          >
            Ajouter Produit
          </Link>
        </div>
        <div className="col-6">
          <button
            type="button"
            className="btn btn-primary w-100"
            onClick={fetchdata}
          >
            Refresh
          </button>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>brand</td>
            <td>category</td>
            <td>price</td>
            <td>description</td>
            <td>image</td>
            <td>create At</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>{display()}</tbody>
      </table>
    </div>
  );
}
