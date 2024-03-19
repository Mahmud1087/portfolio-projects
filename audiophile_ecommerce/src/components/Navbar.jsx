import { useProductsContex } from '../context/products_context';

export default function Navbar() {
  const { isSideBarOpen, toggleSideBar } = useProductsContex();

  return <div>Navbar</div>;
}
