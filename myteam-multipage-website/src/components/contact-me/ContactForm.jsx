import { useState } from 'react'
import { FormContainer } from '../styles/contact-me/ContactForm.styled'

export default function ContactForm() {
  const [contactInputs, setContactInputs] = useState({
    name: '',
    email: '',
    companyName: '',
    title: '',
    message: '',
  })

  function handleChange(e) {
    const { name, value } = e.target
    setContactInputs((oldInputs) => {
      return {
        ...oldInputs,
        [name]: value,
      }
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(contactInputs)
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={contactInputs.name}
        onChange={handleChange}
      />
      <input
        type='email'
        placeholder='Email Address'
        name='email'
        value={contactInputs.email}
        onChange={handleChange}
      />
      <input
        type='text'
        placeholder='Company Name'
        name='companyName'
        value={contactInputs.companyName}
        onChange={handleChange}
      />
      <input
        type='text'
        placeholder='Title'
        name='title'
        value={contactInputs.title}
        onChange={handleChange}
      />
      <textarea
        rows='4'
        placeholder='message'
        name='message'
        value={contactInputs.message}
        onChange={handleChange}
      />
      <button type='submit'>submit</button>
    </FormContainer>
  )
}
