import React from 'react';
import {
  XX59Headphones,
  XX99Mark1Headphones,
  XX99Mark2Headphones,
} from '../components/headphones/main';
import { Header, ProductComponent, ShopProducts } from '../components/main';
import { headphoneProductDetails } from '../data';

export default function EarphonesPage() {
  return (
    <div>
      <Header text='HEADPHONES' />
      <section className='mt-[8rem] mb-[4rem]'>
        <div className='flex flex-col gap-[8rem] container'>
          {headphoneProductDetails.map((item) => {
            return <ProductComponent {...item} product='HEADPHONES' />;
          })}
        </div>
      </section>
      <ShopProducts />
    </div>
  );
}
