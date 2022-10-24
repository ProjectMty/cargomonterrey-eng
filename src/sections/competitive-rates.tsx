import { AdventagesContainer } from '@/src/components';

const shippingAdvantages = [
  {
    title:
      'Strategic locations in the US and cross into Mexico within 1 business day',
  },
  { title: 'Low overhead operations to keep fulfillment costs down' },
  { title: 'Internal customs clearance team to avoid high 3rd party costs' },
  { title: 'Partnerships with Fedex, Estafeta, and RedPack in Mexico' },
];

const CompetitiveRates = () => {
  return (
    <section id='competitive-rates' className='text-justify'>
      <h2 className='text-center'>Competitive Rates</h2>
      <p>
        Cargo Monterrey offers you the lowest fulfillment costs in the Mexico
        market. Our business is in volume.
      </p>
      <p>
        In Mexico, we are one of the largest 3PLs. We've secured deeply
        discounted shipping alliances with Mexico's most reputable couriers. We
        pass those savings on to you.
      </p>
      <p>
        We focus on the operation, not the bluff! We run very lean operations to
        keep the overhead down. We're in the warehouse business. Our offices are
        in the warehouses. Don't expect to see fancy office space when you tour
        any of our facilities. If it isn't essential to our operation, we don't
        have it!
      </p>
      <h3 className='text-center font-bold text-primary'>
        Faster Shipping at a Lower Cost
      </h3>
      <AdventagesContainer rows='2' advantages={shippingAdvantages} />
    </section>
  );
};

export default CompetitiveRates;
