import ServiceItem from './service-item';
import { ServicesList } from './types';

const DesktopServices = ({
  servicesList,
}: {
  servicesList: ServicesList[];
}) => {
  return (
    <div className='mx-auto grid max-w-4xl grid-flow-col grid-rows-3 gap-4 xl:max-w-screen-xl'>
      {servicesList.map(({ id, ...props }) => (
        <ServiceItem key={id} {...props} />
      ))}
    </div>
  );
};

export default DesktopServices;
