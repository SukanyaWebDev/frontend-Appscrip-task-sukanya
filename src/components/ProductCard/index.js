// ProductCard Component
import "./index.css"
import React, { Component } from 'react';
import { CiHeart } from "react-icons/ci";

class ProductCard extends Component {
  render() {
    const { image, title, price } = this.props;

    return (
        
      <div className="product-card">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>${price}</p>
    
      </div>
      
    );
  }
}

export default ProductCard;
