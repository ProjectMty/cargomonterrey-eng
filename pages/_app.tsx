import { config } from '@fortawesome/fontawesome-svg-core';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import '@/styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'animate.css/animate.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import 'react-toastify/dist/ReactToastify.min.css';
import RootLayout from '@/src/layout/root-layout';

config.autoAddCss = false;

const MyApp = ({ Component, pageProps }: AppProps) => {
  const element =
    process.env.NODE_ENV === 'production' ? 'recaptcha-container' : undefined;

  return (
    <>
      <DefaultSeo
        title='Cargo Monterrey - International Logistics'
        description='Cargo Monterrey is more than a freight forwarder. We are your complete cross-border e-commerce solution!. We give certainty and insure the orders we handle.'
        canonical='https://cargomonterrey.com/'
        additionalMetaTags={[
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0',
          },
          {
            name: 'keywords',
            content:
              'Cargo Monterrey Applied Logistics, International Logistics, logistics, Online Shopping, Mexico, USA, Canada, China, Europe, Warehouse, PO BOX, Trade, Import, Export',
          },
          { name: 'author', content: 'Cargo Monterrey, Grayrids' },
        ]}
        openGraph={{
          site_name: 'cargomonterrey',
          type: 'website',
          locale: 'en',
          url: 'https://cargomonterrey.com/',
          images: [
            {
              url: 'https://cargomonterrey.com/cargomty-og.jpg',
              width: 870,
              height: 365,
              alt: 'Og Image Alt',
              type: 'image/jpg',
            },
          ],
        }}
      />
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
        language='en'
        container={{
          element,
          parameters: {
            badge: 'bottomleft', // optional, default undefined
          },
        }}
        scriptProps={{
          defer: true,
          async: true,
        }}
      >
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </GoogleReCaptchaProvider>
    </>
  );
};

export default MyApp;
