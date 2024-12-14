import React from "react";
import "./Store.css";  

function Store() {
  return (
    <div className="store">
      <h2>Product Listings</h2>
      <div className="product-list">

        <div className="product">
          <img src="product1.jpg" alt="Product 1" />
          <p>Product 1</p>
        </div>
      </div>
    </div>
  );
}

export default Store;
