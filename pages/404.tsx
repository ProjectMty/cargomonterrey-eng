import { Footer } from '@/src/components';
import { NextPage } from 'next';
import Link from 'next/link';

const NotFound: NextPage = () => {
  return (
    <div className='flex h-screen flex-col'>
      <div className=' flex grow-[1] items-center justify-center bg-gradient-to-tr from-primary to-dark-primary'>
        <div className='flex w-9/12 items-center justify-center py-16'>
          <div className='overflow-hidden rounded-lg bg-white pb-8 shadow'>
            <div className='border-t border-gray-200 pt-8 text-center'>
              <h1 className='text-6xl font-bold text-primary lg:text-8xl'>
                404
              </h1>
              <h2 className='py-8 text-2xl font-medium lg:text-4xl'>
                Page not found
              </h2>
              <p className='px-12 pb-8 text-lg font-medium lg:text-xl'>
                We are sorry but the page you are looking for does not exists.
              </p>
              <Link href='/'>
                <a className='btn btn-primary text-white'>Go back to home</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
