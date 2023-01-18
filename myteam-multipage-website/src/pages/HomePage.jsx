import Hero from '../components/homepage/Hero'
import Services from '../components/homepage/Services'
import Testimonial from '../components/homepage/Testimonial'
import Footer from '../components/homepage/Footer'

export default function Home({ open, setOpen }) {
  return (
    <>
      <Hero open={open} setOpen={setOpen} />
      <Services />
      <Testimonial />
      <Footer />
    </>
  )
}
