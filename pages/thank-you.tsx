import { DaisyNavbar, Footer } from '@/components';
import { type NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  const toggleDrawer = () => {
    // void
  };

  return (
    <div className='flex h-screen flex-col bg-primary'>
      <DaisyNavbar toggleDrawer={toggleDrawer} hideButton />
      <div className='flex grow items-center justify-center'>
        <div className='flex w-11/12 flex-col items-center justify-center space-y-4 rounded-xl bg-white px-4 py-8 text-center shadow-xl sm:w-4/5 md:w-3/4 lg:w-3/5 xl:w-1/2 2xl:w-1/3'>
          <h1 className='text-2xl uppercase lg:text-4xl'>
            Thanks from <span className='block text-primary'>Cargo Monterrey</span>
          </h1>
          <p className='text-base lg:text-lg'>We will be in touch shortly.</p>
          <p className='text-base lg:text-lg'>Your data is safe with us!</p>
          <Link href='/' className='btn btn-primary text-white'>
            Go back to home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
