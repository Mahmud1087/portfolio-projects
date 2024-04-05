import {
  Hero,
  YX1Earphones,
  ZX7Speaker,
  ZX9Speaker,
} from '../components/home page/main';
import { ShopProducts } from '../components/main';
import { useProductsContex } from '../context/products_context';

export default function Homepage() {
  const { isSideBarOpen } = useProductsContex();
  return (
    <div>
      <Hero />
      <div className='container pt-32 sm:pt-52 sm:pb-5'>
        <ShopProducts />
      </div>
      <ZX9Speaker />
      <ZX7Speaker />
      <YX1Earphones />
    </div>
  );
}
