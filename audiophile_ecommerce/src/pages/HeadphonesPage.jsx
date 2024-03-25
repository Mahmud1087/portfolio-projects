import React, { useState } from 'react';
import { Header, ProductComponent, ShopProducts } from '../components/main';
import { products } from '../data';

export default function HeadphonesPage() {
  const data = products.filter((product) => product.category === 'headphones');
  return (
    <div>
      <Header text='HEADPHONES' />
      <section className='mt-[8rem] mb-[4rem]'>
        <div className='flex flex-col gap-[8rem] container'>
          {data.map((item) => {
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
