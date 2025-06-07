import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product,index }) => {

  return (
    <div key={index} className={product.inStock ? 'productInStock' : 'outOfStockClass'}>
      {/* TODO: Display product name */}
      <h3 className= {styles.productTitle}>{product.name}</h3>
      {/* TODO: Display product price */}
      <p className= {styles.productPrice}>{product.price}</p>
      {/* TODO: Show if the product is in stock or out of stock */}
      <p>{product.inStock ? "product is in stock" : "product is out of stock"}</p>
      
    </div>
  );
};

export default ProductCard;
