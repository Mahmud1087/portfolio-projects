import {
  Hero,
  YX1Earphones,
  ZX7Speaker,
  ZX9Speaker,
} from '../components/home page/main';
import { ShopProducts } from '../components/main';

export default function Homepage() {
  return (
    <div>
      <Hero />
      <div className='container pt-32 pb-12 sm:pt-52 sm:pb-5'>
        <ShopProducts />
      </div>
      <ZX9Speaker />
      <ZX7Speaker />
      <YX1Earphones />
    </div>
  );
}
