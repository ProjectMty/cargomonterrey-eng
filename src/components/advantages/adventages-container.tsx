import { cn } from '@/utils';
import AdvantageItem from './advantage-item';
import { type Advantage } from './types';

const AdventagesContainer = ({
  rows = '4',
  advantages,
}: {
  rows?: '1' | '2' | '3' | '4' | '5' | '6' | 'none';
  advantages: Advantage[];
}) => {
  const gridRows = `lg:grid-rows-${rows}`;

  return (
    <div
      className={cn(
        `grid grid-cols-1 grid-rows-1 place-content-center place-items-center gap-8 md:grid-cols-2`,
        gridRows,
      )}
    >
      {advantages.map(({ title, icon }) => (
        <AdvantageItem key={title} title={title} icon={icon} />
      ))}
    </div>
  );
};

export default AdventagesContainer;
