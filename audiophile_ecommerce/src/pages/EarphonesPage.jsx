import React from 'react';
import { Header, ProductComponent, ShopProducts } from '../components/main';
import { products } from '../data';

export default function EarphonesPage() {
  const data = products.filter((product) => product.category === 'earphones');

  return (
    <div>
      <Header text='EARPHONES' />
      <section className='mt-[8rem] mb-[4rem]'>
        <div className='flex flex-col gap-[8rem] container'>
          {data.map((item) => {
            return (
              <ProductComponent key={item.id} {...item} product='EARPHONES' />
            );
          })}
        </div>
      </section>
      <ShopProducts />
    </div>
  );
}
