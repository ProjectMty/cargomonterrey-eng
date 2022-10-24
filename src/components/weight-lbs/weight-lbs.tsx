import { useState } from 'react';

type PackageValues = '10' | '20' | '40' | '50' | '70';

const WeightLbs = () => {
  const [selected, setSelected] = useState<PackageValues>('10');

  const values = {
    '10': { package: 14, moreThan: 11 },
    '20': { package: 18, moreThan: 14 },
    '40': { package: 22, moreThan: 18 },
    '50': { package: 27, moreThan: 22 },
    '70': { package: 38, moreThan: 29 },
  };

  return (
    <div className='flex w-full flex-row rounded-2xl bg-[rgba(170,170,170,0.3)] shadow-2xl sm:w-2/3 lg:w-full'>
      <div className='lg:flex-center grow-[0.8] rounded-l-2xl bg-secondary py-7 px-2 text-sm lg:grow-[0.4] lg:text-lg'>
        <select
          className='w-20 rounded-md text-primary lg:w-28'
          value={selected}
          onChange={(e) => {
            const {
              target: { value },
            } = e;

            setSelected(value as PackageValues);
          }}
        >
          <option value='10'>{'<10 LBS'}</option>
          <option value='20'>{'<20 LBS'}</option>
          <option value='40'>{'<40 LBS'}</option>
          <option value='50'>{'<50 LBS'}</option>
          <option value='70'>{'<70 LBS'}</option>
        </select>
      </div>
      <div className='flex flex-col items-start justify-evenly p-2 text-start text-xs lg:grow-[0.4] lg:justify-around lg:p-4 lg:text-base 2xl:text-lg'>
        <p>Per Package</p>
        <p>More Than 10 Packages</p>
      </div>
      <div className='flex flex-col items-center justify-evenly p-1 text-center text-xs lg:justify-around lg:text-base 2xl:text-lg'>
        <p className='inline-block w-8 rounded-md bg-white font-bold text-primary lg:w-24'>
          {values[selected].package}
        </p>
        <p className='inline-block w-8 rounded-md bg-white font-bold text-primary lg:w-24'>
          {values[selected].moreThan}
        </p>
      </div>
    </div>
  );
};

export default WeightLbs;
