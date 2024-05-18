import { Lato } from 'next/font/google';
import Link from 'next/link';

const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
});

interface ButtonProps {
  title: string;
  link: string;
}

const Button = (props: ButtonProps) => {
  const { title, link } = props;
  return (
    <Link
      href={link}
      type='button'
      className={`${lato.className} capitalize bg-sec px-6 py-[6px] rounded-md font-semibold text-gray-800 hover:scale-[1.05] active:scale-[1.03] transition-all`}
    >
      {title}
    </Link>
  );
};
export default Button;
