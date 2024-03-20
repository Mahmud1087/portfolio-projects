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
      <ShopProducts />
      <ZX9Speaker />
      <ZX7Speaker />
      <YX1Earphones />
    </div>
  );
}
