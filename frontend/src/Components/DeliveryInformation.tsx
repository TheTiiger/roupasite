'use client';

import React from 'react';
import ProductDescription from './ProductDescription';

interface DeliveryInformationProps {
  content: string;
}

const DeliveryInformation: React.FC<DeliveryInformationProps> = ({ content }) => {
  console.log('DeliveryInformation content:', content);
  return (
    <ProductDescription
      title="Entregas"
      content={content}
    />
  );
};

export default DeliveryInformation;