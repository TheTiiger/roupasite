import React, { useEffect, useState } from 'react';
import "../Components/CSS/Page.css";
import { IMAGES_SERVER } from '@/env';
import Link from 'next/link';
import Banner from "@/Components/Banner";

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
      <Banner />
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
        <div className='w-full mt-28 flex justify-center'>
        <div className="w-1/2 flex flex-col">
          <h2 className="font-bold text-2xl ">Make Your Own Rules</h2>
          <div className="grid grid-cols-3 gap-4 mt-8">
            {products.map((product: Product) => (
              <Link href={`/product/${product.id}`}>
                  <div key={product.id} className="flex flex-col w-full border shadow rounded-t">
                    <div className='w-full h-36 flex'>
                      <img src={IMAGES_SERVER + product.imagem} alt={product.name} className='object-cover rounded-t w-full' />
                    </div>
                    <div className='p-2'>
                      <h3 className="font-bold">{product.name}</h3>
                      <p>{product.preco} €</p>
                    </div>
                  </div>
              </Link>
            ))}
          </div>
        </div>
        </div>
      )}
    </div>
  );
}

export default Page;