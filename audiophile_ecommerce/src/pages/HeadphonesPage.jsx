import React from 'react';
import {
  XX59Headphones,
  XX99Mark1Headphones,
  XX99Mark2Headphones,
} from '../components/headphones/main';
import { Header, ShopProducts } from '../components/main';

export default function EarphonesPage() {
  return (
    <div>
      <Header />
      <XX99Mark2Headphones />
      <XX99Mark1Headphones />
      <XX59Headphones />
      <ShopProducts />
    </div>
  );
}
