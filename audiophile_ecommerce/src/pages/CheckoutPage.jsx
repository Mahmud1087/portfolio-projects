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
  const { cartList, cartTotal, vatFee, shippingFee, showModal } =
    useProductsContex();

  return (
    <div className='pb-6 bg-light-300 pt-[7rem] sm:pt-[10rem] lg:pt-[6rem]'>
      <section className='container'>
        <button
          onClick={goBack}
          className='text-lg text-[#00000062] mb-8 font-bold tracking-[1px] sm:text-2xl lg:text-[15px] lg:mb-16'
        >
          Go Back
        </button>

        <div className='mb-[11rem] flex flex-col gap-6 lg:flex-row'>
          <section className='w-full flex flex-col gap-2 rounded-lg px-7 py-2 pb-16 bg-light-100 sm:gap-6 sm:py-3 sm:px-12 lg:w-[65%] lg:px-14 lg:py-7'>
            <h1 className='font-bold text-2xl tracking-[1px] mt-5 sm:text-3xl lg:text-xl'>
              CHECKOUT
            </h1>

            <form className='flex flex-col mt-7 gap-16 sm:gap-20 lg:gap-16 lg:mt-0'>
              <div className='flex flex-col gap-3 sm:gap-6 lg:gap-2'>
                <Label label='BILING DETAILS' />
                <section className='grid gap-y-8 sm:grid-cols-2 sm:gap-y-10 sm:gap-x-5 lg:gap-y-6 lg:gap-x-3'>
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

              <aside className='flex flex-col gap-6 lg:gap-2'>
                <Label label='SHIPPING INFO' />
                <Input
                  title='Address'
                  type='text'
                  placeholder='1137 Williams Avenue'
                />
                <section className='mt-4 grid gap-y-8 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-10 lg:gap-y-6 lg:gap-x-3'>
                  <Input title='Zip Code' type='text' placeholder='10001' />
                  <Input title='City' type='text' placeholder='New York' />
                  <Input
                    title='Country'
                    type='text'
                    placeholder='United States'
                  />
                </section>
              </aside>

              <div className='flex flex-col gap-6 lg:gap-2'>
                <Label label='PAYMENT DETAILS' />
                <article className='grid gap-y-8 sm:grid-cols-2 sm:gap-y-10 sm:gap-x-5 lg:gap-y-6 lg:gap-x-3'>
                  <h1 className='text-[1.1rem] font-bold sm:text-xl lg:text-[13px]'>
                    Payment Method
                  </h1>
                  <div className='flex flex-col gap-5 lg:gap-3'>
                    <div className='bg-light-100 flex items-center w-full border-[1.5px] border-[#0000002a] rounded-md px-7 py-5 lg:px-5 lg:py-3'>
                      <FaDotCircle className='text-orange-200' />
                      <h1 className='text-lg font-bold ml-4 lg:text-xs'>
                        e-Money
                      </h1>
                    </div>
                    <div className='flex items-center w-full border-[1.5px] border-[#0000002a] rounded-md px-7 py-5 lg:px-5 lg:py-3'>
                      <FaCircle className='text-light-100 border border-dark-100 rounded-full' />
                      <h1 className='text-lg font-bold ml-4 lg:text-xs'>
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

          <section className='w-full p-7 rounded-md bg-light-100 h-fit sm:p-12 lg:p-8 lg:w-[35%]'>
            <h1 className='text-2xl font-bold mb-8 tracking-[1px] sm:text-[1.7rem] sm:mb-12 lg:mb-8 lg:text-sm'>
              SUMMARY
            </h1>
            {cartList.length === 0 && (
              <h1 className='text-xl font-bold mb-8 tracking-[1px] text-center sm:text-3xl lg:text-[13px]'>
                No Item Added
              </h1>
            )}
            <div
              className={`flex flex-col gap-5 ${
                cartList.length === 0 ? '' : 'h-[15rem] sm:h-[20rem]'
              } overflow-scroll custom-scroll`}
            >
              {cartList.map((prod) => {
                return (
                  <div key={prod.id} className='flex justify-between'>
                    <CartItems {...prod} />
                    <p className='text-[#00000077] font-bold py-2 sm:py-3 sm:text-xl lg:text-xs'>
                      x{prod.amount}
                    </p>
                  </div>
                );
              })}
            </div>
            <aside
              className={`text-[13px] font-semibold ${
                cartList.length === 0 ? 'hidden' : 'flex'
              } flex-col gap-5 mt-8 sm:mt-12 lg:gap-2 lg:mt-8`}
            >
              <div className='flex justify-between text-xl lg:text-base'>
                <h1 className='text-[#00000077]'>TOTAL</h1>
                <p className='text-xl font-bold sm:text-2xl lg:text-base lg:font-normal'>
                  $ {curr(cartTotal)}
                </p>
              </div>
              <div className='flex justify-between text-xl lg:text-base'>
                <h1 className='text-[#00000077]'>SHIPPING</h1>
                <p className='text-xl font-bold sm:text-2xl lg:text-base lg:font-normal'>
                  $ {curr(shippingFee)}
                </p>
              </div>
              <div className='flex justify-between text-xl lg:text-base'>
                <h1 className='text-[#00000077]'>VAT (INCLUDED)</h1>
                <p className='text-xl font-bold sm:text-2xl lg:text-base lg:font-normal'>
                  $ {vatFee}
                </p>
              </div>
              <div className='flex justify-between mt-5 text-xl lg:text-base'>
                <h1 className='text-[#00000077]'>GRAND TOTAL</h1>
                <p className='text-xl font-bold text-orange-200 sm:text-2xl lg:text-base lg:font-normal'>
                  $ {curr(cartTotal + vatFee + shippingFee)}
                </p>
              </div>
            </aside>
            <button
              onClick={showModal}
              className={`${
                cartList.length === 0 ? 'hidden' : 'block'
              } py-4 bg-orange-200 text-light-100 text-lg font-semibold mt-7 w-full tracking-[1px] hover:bg-orange-100 sm:py-6 sm:text-xl lg:text-xs lg:py-3`}
            >
              CONTINUE & PAY
            </button>
          </section>
        </div>
      </section>
    </div>
  );
}
