import { League_Spartan } from 'next/font/google';
// import '../globals.css';

const leagueSpartan = League_Spartan({ subsets: ['latin'] });

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={leagueSpartan.className}>
      <div>Navbar for the about page</div>
      {children}
      <div>Footer for the about page</div>
    </div>
  );
}
