import { ShopProducts } from '../components/main';

export default function Sidebar() {
  return (
    <div className='fixed w-screen h-screen bg-[#00000060] z-50'>
      <section className='relative top-[7rem] h-fit w-full bg-light-100 rounded-xl pb-24 px-12'>
        <ShopProducts />
      </section>
    </div>
  );
}
