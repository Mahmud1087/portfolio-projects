import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function SingleproductPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  // console.log(params);
  return (
    <div className='container pt-[4.5rem]'>
      <button
        onClick={goBack}
        className='text-[15px] text-[#00000062] mb-10 font-bold tracking-[1px]'
      >
        Go Back
      </button>
    </div>
  );
}
