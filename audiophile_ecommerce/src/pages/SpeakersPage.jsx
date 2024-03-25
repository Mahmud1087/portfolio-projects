import React from 'react';
import { Header, ProductComponent, ShopProducts } from '../components/main';
import { products } from '../data';

export default function SpeakersPage() {
  const data = products.filter((product) => product.category === 'speakers');

  return (
    <div>
      <Header text='SPEAKERS' />
      <section className='mt-[8rem] mb-[4rem]'>
        <div className='flex flex-col gap-[8rem] container'>
          {data.map((item) => {
            return (
              <ProductComponent key={item.id} {...item} product='SPEAKERS' />
            );
          })}
        </div>
      </section>
      <ShopProducts />
    </div>
  );
}
