// ProductGrid Component
import React, { Component } from 'react';
import ProductCard from '../ProductCard';
import "./index.css"

class ProductGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      this.setState({ products: data });
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  }

  render() {
    return (
      <div className="product-grid">
        {this.state.products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    );
  }
}

export default ProductGrid;
