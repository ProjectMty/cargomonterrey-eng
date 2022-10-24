import {
  AdventagesContainer,
  DesktopServices,
  engServicesList,
  MobileServices,
} from '@/src/components';
import { useMediaQuery } from '@/src/hooks';

const servicesAdventages = [
  { title: 'Affordable Pallet Storage (pallet-in/pallet out warehousing)' },
  { title: 'Receive, store, and ship complete pallets.' },
  { title: 'Product scans upon arrival' },
  { title: 'Status change emails' },
  { title: 'Real time inventory levels' },
  { title: 'Low Inventory Alerts' },
  { title: 'Order status' },
  { title: 'Real time tracking information' },
];

const Services = () => {
  const isLg = useMediaQuery('(max-width: 1023px)');

  return (
    <>
      <section id='services'>
        <h2 className='text-primary'>Services</h2>
        <h3 className='font-bold text-primary'>
          Freight Forwarding at increased speed and reduced rates!
        </h3>
        <div className='responsive-block-space text-justify'>
          <p>
            Cargo Monterrey can be your freight forwarding solution for all of
            your North American business. You can have one consistent logistics
            partner to facilitate the transportation of your palletized product
            between locations in the US, Mexico, and Canada.
          </p>
          <p>
            Our experienced team of 3PL professionals offers a fully custom
            freight forwarding package tailored to your needs. Your needs. Your
            custom pricing. We understand every product, every marketplace, and
            every margin is different.
          </p>
        </div>
      </section>
      <section id='services-list' className='w-full max-w-full p-0'>
        {isLg ? (
          <div className=' w-full'>
            <MobileServices servicesList={engServicesList} />
          </div>
        ) : (
          <DesktopServices servicesList={engServicesList} />
        )}
      </section>
      <section id='warehousing-solutions' className='text-justify'>
        <p>
          Warehousing Solutions for Short-Term and Long-Term Plans. Ship your
          pallet to the US and we'll import it and ship it out to Mexico! We
          even take care of customs clearance!
        </p>
        <p>
          Even though the inventory isn't in your warehouse, you are still in
          control every step of the way! Cargo Monterrey ensures client's stay
          in touch with their inventory while it is in the warehouse and while
          it is in transit.
        </p>

        <AdventagesContainer advantages={servicesAdventages} />
      </section>
    </>
  );
};

export default Services;
