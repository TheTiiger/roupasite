import Link from 'next/link';
import { IMAGES_SERVER } from '@/env';
import React from 'react';
import ProductDescription from '@/components/ProductDescription';
import DeliveryInformation from '@/components/DeliveryInformation';
import ReturnInformation from '@/components/ReturnInformation';

interface Erro {
  message: string;
}

interface Product {
  name: string;
  id: string;
  descricao: string;
  preco: number;
  productimages: ProductImages[];
  stock: Stock[];
}

interface ProductImages {
  id: string;
  image: string;
}

interface Stock {
  isAvailable: boolean;
  name: string;
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

  const deliveryContent = "Informações sobre política de entregas.";
  const returnContent = "Informações sobre política de devoluções.";

  return (
    <div className="flex justify-center mt-8">
      <div className="flex w-11/12 shadow">
        <div className="w-96 h-96">
          {product.productimages.map((pi) => (
            <img 
              key={pi.id} 
              className="object-cover h-full w-full rounded-l" 
              src={IMAGES_SERVER + pi.image} 
              alt={product.name} 
            />
          ))}
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
              <button 
                key={size.name} 
                disabled={!size.isAvailable} 
                className={`p-2 w-10 flex justify-center rounded text-white ${!size.isAvailable ? "bg-zinc-300 hover:cursor-not-allowed" : "bg-black hover:cursor-pointer hover:bg-red-800"}`}
              >
                {size.name}
              </button>
            ))}
          </div>
          <div className="mt-4">
            <ProductDescription title="Caracteristicas" content={product.descricao} />
          </div>
          <div className="mt-4">
            <DeliveryInformation content={deliveryContent} />
          </div>
          <div className="mt-4">
            <ReturnInformation content={returnContent} />
          </div>
          <div className="mt-4">
            <button className="bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
