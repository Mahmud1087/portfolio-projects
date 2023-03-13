import { useProductsContex } from '../context/products_context'
import { ShopProducts } from '../components/main'
import { useEffect } from 'react'

export default function Sidebar() {
  const { isSideBarOpen } = useProductsContex()

  // useEffect(() => {
  //   console.log(document.querySelector('nav').getBoundingClientRect().height)
  // }, [])
  return (
    <div
      className={`${
        isSideBarOpen ? 'sidebar show-sidebar' : 'sidebar'
      } bg-dark-200 bg-opacity-40`}>
      <div className='bg-light-100 py-2 md:h-3/5 md:py-8'>
        <ShopProducts />
      </div>
    </div>
  )
}
