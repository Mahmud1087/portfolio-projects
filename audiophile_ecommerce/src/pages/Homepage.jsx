import { useProductsContex } from '../context/products_context';

export default function Homepage() {
  const { isSideBarOpen } = useProductsContex();
  return <div>Audiophile Website design, starting tomorrow!!!!🕺🕺🕺</div>;
}
