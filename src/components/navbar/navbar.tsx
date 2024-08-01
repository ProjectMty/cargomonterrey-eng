import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ButtonHamburger from './button-hamburger';
import DesktopMenu from './desktop-menu';
import MobileMenu from './mobile.menu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenItem = () => {
    setIsOpen((s) => !s);
  };

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isOpen);

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  return (
    <>
      <nav className='fixed z-50 flex w-full items-center justify-between bg-black/60 px-6 py-2 shadow-lg'>
        <Link href='#banner'>
          <Image src='/images/logo.svg' alt='logo' width={90} height={60} />
        </Link>
        <DesktopMenu />
        {/* Hamburger Button */}
        <ButtonHamburger isOpen={isOpen} handleOpenItem={handleOpenItem} />
      </nav>
      <MobileMenu isOpen={isOpen} handleOpenItem={handleOpenItem} />
    </>
  );
};

export default Navbar;
