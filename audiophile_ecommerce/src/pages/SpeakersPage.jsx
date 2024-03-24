import React from 'react';
import { Header, ProductComponent, ShopProducts } from '../components/main';
import { speakerProductDetails } from '../data';

export default function SpeakersPage() {
  return (
    <div>
      <Header text='SPEAKERS' />
      <section className='mt-[8rem] mb-[4rem]'>
        <div className='flex flex-col gap-[8rem] container'>
          {speakerProductDetails.map((item) => {
            return (
              <ProductComponent key={item.id} {...item} product='HEADPHONES' />
            );
          })}
        </div>
      </section>
      <ShopProducts />
    </div>
  );
}
