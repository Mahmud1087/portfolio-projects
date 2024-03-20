import React from 'react';
import { ZX7Speakers, ZX9Speaker } from '../components/speakers/main';
import { Header, ShopProducts } from '../components/main';

export default function SpeakersPage() {
  return (
    <div>
      <Header />
      <ZX9Speaker />
      <ZX7Speakers />
      <ShopProducts />
    </div>
  );
}
