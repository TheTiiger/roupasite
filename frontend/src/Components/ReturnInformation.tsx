'use client';

import React from 'react';
import ProductDescription from './ProductDescription';

interface ReturnInformationProps {
  content: string;
}

const ReturnInformation: React.FC<ReturnInformationProps> = ({ content }) => {
  console.log('ReturnInformation content:', content); // Log to check content
  return (
    <ProductDescription
      title="Devoluções"
      content={content}
    />
  );
};

export default ReturnInformation;
