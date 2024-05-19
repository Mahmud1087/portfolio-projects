import { Lato } from 'next/font/google';
import Link from 'next/link';

const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
});

interface ButtonProps {
  children: React.ReactNode;
  link: string;
  color: string;
  bgColor: string;
}

const Button = (props: ButtonProps) => {
  const { children, link, color, bgColor } = props;
  return (
    <Link
      href={link}
      type='button'
      className={`${lato.className} capitalize ${bgColor} px-6 py-2 rounded-md font-semibold ${color} hover:scale-[1.05] active:scale-[1.03] transition-all`}
    >
      {children}
    </Link>
  );
};
export default Button;
