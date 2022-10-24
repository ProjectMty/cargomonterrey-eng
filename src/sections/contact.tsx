import { ContactSection } from '@/src/components';

const Contact = () => {
  return (
    <section id='contact'>
      <h2 className='sm:max-w-2xl lg:max-w-4xl xl:max-w-5xl'>
        Contact us today to discuss how we can launch your e-commerce business
        in Mexico today!
      </h2>
      <ContactSection
        title='Start shipping today!'
        phone='+1 956 284 6632'
        email='info@cargomty.com'
        btnMessage='Send'
        nameInput={{ label: 'Name', placeholder: 'Name' }}
        phoneInput={{ label: 'Phone', placeholder: 'Phone' }}
        emailInput={{ label: 'Email', placeholder: 'Email' }}
        subjectInput={{ label: 'Message', placeholder: 'How can we assist?' }}
      />
    </section>
  );
};

export default Contact;
