import { WeightLbs } from '@/src/components';

const Costs = () => {
  return (
    <section
      id='costs'
      className='section-full bg-dark-primary px-10 pt-10 pb-16 text-white'
    >
      <h2 className='mt-6'>What does it cost?</h2>
      <div className='flex flex-col items-center justify-center gap-8 lg:grid lg:grid-cols-2 lg:grid-rows-1'>
        <div className='w-full space-y-10 place-self-center rounded-2xl bg-white px-10 py-8 text-sm text-primary shadow-lg sm:w-2/3 lg:w-2/3 xl:w-1/2 2xl:w-2/5'>
          <div>
            <h3 className='text-base font-bold lg:text-xl'>Service fees</h3>
            <p className='lg:text-lg'>
              8.5% of sales price or $.50 per unit , whichever is higher
            </p>
          </div>
          <div>
            <h3 className='text-base font-bold lg:text-xl'>
              Tariff and custom fees
            </h3>
            <p className='lg:text-lg'>16% of sales price</p>
          </div>
          <div>
            <h3 className='text-base font-bold lg:text-xl'>Shipping fees</h3>
            <p className='lg:text-lg'>
              $295 USD per 4' x 4' x 4' pallet up to 500 lbs
            </p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-evenly gap-8 place-self-center lg:h-full xl:w-2/3 xl:justify-evenly'>
          <p className='inline-block text-justify sm:w-full'>
            This is from Texas to any Amazon FBA warehouse or Mercado Libre
            center in Mexico. (note* : does not include shipping from your
            warehouse to our warehouse in Laredo, TX. If you are shipping boxes,
            not pallets)
          </p>
          <WeightLbs />
        </div>
      </div>
      <p className='text-justify lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl'>
        For FBM, DTC, or sales delivered directly to your buyer's door, we
        charge $12 per package to cross the border plus shipping based on weight
        and dimensions of each package and the destination zip code in Mexico.
        We will provide you with a pricing chart for each size range and zip
        code.
      </p>
    </section>
  );
};

export default Costs;
