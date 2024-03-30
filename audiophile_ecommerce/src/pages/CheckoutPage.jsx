import React from 'react';
import { useNavigate } from 'react-router-dom';
import Label from '../components/checkout/Label';
import Input from '../components/checkout/Input';
import { FaCircle, FaDotCircle } from 'react-icons/fa';
import { useProductsContex } from '../context/products_context';
import CartItems from '../components/cart/CartItems';
import { curr } from '../helper';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const { cartList, cartTotal } = useProductsContex();

  return (
    <div className='pt-[6rem] pb-6 bg-light-300'>
      <section className='container'>
        <button
          onClick={goBack}
          className='text-[15px] text-[#00000062] mb-16 font-bold tracking-[1px]'
        >
          Go Back
        </button>

        <div className='mb-[11rem] flex gap-6'>
          <section className='w-[65%] flex flex-col gap-6 rounded-lg px-14 py-7 pb-16 bg-light-100'>
            <h1 className='font-bold text-xl tracking-[1px] mt-5'>CHECKOUT</h1>

            <form className='flex flex-col gap-16'>
              <div className='flex flex-col gap-2'>
                <Label label='BILING DETAILS' />
                <section className='grid grid-cols-2 gap-y-6 gap-x-3'>
                  <Input title='Name' type='text' placeholder='Alexei Ward' />
                  <Input
                    title='Email Address'
                    type='email'
                    placeholder='alexei@mail.com'
                  />
                  <Input
                    title='Phone Number'
                    type='text'
                    placeholder='+1202-555-0136'
                  />
                </section>
              </div>

              <aside className='flex flex-col gap-2'>
                <Label label='SHIPPING INFO' />
                <Input
                  title='Address'
                  type='text'
                  placeholder='1137 Williams Avenue'
                />
                <section className='mt-4 grid grid-cols-2 gap-y-6 gap-x-3'>
                  <Input title='Zip Code' type='text' placeholder='10001' />
                  <Input title='City' type='text' placeholder='New York' />
                  <Input
                    title='Country'
                    type='text'
                    placeholder='United States'
                  />
                </section>
              </aside>

              <div className='flex flex-col gap-2'>
                <Label label='PAYMENT DETAILS' />
                <article className='grid grid-cols-2 gap-x-3 gap-y-8'>
                  <h1 className='text-[13px] font-bold'>PAYMENT METHOD</h1>
                  <div className='flex flex-col gap-3'>
                    <div className='flex items-center w-full border-[1.5px] border-[#0000002a] rounded-md px-5 py-3'>
                      <FaDotCircle />
                      <h1 className='text-xs font-bold ml-4'>e-Money</h1>
                    </div>
                    <div className='flex items-center w-full border-[1.5px] border-[#0000002a] rounded-md px-5 py-3'>
                      <FaCircle className='text-light-100 border border-dark-100 rounded-full' />
                      <h1 className='text-xs font-bold ml-4'>
                        Cash on Delivery
                      </h1>
                    </div>
                  </div>
                  <Input
                    title='e-Money Number'
                    type='text'
                    placeholder='238521993'
                  />
                  <Input title='e-Money Pin' type='text' placeholder='6891' />
                </article>
              </div>
            </form>
          </section>

          <section className='w-[35%] p-8 rounded-md bg-light-100 h-fit'>
            <h1 className='text-sm font-bold mb-8 tracking-[1px]'>SUMMARY</h1>
            {cartList.length === 0 && (
              <h1 className='text-xs font-bold mb-8 tracking-[1px]'>
                No Item Added
              </h1>
            )}
            <div className='flex flex-col gap-5 h-[15rem] overflow-scroll custom-scroll'>
              {cartList.map((prod) => {
                return (
                  <div key={prod.id} className='flex justify-between'>
                    <CartItems {...prod} />
                    <p className='text-xs text-[#00000077] font-bold py-3'>
                      x{prod.amount}
                    </p>
                  </div>
                );
              })}
            </div>
            <aside className='text-[13px] font-semibold flex flex-col gap-2 mt-8'>
              <div className='flex justify-between'>
                <h1 className='text-[#00000077]'>TOTAL</h1>
                <p>$ {curr(cartTotal)}</p>
              </div>
              <div className='flex justify-between'>
                <h1 className='text-[#00000077]'>SHIPPING</h1>
                <p>$ 50</p>
              </div>
              <div className='flex justify-between'>
                <h1 className='text-[#00000077]'>VAT (INCLUDED)</h1>
                <p>$ 1,079</p>
              </div>
              <div className='flex justify-between mt-5'>
                <h1 className='text-[#00000077]'>GRAND TOTAL</h1>
                <p className='text-orange-200'>$ 5,446</p>
              </div>
            </aside>
            <button className='block py-3 bg-orange-200 text-light-100 text-xs font-semibold mt-7 w-full tracking-[1px] hover:bg-orange-100'>
              CONTINUE & PAY
            </button>
          </section>
        </div>
      </section>
    </div>
  );
}
