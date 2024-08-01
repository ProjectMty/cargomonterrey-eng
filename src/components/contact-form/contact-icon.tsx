import { type IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type ReactNode } from 'react';

const ContactIcon = ({ icon, children }: { icon: IconDefinition; children: ReactNode }) => {
  return (
    <div className='flex w-full flex-row items-center justify-start gap-5'>
      <div className='relative flex size-12 min-h-12 min-w-12 items-center justify-center rounded-full bg-secondary text-center text-2xl font-semibold text-white lg:size-16 lg:min-h-16 lg:min-w-16 lg:text-3xl'>
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className='text-left text-sm font-normal text-white lg:text-base 2xl:text-lg'>
        {children}
      </div>
    </div>
  );
};

export default ContactIcon;
