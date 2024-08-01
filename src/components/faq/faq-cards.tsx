import { type Faq } from './types';

type Props = {
  faq: Faq;
};

const FaqCards = ({ faq: { time, protection, returning } }: Props) => {
  return (
    <div className='flex space-x-8'>
      <div className='tarifas-card'>
        <h3 className='text-center font-bold uppercase'>{time.title}</h3>
        <p className='text-left text-base'>{time.content}</p>
      </div>
      <div className='tarifas-card'>
        <h3 className='text-center font-bold uppercase'>{protection.title}</h3>
        <p className='text-left text-base'>{protection.content}</p>
      </div>
      <div className='tarifas-card'>
        <h3 className='text-center font-bold uppercase'>{returning.title}</h3>
        <p className='text-left text-base'>{returning.content}</p>
      </div>
    </div>
  );
};

export default FaqCards;
