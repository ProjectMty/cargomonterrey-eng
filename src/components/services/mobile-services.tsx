import { Carousel } from 'react-responsive-carousel';
import * as R from 'remeda';
import ServiceItem from './service-item';
import { ServicesList } from './types';

const MobileServices = ({ servicesList }: { servicesList: ServicesList[] }) => {
  const services = R.groupBy(servicesList, (x) => x.place);

  return (
    <Carousel
      className='my-5 bg-dark-primary px-6 [&>.carousel.carousel-slider]:py-12'
      emulateTouch
      infiniteLoop
      showArrows={false}
      showStatus={false}
      showThumbs={false}
    >
      <div className='flex h-full flex-col justify-between space-y-8'>
        {services.one.map(({ id, ...props }) => (
          <div key={id}>
            <ServiceItem {...props} />
          </div>
        ))}
      </div>
      <div className='flex h-full flex-col justify-between space-y-8'>
        {services.two.map(({ id, ...props }) => (
          <div key={id}>
            <ServiceItem {...props} />
          </div>
        ))}
      </div>
      <div className='flex h-full flex-col justify-between space-y-8'>
        {services.three.map(({ id, ...props }) => (
          <div key={id}>
            <ServiceItem {...props} />
          </div>
        ))}
      </div>
    </Carousel>
  );
};

export default MobileServices;
