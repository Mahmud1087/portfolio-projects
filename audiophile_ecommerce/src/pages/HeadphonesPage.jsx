import React, { useState } from 'react';
import {
  Header,
  ProductComponent,
  SeeProductButton,
  ShopProducts,
} from '../components/main';
import { useProductsContex } from '../context/products_context';

export default function HeadphonesPage() {
  const { products } = useProductsContex();
  const data = products.filter((product) => product.category === 'headphones');
  return (
    <div>
      <Header text='HEADPHONES' />
      <section className='mt-32 mb-[4rem] sm:mt-56 lg:mt-[8rem]'>
        <div className='flex flex-col gap-[8rem] container'>
          {data.map((item) => {
            return (
              <ProductComponent key={item.id} {...item} product='HEADPHONES' />
            );
          })}
        </div>
      </section>
      <div className='container pt-40 sm:pt-36 sm:pb-5'>
        <ShopProducts />
      </div>
    </div>
  );
}
