import { cn } from '@/utils';
import Link from 'next/link';
import { type ReactNode } from 'react';
import { Flags } from '../flags';

type Props = {
  flags?: boolean;
  children: ReactNode;
};

const Banner = ({ flags = true, children }: Props) => {
  return (
    <div className='h-fit'>
      <div id='banner' className={cn('gap-y-8', flags ? 'banner' : 'banner-event')}>
        <h1 className='animate__animated animate__fadeInDown w-full px-[10%] text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:px-72 2xl:text-7xl'>
          {children}
        </h1>
        {flags ? (
          <Flags />
        ) : (
          <Link
            href='#contact'
            className='animate__animated animate__fadeInUp btn btn-primary btn-lg w-48 border-[#4043ff] bg-[#4043ff] capitalize text-white shadow-lg'
          >
            Get Started
          </Link>
        )}
      </div>
    </div>
  );
};

export default Banner;
