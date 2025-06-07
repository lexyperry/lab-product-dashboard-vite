import React, { useState } from 'react';
import ProductList from './components/ProductList';

const App = () => {
  const dashboardTitle ="Product Dashboard";
  // TODO: Define initial product data
let products =[{ "id": 1, "name": "Laptop", "price": "$999", "inStock": true },
    { "id": 2, "name": "Phone", "price": "$699", "inStock": false },
    { "id": 3, "name": "Tablet", "price": "$499", "inStock": true }
  ];
  // TODO: Implement state to manage filtering

  // TODO: Implement logic to filter products based on availability

  return (
    <div>
      <h1 id="header">{dashboardTitle}</h1>
      
      {/* TODO: Add buttons to allow filtering by availability */}

      {/* TODO: Render the ProductList component and pass filtered products */}
      <ProductList products={products} />
    </div>
  );
};

export default App;
