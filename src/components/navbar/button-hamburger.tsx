import clsx from 'clsx';
import { MenuProps } from './types';

const ButtonHamburger = ({ isOpen, handleOpenItem }: MenuProps) => {
  return (
    <div className='md:hidden'>
      <button
        type='button'
        className={clsx('hamburguer', isOpen && 'open')}
        onClick={handleOpenItem}
      >
        <span className='hamburguer-top' />
        <span className='hamburguer-middle' />
        <span className='hamburguer-bottom' />
      </button>
    </div>
  );
};

export default ButtonHamburger;
