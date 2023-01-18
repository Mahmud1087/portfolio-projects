import ContactHero from '../components/contact-me/ContactHero'

export default function ContactMe({ open, setOpen }) {
  return (
    <>
      <ContactHero open={open} setOpen={setOpen} />
    </>
  )
}
