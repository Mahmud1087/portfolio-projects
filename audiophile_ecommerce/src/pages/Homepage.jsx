import { Hero } from '../components/main'
import ShopProducts from '../components/ShopProducts'
import { useProductsContex } from '../context/products_context'

export default function Homepage() {
  const { isSideBarOpen } = useProductsContex()
  return (
    <div
      className={`${
        isSideBarOpen ? 'fixed top-[58px] left-0 right-0 md:top-[66px]' : ''
      }`}>
      <Hero />
      <ShopProducts />
      <ShopProducts />
      <ShopProducts />
      <ShopProducts />
    </div>
  )
}
