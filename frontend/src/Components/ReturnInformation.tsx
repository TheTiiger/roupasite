'use client';

import React from 'react';
import ProductDescription from './ProductDescription';

interface ReturnInformationProps {
  content: string;
}

const ReturnInformation: React.FC<ReturnInformationProps> = ({ content }) => {
  console.log('ReturnInformation content:', content);
  return (
    <div className="uppercase">
    <ProductDescription
      title="Devoluções"
      content={content}
    />
    </div>
  );
};

export default ReturnInformation;