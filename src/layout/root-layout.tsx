import { Drawer, Footer } from '@/src/components';
import { MENU_ITEMS } from '@/src/components/navbar/routes';
import { PropsWithChildren } from 'react';

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <div id='theme' data-theme='cargomty'>
      <Drawer items={MENU_ITEMS} navbarLogo='Cargo E-commerce'>
        {children}
        <Footer />
      </Drawer>
    </div>
  );
};

export default RootLayout;
