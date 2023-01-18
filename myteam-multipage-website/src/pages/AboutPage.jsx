import AboutHero from '../components/about-me/AboutHero'
import DirectorsInfo from '../components/about-me/DirectorsInfo'
import Clients from '../components/about-me/Clients'
import Footer from '../components/homepage/Footer'

export default function AboutPage({ open, setOpen }) {
  return (
    <>
      <AboutHero open={open} setOpen={setOpen} />
      <DirectorsInfo />
      <Clients />
      <Footer />
    </>
  )
}
