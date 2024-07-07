'use client';

import { useState } from 'react';
import { SlArrowUp, SlArrowDown } from 'react-icons/sl';

interface ProductDescriptionProps {
  description: string;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({ description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDescription = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mt-8 mb-2">
      <div className="border-t border-b border-gray-100">
        <div className="flex justify-between items-center cursor-pointer p-4" onClick={toggleDescription}>
          <h1 className="font-bold text-base uppercase">Caracteristicas</h1>
          <span className="text-xl">
            {isOpen ? <SlArrowUp /> : <SlArrowDown />}
          </span>
        </div>
        {isOpen && (
          <div className="mt-4 text-gray-700 p-4">
            {description}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDescription;