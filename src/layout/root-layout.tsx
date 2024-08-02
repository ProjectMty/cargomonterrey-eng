import { Poppins } from 'next/font/google';
import { type PropsWithChildren } from 'react';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
});

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className={`${poppins.variable} font-sans`}>
      {children}
      <div id='recaptcha-container' className='size-0' />
    </main>
  );
};

export default RootLayout;
