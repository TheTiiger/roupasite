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
    <div className="bg-gray-100 min-h-screen">
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
        <div className="w-4/5 flex flex-col">
          <h2 className="font-bold text-2xl mb-8">Make Your Own Rules</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product: Product) => (
                <Link href={`/product/${product.id}`} key={product.id} className="w-full">
                <div className="w-56 flex flex-col bg-white border shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className='h-52'>
                    <img src={IMAGES_SERVER + product.imagem} alt={product.name} className='object-cover w-full h-full' />
                  </div>
                    <div className='p-2'>
                      <h3 className="font-bold uppercase">{product.name}</h3>
                      <p className="tracking-wider font-price">{new Intl.NumberFormat("pt-PT", {
                        style: "currency",
                        currency: 'EUR'
                      }).format(product.preco)}</p>
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