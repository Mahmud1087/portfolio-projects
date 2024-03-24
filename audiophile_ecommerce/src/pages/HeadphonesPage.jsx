import React from 'react';
import { Header, ProductComponent, ShopProducts } from '../components/main';
import { headphoneProductDetails } from '../data';

export default function EarphonesPage() {
  return (
    <div>
      <Header text='HEADPHONES' />
      <section className='mt-[8rem] mb-[4rem]'>
        <div className='flex flex-col gap-[8rem] container'>
          {headphoneProductDetails.map((item) => {
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
