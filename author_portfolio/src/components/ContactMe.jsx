import { useState } from 'react';

const ContactMe = () => {
  const defaultState = {
    fullname: '',
    email: '',
    message: '',
  };
  const [recvdMessage, setRecvdMessage] = useState(defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(recvdMessage);
    setRecvdMessage(defaultState);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecvdMessage((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  return (
    <div className='w-full'>
      <article>
        <h1 className='font-chelsea text-2xl text-white sm:text-5xl lg:text-[1.8rem]'>
          Contact Me
        </h1>
        <p className='text-slate-300 font-poppins sm:text-xl lg:text-base sm:mt-4 lg:mt-0'>
          Send me a message
        </p>
      </article>

      <form
        onSubmit={handleSubmit}
        className='mt-8 flex flex-col gap-4 font-poppins w-full text-sm sm:text-xl lg:text-base'
      >
        <input
          type='text'
          name='fullname'
          value={recvdMessage.fullname}
          onChange={handleChange}
          placeholder='Full name'
          required
          className='p-2 sm:p-3 lg:p-2 w-full lg:w-[80%] border-none focus:outline-none rounded-md'
        />
        <input
          type='text'
          name='email'
          value={recvdMessage.email}
          onChange={handleChange}
          placeholder='Your email'
          required
          className='p-2 w-full lg:w-[80%] border-none focus:outline-none rounded-md'
        />
        <textarea
          name='message'
          value={recvdMessage.message}
          onChange={handleChange}
          placeholder='Your message'
          required
          rows={5}
          className='p-2 w-full focus:outline-none rounded-md'
        />
        <button className='px-6 py-2 bg-transparent border-2 font-chelsea font-bold text-white text-[15px] tracking-widest'>
          SEND
        </button>
      </form>
    </div>
  );
};
export default ContactMe;
