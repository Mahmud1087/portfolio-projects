import React from 'react';
import { YX1Earphone } from '../components/earphones/main';
import { Header, ProductComponent, ShopProducts } from '../components/main';
import { eaphoneProductDetails } from '../data';

export default function EarphonesPage() {
  return (
    <div>
      <Header text='EARPHONES' />
      <section className='mt-[8rem] mb-[4rem]'>
        <div className='flex flex-col gap-[8rem] container'>
          {eaphoneProductDetails.map((item) => {
            return <ProductComponent {...item} product='EARPHONES' />;
          })}
        </div>
      </section>
      <ShopProducts />
    </div>
  );
}
