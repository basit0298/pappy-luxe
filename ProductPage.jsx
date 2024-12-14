import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products/products');
        setProducts(response.data);
      } catch (error) {
        setError('Error fetching products');
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Our Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product._id} className="product-item">
            {product.image && <img src={product.image} alt={product.name} />}
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Category: {product.category}</p>
            <p>${product.price}</p>
            <p>{product.inStock ? 'In Stock' : 'Out of Stock'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
