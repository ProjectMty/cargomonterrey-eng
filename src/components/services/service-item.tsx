import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type ServiceItemProps = {
  icon: IconDefinition;
  title: string;
  text?: string;
};

const ServiceItem = ({ icon, title, text }: ServiceItemProps) => {
  return (
    <div className='mx-auto flex w-full max-w-md items-center justify-start space-x-4  md:max-w-xl lg:max-w-sm lg:space-x-6'>
      <div className='flex min-w-[64px] items-center justify-center text-center text-5xl text-white lg:text-primary'>
        <FontAwesomeIcon icon={icon} className='text-4xl' />
      </div>
      <div className='text-left text-white lg:text-black'>
        <h4 className='text-sm font-semibold sm:text-base xl:text-xl 2xl:text-2xl'>
          {title}
        </h4>
        {text && (
          <p className='text-xs font-light sm:text-sm xl:text-base 2xl:text-lg'>
            {text}
          </p>
        )}
      </div>
    </div>
  );
};

export default ServiceItem;
