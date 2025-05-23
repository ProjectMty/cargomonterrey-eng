import { cn } from '@/utils';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Disclosure } from '@headlessui/react';
import { type Faq } from './types';

type Props = {
  faq: Faq;
};

const FaqDisclosure = ({ faq: { time, protection, returning } }: Props) => {
  return (
    <div className='w-full max-w-[276px] sm:max-w-full'>
      <Disclosure defaultOpen>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={cn(
                'flex w-full items-center justify-between rounded-lg bg-[#3926AE40] bg-primary px-4 py-2 text-left text-sm font-normal text-primary focus:outline-none',
                open && 'bg-[#3826aeff] text-white',
              )}
            >
              <span>{time.title}</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={cn('text-primary', open && 'rotate-180 text-white')}
              />
            </Disclosure.Button>
            <Disclosure.Panel className='px-4 pb-2 pt-4 text-justify text-sm'>
              {time.content}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure as='div' className='mt-2'>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={cn(
                'flex w-full items-center justify-between rounded-lg bg-[#3926AE40] bg-primary px-4 py-2 text-left text-sm font-normal text-primary focus:outline-none',
                open && 'bg-[#3826aeff] text-white',
              )}
            >
              <span>{protection.title}</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={cn('text-primary', open && 'rotate-180 text-white')}
              />
            </Disclosure.Button>
            <Disclosure.Panel className='px-4 pb-2 pt-4 text-justify text-sm'>
              {protection.content}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure as='div' className='mt-2'>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={cn(
                'flex w-full items-center justify-between rounded-lg bg-[#3926AE40] bg-primary px-4 py-2 text-left text-sm font-normal text-primary focus:outline-none',
                open && 'bg-[#3826aeff] text-white',
              )}
            >
              <span>{returning.title}</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={cn('text-primary', open && 'rotate-180 text-white')}
              />
            </Disclosure.Button>
            <Disclosure.Panel className='px-4 pb-2 pt-4 text-justify text-sm'>
              {returning.content}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default FaqDisclosure;
