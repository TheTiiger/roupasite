import Link from 'next/link';
import { IMAGES_SERVER } from '@/env';
import React from 'react';
import "@/Components/CSS/Paginacompra.css";

interface Erro {
  message: string;
}

interface Product {
  name: string
  id: string
  descricao: string
  preco: number
  imagem: string
  stock: Stock[]
  tipoartigos: Tipoartigos
}

interface Stock {
  isAvailable: boolean;
  name: string;
}

interface Tipoartigos {
  id: string
  name: string
}

export default async function ProductPage(props: any) {
  const res = await fetch(`http://localhost:5000/product/${props.params.id}`, {
    cache: "no-cache"
  });

  const product: Product | Erro = await res.json();

  if ('message' in product) {
    return (
      <div className="main-container">
        <p>{product.message}</p>
      </div>
    );
  }


  return (
    <div className="main-container">
      <div className="product-details">
        <div className="product-info-img">
          <img className="product-image" src={IMAGES_SERVER + product.imagem} alt={product.name} />
        </div>
        <div className='product-info'>
          <div className='product-info-name'>
            <h1 className="product-name">{product.name}</h1>
          </div>
          <div className='product-info-preco'>
            <p>{product.preco}$</p>
          </div>
          <div className='product-size'>
            {product.stock.map((size) => (
              <div className='product-uni'>
                <button disabled={!size.isAvailable} className={!size.isAvailable ? "block" : "normalBtn"}>{size.name}</button>
              </div>
            ))}
          </div>
          <div className='product-info-descricao'>
            <p>{product.descricao}</p>
          </div>
          <Link href="/">
            <p className="back-button">Adicionar Carrinho</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
