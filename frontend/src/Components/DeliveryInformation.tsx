'use client';

import React from 'react';
import ProductDescription from './ProductDescription';

interface DeliveryInformationProps {
  content: string;
}

const DeliveryInformation: React.FC<DeliveryInformationProps> = ({ content }) => {
  console.log('DeliveryInformation content:', content);
  return (
    <div className="uppercase">
    <ProductDescription
      title="Entregas"
      content={content}
    />
    </div>
  );
};

export default DeliveryInformation;