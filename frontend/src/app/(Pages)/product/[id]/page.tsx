"use client";

import React, { useState, useEffect } from "react";
import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IMAGES_SERVER } from "@/env";
import ProductDescription from "@/components/ProductDescription";
import DeliveryInformation from "@/components/DeliveryInformation";
import ReturnInformation from "@/components/ReturnInformation";
import StarRating from "@/components/StarRating";
import ImageGallery from "@/components/ImageGallery";

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

export default function ProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | Erro | null>(null);
  const [loading, setLoading] = useState(true);
  const [showMoreReviews, setShowMoreReviews] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`http://localhost:5000/product/${params.id}`, {
          cache: "no-cache",
        });

        const data: Product | Erro = await res.json();
        setProduct(data);
      } catch (error) {
        setProduct({ message: "Erro ao carregar o produto" });
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (product && "message" in product) {
    return (
      <div className="flex justify-center mt-16 mb-16">
        <p>{product.message}</p>
      </div>
    );
  }

  const deliveryContent = "Informações sobre política de entregas.";
  const returnContent = "Informações sobre política de devoluções.";

  const closeOverlay = () => setShowMoreReviews(false);

  return (
    <div className="flex flex-col md:flex-row justify-center mt-16 mb-16 w-full min-h-screen px-4">
      <div className="flex flex-col md:flex-row w-full max-w-screen-2xl mx-auto shadow-top-light bg-white shadow-md rounded-lg overflow-hidden">
        <div className="w-full md:w-1/2 bg-white shadow-md flex-grow h-full">
          <ImageGallery product={product} imagesServer={IMAGES_SERVER} />
        </div>
        <div className="p-4 w-full md:w-1/2 flex flex-col">
          <div className="flex items-center mb-2">
            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl line-clamp-2 flex-grow">
              {product?.name}
            </h1>
            <span
              className="group text-red-800 flex items-center mr-2 cursor-pointer"
              style={{ fontSize: "1.7em" }}
            >
              <FaRegHeart className="group-hover:hidden" />
              <FaHeart className="hidden group-hover:block text-red-800" />
            </span>
          </div>
          <div className="text-red-800 font-bold text-xl mb-4">
            <p>
              {product &&
                new Intl.NumberFormat("pt-PT", {
                  style: "currency",
                  currency: "EUR",
                }).format(product.preco)}
            </p>
          </div>
          <div>
            <h2 className="uppercase font-bold text-lg">Medidas</h2>
            <div className="flex mt-2 gap-2 flex-wrap">
              {product &&
                product.stock.map((size) => (
                  <button
                    key={size.name}
                    disabled={!size.isAvailable}
                    className={`p-2 w-16 flex justify-center rounded text-white ${
                      !size.isAvailable
                        ? "bg-zinc-300 line-through hover:cursor-not-allowed"
                        : "bg-black hover:cursor-pointer hover:bg-red-800"
                    }`}
                  >
                    {size.name}
                  </button>
                ))}
            </div>
          </div>

          <div className="mt-4">
            {product && (
              <ProductDescription
                title="Características"
                content={product.descricao}
              />
            )}
            <DeliveryInformation content={deliveryContent} />
            <ReturnInformation content={returnContent} />
          </div>

          <div className="flex justify-left mt-4 mb-4">
            <button className="bg-red-800 border-2 border-red-800 text-white font-bold py-2 px-6 rounded shadow transition duration-300 hover:bg-red-700 hover:border-red-700 flex items-center">
              Adicionar ao Carrinho
            </button>
          </div>

          <div>
            <h1 className="uppercase font-bold mt-4 ml-4 mb-2">
              Avaliações (2)
            </h1>
          </div>
          <div className="ml-4 flex items-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="text-red-800 cursor-pointer"
              height="30"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"></path>
            </svg>
            <input
              type="text"
              placeholder="Escreva uma Avaliação..."
              className="w-full md:w-1/2 ml-4 p-1 border border-gray-200 shadow-md text-gray-700"
            />
            <div>
              <StarRating />
            </div>
          </div>
          <div className="mt-3 ml-4 flex items-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="text-red-800 cursor-pointer"
              height="30"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"></path>
            </svg>
            <p className="w-full md:w-1/2 ml-4 text-gray-700">
              Recentemente adquiri as Nike Dunk Low Black White Panda e estou
              extremamente satisfeito.
            </p>
            <div className="ml-2.5 flex items-center text-2xl">
              <TiStarFullOutline className="text-red-800" />
              <TiStarFullOutline className="text-red-800" />
              <TiStarFullOutline className="text-red-800" />
              <TiStarFullOutline className="text-red-800" />
              <TiStarOutline className="text-red-800" />
            </div>
          </div>

          <div className="mt-3 ml-4 flex items-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="text-red-800 cursor-pointer"
              height="30"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"></path>
            </svg>
            <p className="w-full md:w-1/2 ml-4 text-gray-700">
              Bom dia, meu nome é Nando e recentemente adquiri umas sapatilhas
              da Nike chamadas "Nike Dunk Low black and white panda" e gostei
              muito.
            </p>
            <div className="ml-2.5 flex items-center text-2xl">
              <TiStarFullOutline className="text-red-800" />
              <TiStarFullOutline className="text-red-800" />
              <TiStarFullOutline className="text-red-800" />
              <TiStarFullOutline className="text-red-800" />
              <TiStarOutline className="text-red-800" />
            </div>
          </div>

          {/* Botão para exibir mais avaliações */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setShowMoreReviews(!showMoreReviews)}
              className="bg-red-800 text-white font-bold py-1.5 px-6 text-sm rounded shadow transition duration-300 hover:bg-red-700"
            >
              {showMoreReviews ? "Ver Menos" : "Ver Mais Avaliações"}
            </button>
          </div>

          {/* Seção de mais avaliações com efeito de zoom */}
          {showMoreReviews && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center z-50">
              <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full h-auto relative transform scale-110 transition-transform duration-300">
                <button
                  onClick={closeOverlay}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
                >
                  ×
                </button>
                <h1 className="text-2xl font-bold mb-4">Mais Avaliações</h1>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      className="text-red-800 cursor-pointer"
                      height="30"
                      width="30"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"></path>
                    </svg>
                    <p className="w-full md:w-1/2 ml-4 text-gray-700">
                      Outra avaliação sobre o produto que foi adicionada
                      recentemente.
                    </p>
                    <div className="ml-2.5 flex items-center text-2xl">
                      <TiStarFullOutline className="text-red-800" />
                      <TiStarFullOutline className="text-red-800" />
                      <TiStarFullOutline className="text-red-800" />
                      <TiStarOutline className="text-red-800" />
                      <TiStarOutline className="text-red-800" />
                    </div>
                  </div>
                  {/* Adicione mais avaliações aqui se necessário */}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}