'use client';

import React, { useState } from 'react';
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

interface ProductDescriptionProps {
  title: string;
  content: string;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-t border-b border-l-8 border-l-transparent border-gray-200 my-4">
      <div className="my-2 flex justify-between items-center cursor-pointer" onClick={toggleOpen}>
        <h2 className="font-bold text-base uppercase">{title}</h2>
        <div className="text-sm">
          {isOpen ? <SlArrowUp /> : <SlArrowDown />}
        </div>
      </div>
      {isOpen && <p className="normal-case border-b-8 border-transparent">{content}</p>}
    </div>
  );
};

export default ProductDescription;