import React, { useEffect, useState } from 'react';
import "../Components/CSS/Page.css";
import { IMAGES_SERVER } from '@/env';
import Link from 'next/link';

interface Product {
  name: string;
  id: string;
  descricao: string;
  preco: number;
  imagem: string;
}

async function Page() {

  const products = await (await fetch("http://localhost:5000/products", {
    cache: "no-cache"
  })).json();

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
        <div className="container-product">
          {products.map((product: Product) => (
            <div key={product.id}>
              <Link href={`/product/${product.id}`}>
                  <div className="product">
                    <img className='product-image' src={IMAGES_SERVER + product.imagem} alt={product.name} />
                    <h3 className="product-name">{product.name}</h3>
                    <p className = "product-description">  {product.descricao}</p>
                    <p>{product.preco}$</p>
                  </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Page;