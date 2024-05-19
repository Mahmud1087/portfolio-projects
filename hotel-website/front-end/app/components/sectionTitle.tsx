import { Italianno } from 'next/font/google';

interface SectionTitleProps {
  children: React.ReactNode;
  color: string;
}

const italianno = Italianno({ weight: '400', subsets: ['latin'] });

const SectionTitle = (props: SectionTitleProps) => {
  const { children, color } = props;
  return (
    <h1
      className={`${italianno.className} ${color} text-[5.5rem] leading-none mb-3`}
    >
      {children}
    </h1>
  );
};
export default SectionTitle;
