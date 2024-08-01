import Image from 'next/image';
import MexicoFlag from '@/src/assets/flags/mexico.png';
import UsFlag from '@/src/assets/flags/united-states.png';
import CanadaFlag from '@/src/assets/flags/canada.png';

const flags = [
  { flag: 'mexico', image: MexicoFlag },
  { flag: 'united-states', image: UsFlag },
  { flag: 'canada', image: CanadaFlag },
];

const Flags = () => {
  return (
    <div className='flex space-x-4 lg:space-x-6'>
      {flags.map(({ flag, image }) => (
        <Image
          key={flag}
          src={image}
          alt={`${flag} flag`}
          className='animate__animated animate__fadeInUp w-[24px] rounded-full bg-gray-500 brightness-95 contrast-110 sm:w-[34px] md:w-[42px] lg:w-[50px] xl:w-[58px] 2xl:w-[70px]'
          width={512}
          height={512}
          priority
        />
      ))}
    </div>
  );
};

export default Flags;
