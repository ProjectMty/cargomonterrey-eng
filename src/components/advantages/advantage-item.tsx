import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Advantage } from './types';

type Props = Advantage;

const AdvantageItem = ({ title, icon = faCircleCheck }: Props) => {
  return (
    <div className='mx-auto flex w-full items-center justify-start space-x-4  text-primary'>
      <div className='min-w-[2.5rem]'>
        <FontAwesomeIcon icon={icon} className='text-4xl' />
      </div>
      <p
        className='text-left text-base font-normal
      sm:text-lg
      md:text-xl
      lg:text-xl
      xl:text-2xl
      2xl:text-2xl'
      >
        {title}
      </p>
    </div>
  );
};

export default AdvantageItem;
