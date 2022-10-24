import { Faq } from './types';

type Props = {
  faq: Faq;
};

const FaqCards = ({ faq: { time, protection, returning } }: Props) => {
  return (
    <div className='flex space-x-8'>
      <div className='tarifas-card'>
        <h3 className='text-center font-bold uppercase'>{time.title}</h3>
        <p className='font-base text-left'>{time.content}</p>
      </div>
      <div className='tarifas-card'>
        <h3 className='text-center font-bold uppercase'>{protection.title}</h3>
        <p className='font-base text-left'>{protection.content}</p>
      </div>
      <div className='tarifas-card'>
        <h3 className='text-center font-bold uppercase'>{returning.title}</h3>
        <p className='font-base text-left'>{returning.content}</p>
      </div>
    </div>
  );
};

export default FaqCards;
