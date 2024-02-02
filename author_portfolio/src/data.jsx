import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export const menuLinks = [
  { id: 1, text: 'Home', link: '/' },
  { id: 2, text: 'About me', link: 'aboutme' },
  { id: 3, text: 'Books', link: 'latestbook' },
  { id: 4, text: 'Reviews', link: 'reviews' },
  { id: 5, text: 'Contact', link: 'contactme' },
];

export const socials = [
  {
    id: 1,
    social: 'twitter',
    icon: <FaInstagram />,
  },
  {
    id: 3,
    social: 'facebook',
    icon: <FaFacebook />,
  },
  {
    id: 4,
    social: 'twitter',
    icon: <FaLinkedin />,
  },
];

export const reviews = [
  {
    id: 1,
    review: '',
    name: '',
    occupation: '',
  },
];
