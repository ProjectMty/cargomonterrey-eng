import { Banner } from '@/src/components';
import {
  CompetitiveRates,
  Contact,
  Costs,
  Ecommerce,
  OrderFulfillment,
  Process,
  Services,
  Us,
} from '@/src/sections';

const Home = () => {
  return (
    <>
      <Banner>
        Shipping your inventory and fulfilling{' '}
        <strong className='text-bold'>
          your sales to mexico has never been easier!
        </strong>
      </Banner>
      <Us />
      <div className='services-separator' />
      <Services />
      <OrderFulfillment />
      <CompetitiveRates />
      <Costs />
      <Process />
      <Ecommerce />
      <Contact />
    </>
  );
};

export default Home;
