import Link from 'next/link';
import { IMAGES_SERVER } from '@/env';
import React from 'react';
import "@/Components/CSS/Paginacompra.css";

interface Product {
  name: string;
  id: string;
  descricao: string;
  preco: number;
  imagem: string;
}

export default async function ProductPage(props) {
  const res = await fetch(`http://localhost:5000/product/${props.params.id}`,{
    cache: "no-cache"
  });
  const product = await res.json();

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
            <p>Escolha o tamanho</p>
            <select name="size" id="size">
              <option value="small">S</option>
              <option value="medium">M</option>
              <option value="large"></option>
            </select>
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
