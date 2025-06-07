import React, { useState } from 'react';
import ProductCard from './ProductCard';
import styles from '../styles/ProductCard.module.css';

const ProductList = ({ products }) => {
const [displayProducts, setDisplayProducts] = useState(products);
  // TODO: Check if the product list is empty and display a message if needed
function validateProducts(){
  if (products.length === 0){
    console.log("no products listed");
  }
}
const handleDelete =(id)=>{
  const filtered = products.filter(p => p.id !== id);
  setDisplayProducts(filtered);
};
  return (
    <div>
      {/* TODO: Iterate over the products array and render a ProductCard for each product */}
      {displayProducts.map((product,index)=>(
        <div key={index} className={styles.productContainer} >
          <ProductCard key={index} product={product} index={index}/>
          <button onClick={() => handleDelete(product.id)}>Remove</button>
       </div>
      ))}
    </div>
  );
};

export default ProductList;
