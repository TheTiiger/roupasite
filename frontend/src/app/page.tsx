import React, { useEffect, useState } from 'react';
import "../Components/CSS/Page.css";

async function Page() {

  const products = await (await fetch("http://localhost:5000/products")).json();

  return (
    <div>
    {products.length === 0 ? (
      <div className="typing-indicator">
        <div className="typing-circle"></div>
        <div className="typing-circle"></div>
        <div className="typing-circle"></div>
        <div className="typing-shadow"></div>
        <div className="typing-shadow"></div>
        <div className="typing-shadow"></div>
        <a href="#" className="btn-shine">Versão Beta</a>
      </div>
    ) : (
      <div className="products">
        {products.map((product, index) => (
          <div key={index} className="product">
            <h2>{product.name}</h2>
            <p>Descrição:  {product.description}</p>
            <p>Preço: {product.price}</p>
          </div>
        ))}
      </div>
    )}
  </div>
  );
}

export default Page;