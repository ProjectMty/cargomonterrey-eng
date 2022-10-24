import { AdventagesContainer } from '@/src/components';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import {
  faCoins,
  faCopyright,
  faDog,
  faExplosion,
  faFlaskVial,
  faGem,
  faGun,
  faPills,
  faSeedling,
  faSmoking,
  faUtensils,
  faWineBottle,
} from '@fortawesome/free-solid-svg-icons';

const notAllow = [
  {
    icon: faSmoking,
    title: 'Tobacco in any form (cigarettes, root, chew, etc)',
  },
  { icon: faWineBottle, title: 'Alcohol (liquor and wines)' },
  {
    icon: faGun,
    title: 'Firearms and/or bullets',
  },
  {
    icon: faUtensils,
    title: 'Knifes, blades, or num-chuks',
  },
  {
    icon: faExplosion,
    title: 'Explosives',
  },
  {
    icon: faApple,
    title: 'Fruits and vegetables',
  },
  {
    icon: faPills,
    title: 'Controlled medications',
  },
  {
    icon: faCopyright,
    title: 'Clone/non-authentic brand merchandise',
  },
  {
    icon: faFlaskVial,
    title: 'Chemicals, toxic or flammable',
  },
  {
    icon: faDog,
    title: 'Live animals, furs, or taxidermy',
  },
  {
    icon: faSeedling,
    title: 'Plants, roots, or seeds',
  },
  {
    icon: faGem,
    title: 'Diamonds without IGA registration',
  },
  {
    icon: faCoins,
    title:
      'Currency (bills or coins), checks, money orders, or other negotiable form of currency',
  },
];

const NotPermitted = () => {
  return (
    <section id='not-permitted'>
      <h2>
        What items are <span className='font-bold'>NOT</span> permitted to enter
        into Mexico?
      </h2>
      <AdventagesContainer rows='2' advantages={notAllow} />
    </section>
  );
};

export default NotPermitted;
