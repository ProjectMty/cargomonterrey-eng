import clsx from 'clsx';
import Link from 'next/link';
import { MENU_ITEMS } from './routes';
import { MenuProps } from './types';

const MobileMenu = ({ isOpen, handleOpenItem }: MenuProps) => {
  return (
    <div
      id='menu'
      className={clsx(
        'fixed inset-y-0 left-0 z-30 min-h-screen w-full flex-col space-y-3 self-end bg-black py-1 pl-12 pt-40 text-lg uppercase text-white',
        isOpen ? 'flex' : 'hidden',
      )}
    >
      {MENU_ITEMS.map(({ title, href }) => (
        <Link
          key={title}
          href={`#${href}`}
          className='hover:underline hover:underline-offset-4'
          onClick={handleOpenItem}
        >
          {title}
        </Link>
      ))}
    </div>
  );
};

export default MobileMenu;
