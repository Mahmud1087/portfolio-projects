import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div className='container pt-[6rem]'>
      <button
        onClick={goBack}
        className='text-[15px] text-[#00000062] mb-16 font-bold tracking-[1px]'
      >
        Go Back
      </button>

      <div className='mb-[11rem]'></div>
    </div>
  );
}
