import React from 'react';

interface ProductDescriptionProps {
  title: string;
  content: string;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({ title, content }) => {
  return (
    <div>
      <h2 className="font-bold text-lg">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default ProductDescription;