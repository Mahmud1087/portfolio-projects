import headphone1 from './assets/headphone1.png';
import headphone2 from './assets/headphone2.png';
import headphone3 from './assets/headphone3.png';
import headphone from './assets/headphone.png';
import speaker1 from './assets/speaker1.png';
import speaker2 from './assets/zx7-speaker.png';
import speaker from './assets/speaker.png';
import earphone1 from './assets/earphone1.png';
import earbud from './assets/earbud.png';

export const products = [
  {
    id: 1,
    name: 'XX99 MARK II',
    shortName: 'XX99 MK II',
    category: 'headphones',
    isNewProduct: true,
    desc: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
    img: headphone2,
    images: {
      image1: '../assests/xx99-user-1.png',
      image2: '../assests/xx99-user-2.png',
      image3: '../assests/xx99-user-3.png',
    },
    price: 2999,
    features: {
      point1:
        'Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.',
      point2:
        'The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.',
    },
    box: {
      size: { size1: '1x', size2: '2x', size3: '1x', size4: '1x', size5: '1x' },
      item: {
        item1: 'Headphone Unit',
        item2: 'Replacement Earcups',
        item3: 'User Manual',
        item4: '3.5mm 5m Audio Cable',
        item5: 'Travel Bag',
      },
    },
  },
  {
    id: 2,
    name: 'XX99 MARK I',
    shortName: 'XX99 MK I',
    category: 'headphones',
    isNewProduct: false,
    desc: 'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
    img: headphone,
    images: {
      image1: '../assests/mark1-user1.png',
      image2: '../assests/mark2-user2.png',
      image3: '../assests/mark3-user3.png',
    },
    price: 1750,
    features: {
      point1:
        'As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.',
      point2:
        'From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.',
    },
    box: {
      size: { size1: '1x', size2: '2x', size3: '1x', size4: '1x' },
      item: {
        item1: 'Headphone Unit',
        item2: 'Replacement Earcups',
        item3: 'User Manual',
        item4: '3.5mm 5m Audio Cable',
      },
    },
  },
  {
    id: 3,
    name: 'XX59',
    shortName: 'XX59',
    category: 'headphones',
    isNewProduct: false,
    desc: 'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
    img: headphone3,
    images: {
      image1: '../assests/xx59-user1.png',
      image2: '../assests/xx59-user2.png',
      image3: '../assests/xx59-user3.png',
    },
    price: 899,
    features: {
      point1:
        'These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.',
      point2:
        'More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.',
    },
    box: {
      size: { size1: '1x', size2: '2x', size3: '1x', size4: '1x' },
      item: {
        item1: 'Headphone Unit',
        item2: 'Replacement Earcups',
        item3: 'User Manual',
        item4: '3.5mm 5m Audio Cable',
      },
    },
  },
  {
    id: 4,
    name: 'ZX9',
    shortName: 'ZX9',
    category: 'speakers',
    isNewProduct: true,
    desc: 'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity - creating new possibilities for more pleasing and practical audio setups.',
    img: speaker,
    images: {
      image1: '../assests/zx9-user1.png',
      image2: '../assests/zx9-user2.png',
      image3: '../assests/zx9-user3.png',
    },
    price: 4500,
    features: {
      point1:
        'Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).',
      point2:
        'Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.',
    },
    box: {
      size: { size1: '1x', size2: '2x', size3: '1x', size4: '1x', size5: '1x' },
      item: {
        item1: 'Speaker Unit',
        item2: 'Speaker Cloth Panel',
        item3: 'User Manual',
        item4: '3.5mm 10m Audio Cable',
        item5: '10m Optical Cable',
      },
    },
  },
  {
    id: 5,
    name: 'ZX7',
    shortName: 'ZX7',
    category: 'speakers',
    isNewProduct: false,
    desc: 'Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
    img: speaker2,
    images: {
      image1: '../assests/zx7-user1.png',
      image2: '../assests/zx7-user2.png',
      image3: '../assests/zx7-user3.png',
    },
    price: 3500,
    features: {
      point1:
        'Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.',
      point2:
        'The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.',
    },
    box: {
      size: { size1: '1x', size2: '2x', size3: '1x', size4: '1x', size5: '1x' },
      item: {
        item1: 'Speaker Unit',
        item2: 'Speaker Cloth Panel',
        item3: 'User Manual',
        item4: '3.5mm 10m Audio Cable',
        item5: '10m Optical Cable',
      },
    },
  },
  {
    id: 6,
    name: 'YX1 WIRELESS',
    shortName: 'YX1',
    category: 'earphones',
    isNewProduct: true,
    desc: 'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
    img: earbud,
    images: {
      image1: '../assests/yx1-user1.png',
      image2: '../assests/yx1-user2.png',
      image3: '../assests/yx1-user3.png',
    },
    price: 599,
    features: {
      point1:
        'Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.',
      point2:
        'The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.',
    },
    box: {
      size: { size1: '2x', size2: '6x', size3: '1x', size4: '1x', size5: '1x' },
      item: {
        item1: 'Earphone Unit',
        item2: 'Multi-size Earplugs',
        item3: 'User Manual',
        item4: 'USB-C Charging Cable',
        item5: 'Travel Pouch',
      },
    },
  },
];
export const links = [
  { id: 1, text: 'home', url: '/' },
  { id: 2, text: 'headphones', url: 'headphones' },
  { id: 3, text: 'speakers', url: 'speakers' },
  { id: 4, text: 'earphones', url: 'earphones' },
  // { id: 5, text: 'checkout', url: 'checkout' },
];

export const shop = [
  { id: 1, img: headphone1, url: '/headphones', text: 'headphones' },
  { id: 2, img: speaker1, url: '/speakers', text: 'speakers' },
  { id: 3, img: earphone1, url: '/earphones', text: 'earphones' },
];

export const headphoneProductDetails = [
  {
    id: 1,
    productName: `XX99 MARK II `,
    desc: `The new XX99 Mark II headphones is the pinnacle of pristine 
     audio. It redefines you premium headphone experience by 
    reproducing the balanced depth and precision of studio-quality 
     sound.`,
    isNewProduct: true,
    img: headphone2,
  },
  {
    id: 2,
    productName: `XX99 MARK I `,
    desc: `As the gold standard for headphones, the classic XX99 Mark I 
    offers detailed and accurate audio reproduction for 
    audiophiles, mixing engineers, and music aficionados alike in 
    studios and on the go.`,
    isNewProduct: false,
    img: headphone,
  },
  {
    id: 3,
    productName: `XX59 `,
    desc: `Enjoy your audio almost anywhere and customize it to your 
    specific tastes with the XX59 headphones. The stylish yet 
    durable versatile wireless headset is a brilliant companion at 
    home or on the move.`,
    isNewProduct: false,
    img: headphone3,
  },
];

export const speakerProductDetails = [
  {
    id: 1,
    productName: `ZX9 `,
    desc: `Upgrade your sound system with the all new ZX9 active 
     speaker. It's a bookshelf speaker system that offers truly 
    wireless connectivity - creating new possibilities for more 
     pleasing and practical audio setups.`,
    isNewProduct: true,
    img: speaker,
  },
  {
    id: 2,
    productName: `ZX7 `,
    desc: `Stream high quality sound wirelessly with minimal loss. The ZX7 
    bookshelf speaker uses high-end audiophile components that 
    represents the top of the line powered speakers for home or 
    studio use.`,
    isNewProduct: false,
    img: speaker2,
  },
];

export const eaphoneProductDetails = [
  {
    id: 1,
    productName: `YX1 WIRELESS `,
    desc: `Tailor your listening experience with bespoke dynamic drivers 
    from the new YX1 Wireless Earphones. Enjoy incredible 
    high-fidelity sound even in noisy environments with its active 
     noise cancellation feature.`,
    isNewProduct: true,
    img: earbud,
  },
];
