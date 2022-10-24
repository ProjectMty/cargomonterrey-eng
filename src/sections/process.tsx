import { Faq, StepContainer } from '@/src/components';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Disclosure } from '@headlessui/react';
import clsx from 'clsx';
import { useMemo } from 'react';

const steps = [
  'Create your sales plan to decide what products you will be sending to Amazon FBA, Mercado Libre Full, or direct to client.',

  'Complete the intake sheet (Cargo Monterrey document) and email it along with your commercial invoice.',

  'We will quote your shipment to include all tariffs, service fees, and shipping from Laredo, TX to Mexico.',

  'Ship your merchandise to our warehouse in Laredo, TX. All products and master cartons must be properly labeled with the product (FNSKU) and carton labels.',

  'Upon receiving your merchandise, we will send you confirmation of receipt, pictures of the pallets as they arrived, and confirm your original quote. Your quote will only change if the merchandise received is in any way different than what was listed on your intake sheet.',

  'Payment is due upon quote confirmation.',

  'We will import merchandise into Mexico as the importer of record.',

  'Upon receipt of merchandise in Mexico, we will email you confirmation of import and pictures of pallets as they arrived in Mexico.',

  `We transport the merchandise to the distribution center designated by Amazon or Mercado Libre or direct to your buyer's door.`,

  'Upon completion of delivery, we will email you all documents and confirmations from delivery.',

  'We will issue all facturas requested by buyers on Amazon or Mercado Libre website. A factura is a document issued by a Mexican company to the buyer to make their purchase tax deductible. This is all done with an automated system linked to your seller platform without added work for you!',
];

const Process = () => {
  return (
    <section id='process'>
      <h2>How does It works?</h2>
      <StepContainer steps={steps} />
      <div className='services-separator hidden lg:block lg:w-full' />
      <Faq />
    </section>
  );
};

export default Process;
