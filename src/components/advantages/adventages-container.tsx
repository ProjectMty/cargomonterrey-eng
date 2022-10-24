import AdvantageItem from './advantage-item';
import { Advantage } from './types';

const AdventagesContainer = ({
  rows = '4',
  advantages,
}: {
  rows?: '1' | '2' | '3' | '4' | '5' | '6' | 'none';
  advantages: Advantage[];
}) => {
  return (
    <div
      className={`grid grid-cols-1 grid-rows-1 place-content-center place-items-center gap-8 lg:grid-rows-${rows} lg:grid-cols-2`}
    >
      {advantages.map(({ title, icon }) => (
        <AdvantageItem key={title} title={title} icon={icon} />
      ))}
    </div>
  );
};

export default AdventagesContainer;
