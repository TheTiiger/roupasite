import Link from 'next/link';
import { IMAGES_SERVER } from '@/env';
import React from 'react';
import ProductDescription from '@/components/ProductDescription';

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
      <div className="">
        <p>{product.message}</p>
      </div>
    );
  }


  return (
    <div className="flex justify-center mt-8">
      <div className="flex w-11/12 shadow">
          <div className="w-96 h-96">
            <img className="object-cover h-full w-full rounded-l" src={IMAGES_SERVER + product.imagem} alt={product.name} />
          </div>
          <div className="p-4">
            <h1 className="font-bold text-xl">{product.name}</h1>
            <div className="p-2 bg-red-800 w-fit rounded text-white font-bold mt-2">
              <p>{new Intl.NumberFormat("pt-PT", {
                  style: "currency",
                  currency: 'EUR'
                }).format(product.preco)}</p>
            </div>
            <div className='flex mt-4 gap-2'>
              {product.stock.map((size) => (
                  <button disabled={!size.isAvailable} className={`p-2 w-10 flex justify-center rounded text-white ${!size.isAvailable ? "bg-zinc-300 hover:cursor-not-allowed" : "bg-red-500 hover:cursor-pointer hover:bg-red-600" }`}>{size.name}</button>
              ))}
            </div>
            <div className="mt-4">
              <ProductDescription description={product.descricao} />
            </div>
          </div>
      </div>
    </div>
  );
};
