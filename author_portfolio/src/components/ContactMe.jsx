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
    <div>
      <article>
        <h1 className='font-chelsea text-2xl text-white'>Sitemap</h1>
        <p className='text-slate-300 font-poppins'>Send me a message</p>
      </article>

      <form onSubmit={handleSubmit} className='mt-8'>
        <input
          type='text'
          name='fullname'
          value={recvdMessage.fullname}
          onChange={handleChange}
          placeholder='Full name'
        />
        <input
          type='text'
          name='email'
          value={recvdMessage.email}
          onChange={handleChange}
          placeholder='Your email'
        />
        <textarea
          name='message'
          value={recvdMessage.message}
          onChange={handleChange}
          placeholder='Your message'
        />
        <button>submit</button>
      </form>
    </div>
  );
};
export default ContactMe;
