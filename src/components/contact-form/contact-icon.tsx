import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactNode } from 'react';

const ContactIcon = ({
  icon,
  children,
}: {
  icon: IconDefinition;
  children: ReactNode;
}) => {
  return (
    <div className='flex w-full flex-row items-center justify-start gap-5'>
      <div
        className='relative flex h-[3rem] min-h-[3rem] w-[3rem] min-w-[3rem] items-center justify-center rounded-full bg-secondary text-center text-2xl font-semibold text-white
      lg:h-[4rem]
      lg:min-h-[4rem]
      lg:w-[4rem]
      lg:min-w-[4rem]
      lg:text-3xl
      '
      >
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className='text-left text-sm font-normal text-white lg:text-base 2xl:text-lg'>
        {children}
      </div>
    </div>
  );
};

export default ContactIcon;
