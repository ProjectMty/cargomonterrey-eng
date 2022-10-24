import StepItem from './step-item';

const StepContainer = ({ steps }: { steps: string[] }) => {
  return (
    <div className='grid grid-cols-1 gap-16 lg:grid-cols-3'>
      {steps.map((title, index) => (
        <StepItem
          key={title}
          step={index + 1}
          title={title}
          steps={steps.length}
        />
      ))}
    </div>
  );
};

export default StepContainer;
