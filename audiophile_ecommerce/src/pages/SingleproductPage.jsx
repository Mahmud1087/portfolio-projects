import React from 'react';
import { useParams } from 'react-router-dom';

export default function SingleproductPage() {
  const { productId } = useParams();
  // console.log(params);
  return <div>SingleproductPage: {productId}</div>;
}
