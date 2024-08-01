import CanadaFlag from '@/assets/flags/canada.png';
import MexicoFlag from '@/assets/flags/mexico.png';
import UsFlag from '@/assets/flags/united-states.png';
import Image from 'next/image';

const flags = [
  { flag: 'mexico', image: MexicoFlag },
  { flag: 'united-states', image: UsFlag },
  { flag: 'canada', image: CanadaFlag },
];

const Flags = () => {
  return (
    <div className='flex gap-x-8'>
      {flags.map(({ flag, image }) => (
        <Image
          key={flag}
          src={image}
          alt={`${flag} flag`}
          className='animate__animated animate__fadeInUp size-12 rounded-full bg-gray-500 brightness-95 contrast-110 md:size-16 xl:size-24'
          width={512}
          height={512}
          priority
        />
      ))}
    </div>
  );
};

export default Flags;
