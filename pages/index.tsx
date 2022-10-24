import { Banner, Drawer, Footer } from '@/src/components';
import { MENU_ITEMS } from '@/src/components/navbar/routes';
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
    <Drawer items={MENU_ITEMS} navbarLogo='Cargo E-commerce'>
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
      <Footer />
    </Drawer>
  );
};

export default Home;
