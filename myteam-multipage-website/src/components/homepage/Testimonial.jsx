import {
  TestimonialsContainer,
  TestimonialStyled,
  Title,
} from '../styles/homepage/Testimonial.Styled.'
import authorImg1 from '../../assets/Oval Copy 5.png'
import authorImg2 from '../../assets/Oval Copy 6.png'
import authorImg3 from '../../assets/Oval@2x.png'

export default function Testimonial() {
  const data = [
    {
      id: 1,
      texts:
        'The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the  platform eight months faster than planned.',
      author: 'Kady Baker',
      authorTitle: 'Product Manager at Bookmark',
      image: authorImg3,
    },
    {
      id: 2,
      texts:
        'We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!',
      author: 'Aiysha Reese',
      authorTitle: 'Founder of Manage',
      image: authorImg1,
    },
    {
      id: 3,
      texts:
        'Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.',
      author: 'Arthur Clarke',
      authorTitle: 'Co-founder of MyPhysio',
      image: authorImg2,
    },
  ]

  return (
    <TestimonialStyled>
      <Title>
        Delivering real results for top companies. Some of our{' '}
        <span>success stories.</span>
      </Title>
      <TestimonialsContainer>
        {data.map((item) => {
          const { id, texts, author, authorTitle, image } = item
          return (
            <div className='testimonials' key={id}>
              <p className='texts'>"{texts}"</p>
              <div className='author-details'>
                <h4 className='author'>{author}</h4>
                <p className='author-title'>{authorTitle}</p>
              </div>
              <img src={image} alt='author image' />
            </div>
          )
        })}
      </TestimonialsContainer>
    </TestimonialStyled>
  )
}
