import { useMediaQuery } from '@/src/hooks';
import FaqCards from './faq-cards';
import FaqDisclosure from './faq-disclosure';

const faq = {
  time: {
    title: 'How long does the process take?',
    content: (
      <>
        <strong className='font-bold'>
          The import and transport process takes 7-10 business days from the day
          we receive your merchandise at ourwarehouse in Texas.
        </strong>{' '}
        We will deliver to the designated distribution center 7-10 business days
        after wereceive your merchandise in Laredo. However, we depend on
        distribution center availability fordelivery appointments.
      </>
    ),
  },
  protection: {
    title: 'How is my merchandise protected?',
    content: (
      <>
        Your merchandise is safe with us.{' '}
        <strong className='font-bold'>
          We offer you a 100% product cost insurance policy on every shipment.
        </strong>{' '}
        From the moment your merchandise arrives at our warehouse in Texas until
        it arrives at the Amazon or Mercado Libre center, we insure your product
        at 100% of the cost you declared on the intake sheet. We cover any
        losses, thefts, or damages incurred while the merchandise was in our
        custody. Further, the shipper must be able to prove that item(s) was on
        a pallet and in good condition upon arrival at our warehouse. We do not
        cover any merchandise confiscated by customs or local authorities due to
        the item's illegality.
      </>
    ),
  },
  returning: {
    title: 'How does returns processing work?',
    content: (
      <>
        Our reverse logistics work just as seamlessly as our Southbound
        operations!.{' '}
        <strong className='font-bold'>
          Have your returns shipped from your buyer or from Amazon or Mercado
          Libre's warehouse to our warehouse here in Monterrey, Mexico. From
          here, we will move the package to our warehouse in Texas. From here,
          we use your shipping label to return the merchandise to you in the US.
          We charge you $1.50 per returned item.
        </strong>
      </>
    ),
  },
};

const Faq = () => {
  const isLg = useMediaQuery('(min-width: 1023px)');

  return isLg ? <FaqCards faq={faq} /> : <FaqDisclosure faq={faq} />;
};

export default Faq;
