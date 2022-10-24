import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/future/image';
import CargoMtyLogo from '@/src/assets/logo-cargomty.webp';
import clsx from 'clsx';

const DaisyNavbar = ({
  toggleDrawer,
  title = 'Cargo Monterrey Logo',
  hideButton = false,
}: {
  toggleDrawer: () => void;
  title?: string;
  hideButton?: boolean;
}) => {
  return (
    <nav className='navbar sticky top-0 z-[200] bg-base-100 shadow-xl'>
      <div className='flex-1'>
        <Image
          width={1079}
          height={270}
          src={CargoMtyLogo}
          alt={title}
          className='w-40 bg-gray-500'
          priority
        />
      </div>
      <div className='flex-none'>
        <button
          type='button'
          className={clsx('btn btn-ghost btn-circle', hideButton && 'hidden')}
          aria-label='open-menu'
          onClick={toggleDrawer}
        >
          <FontAwesomeIcon icon={faBars} size='xl' />
        </button>
      </div>
    </nav>
  );
};

export default DaisyNavbar;
