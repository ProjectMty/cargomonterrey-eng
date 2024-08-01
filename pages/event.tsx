import { Banner, DaisyNavbar, Footer } from '@/components';
import { Contact } from '@/sections';

const classesTitle = 'text-xl font-bold md:text-3xl xl:text-4xl';

const classesSubtitle = 'text-lg font-bold text-primary md:text-2xl xl:text-3xl';

const classesText = 'text-base md:text-lg xl:text-2xl';

const services = [
  {
    icon: '',
    title: 'RFC',
    description: 'Strategic locations in the US and cross into Mexico within 1 business day',
  },
  {
    icon: '',
    title: 'Cross - Border',
    description:
      'Our team is available around the clock to provide expert assistance and ensure your shipments are always on track.',
  },
  {
    icon: '',
    title: 'Returns',
    description: 'We offers you the lowest costs in the Mexican market.',
  },
  {
    icon: '',
    title: 'Speed And Efficiency',
    description: 'Strategic locations in the US and cross into Mexico within 1 business day',
  },
  {
    icon: '',
    title: '24/9 Expert Support',
    description:
      'Our team is available around the clock to provide expert assistance and ensure your shipments are always on track.',
  },
  {
    icon: '',
    title: 'Competitive Rates',
    description: 'We offers you the lowest costs in the Mexican market.',
  },
];

const EventPage = () => {
  return (
    <div className='text-center'>
      <header>
        <DaisyNavbar title='Cargo E-commerce' />
      </header>
      <Banner flags={false}>
        <span className='flex flex-col gap-y-8'>
          <span className='font-bold'>Cargo Monterrey,</span>
          <span>your ultimate</span>
          <span>logistics partner</span>
        </span>
      </Banner>
      <section>
        <p className={classesTitle}>
          Growing your international sales has never been easier with{' '}
          <span className='text-primary'>Cargo Monterrey</span> your trusted logistics partner
          making it possible and fast!
        </p>
      </section>
      <section className='flex flex-row justify-between'>
        <div className='w-full space-y-16 text-base md:w-2/3 md:text-xl xl:text-3xl'>
          <p className={classesText}>
            We have been delivering excellence for{' '}
            <span className='font-medium'>more than 17 years</span>.
          </p>
          <p className={classesText}>
            <span className='font-medium'>Cargo Monterrey</span> understands the complexities of
            global shipping and provide a unique solutions tailored to fit your needs.
          </p>
          <p className={classesText}>
            Enjoy competitive rates that fit your budget without compromising on quality or
            reliability.
          </p>
        </div>
        <div className='size-32 bg-primary' />
      </section>
      <div className='mx-auto h-32 w-64 bg-primary' />
      <section className='space-y-16'>
        <p className={classesTitle}>
          <span className='text-[#5849b0]'>ASD MarketWeek</span>, the perfect opportunity to
          discover reliable logistics solutions that can elevate your business operations to Mexico!
        </p>
        <p className={classesSubtitle}>Expand Into Mexico with Ease!</p>

        <p className={classesText}>
          <span className='block font-medium'>Looking to expand into the Mexican market?</span>{' '}
          Cargo Monterrey makes it easy.
        </p>

        <p className={classesText}>
          We offer specialized services to help you navigate all of the variables of cross- border
          logistics, our gol is to have your products reach Mexican customers and marketplaces
          quickly and efficiently.
        </p>
      </section>
      <section>
        <p className={classesSubtitle}>We provide the following services:</p>
        <div className='grid grid-cols-1 items-start gap-8 space-y-0 md:grid-cols-2 xl:grid-cols-3'>
          {services.map((service) => (
            <div
              key={service.title.toLowerCase()}
              className='flex flex-col items-center justify-center gap-3'
            >
              <div className='size-32 bg-primary' />
              <p className='text-lg font-bold text-primary'>{service.title}</p>
              <p className='text-base'>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <p className={classesSubtitle}>Your Business, Our Priority!</p>
        <p className={classesText}>
          Let&apos;s discuss how we can help you ship your merchandise to Mexico while saving time
          and money!
        </p>
        <p className={classesText}>
          We&apos;re here to help you expand your business into Mexico and reach new heights.
        </p>
        <p className={classesText}>
          We look forward to connecting with you at{' '}
          <span className='font-medium text-[#5849b0]'>ASD Market Week</span> and exploring how we
          can support your logistics needs.
        </p>
      </section>
      <Contact title={false} />
      <Footer />
    </div>
  );
};

export default EventPage;
