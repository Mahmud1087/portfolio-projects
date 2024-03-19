import { useProductsContex } from '../context/products_context';

export default function Sidebar() {
  const { isSideBarOpen } = useProductsContex();

  return <div>Sidebar</div>;
}
