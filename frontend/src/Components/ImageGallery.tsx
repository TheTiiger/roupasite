"use client";
import React, { useState } from "react";

const ImageGallery = ({ product, imagesServer }) => {
  const [modalImgSrc, setModalImgSrc] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (src) => {
    setModalImgSrc(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col w-full max-w-full h-full bg-white shadow-md p-0">
      {product.productimages.length > 0 && (
        <div className="flex flex-col h-full">
          <div className="flex-grow w-full flex justify-center items-center">
            <img
              key={product.productimages[0].id}
              className="object-contain max-w-full max-h-[40vh] cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
              src={imagesServer + product.productimages[0].image}
              alt={product.name}
              onClick={() =>
                handleImageClick(imagesServer + product.productimages[0].image)
              }
            />
          </div>

          <div className="flex flex-wrap w-full mt-2">
            {product.productimages.slice(1, 3).map((pi) => (
              <div key={pi.id} className="w-1/2 p-1">
                <img
                  className="object-contain w-full h-auto cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
                  src={imagesServer + pi.image}
                  alt={product.name}
                  onClick={() => handleImageClick(imagesServer + pi.image)}
                />
              </div>
            ))}
          </div>
        </div>
      )}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl bg-white shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
              onClick={closeModal}
            >
              &times;
            </span>
            <img className="w-full h-auto" src={modalImgSrc} alt="Zoomed" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;