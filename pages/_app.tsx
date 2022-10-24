import { config } from '@fortawesome/fontawesome-svg-core';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import '@/styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'animate.css/animate.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import 'react-toastify/dist/ReactToastify.min.css';

config.autoAddCss = false;

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo
        title='Cargo Monterrey - Applied Logistics'
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
              'Cargo Monterrey Applied Logistics, logistics, Online Shopping, Mexico, USA, Canada, China, Europe, Warehouse, PO BOX, Trade, Import, Export',
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
        scriptProps={{
          async: false, // optional, default to false,
          defer: true, // optional, default to false
          appendTo: 'head', // optional, default to "head", can be "head" or "body",
          nonce: undefined,
        }}
      >
        <div id='theme' data-theme='mytheme'>
          <Component {...pageProps} />
        </div>
      </GoogleReCaptchaProvider>
    </>
  );
};

export default MyApp;
