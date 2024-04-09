import React from 'react';
import { Header, ProductComponent, ShopProducts } from '../components/main';
import { useProductsContex } from '../context/products_context';

export default function EarphonesPage() {
  const { products } = useProductsContex();
  const data = products.filter((product) => product.category === 'earphones');

  return (
    <div>
      <Header text='EARPHONES' />
      <section className='mt-32 mb-[4rem] sm:mt-56 lg:mt-[8rem]'>
        <div className='flex flex-col gap-[8rem] container'>
          {data.map((item) => {
            return (
              <ProductComponent key={item.id} {...item} product='EARPHONES' />
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
