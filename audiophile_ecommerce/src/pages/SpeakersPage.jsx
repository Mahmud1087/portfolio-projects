import React from 'react';
import {
  Header,
  ProductComponent,
  SeeProductButton,
  ShopProducts,
} from '../components/main';
import { useProductsContex } from '../context/products_context';

export default function SpeakersPage() {
  const { products } = useProductsContex();
  const data = products.filter((product) => product.category === 'speakers');

  return (
    <div>
      <Header text='SPEAKERS' />
      <section className='mt-56 mb-[4rem] lg:mt-[8rem]'>
        <div className='flex flex-col gap-[8rem] container'>
          {data.map((item) => {
            return (
              <ProductComponent
                key={item.id}
                {...item}
                product='SPEAKERS'
                flexDir='flex-col lg:even:flex-row-reverse'
              >
                <SeeProductButton
                  to={item.shortName}
                  classes='text-light-100 font-bold bg-orange-200 hover:bg-orange-100 mt-10'
                />
              </ProductComponent>
            );
          })}
        </div>
      </section>
      <div className='container pt-44 sm:pt-36 sm:pb-5'>
        <ShopProducts />
      </div>
    </div>
  );
}
