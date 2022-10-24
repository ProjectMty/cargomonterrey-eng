import clsx from 'clsx';
import { useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';

type InputProps = {
  label: string;
  placeholder: string;
};

type Props = {
  nameInput: InputProps;
  phoneInput: InputProps;
  emailInput: InputProps;
  subjectInput: InputProps;
  btnMessage: string;
};

type ContactFormFields = {
  name: string;
  phone: string;
  email: string;
  subject: string;
};

const ContactForm = ({
  nameInput,
  phoneInput,
  emailInput,
  subjectInput,
  btnMessage,
}: Props) => {
  const errorMsg = () =>
    toast.error('Hubo un error al enviar tu mensaje, intentalo de nuevo.', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormFields>();

  const onSubmit: SubmitHandler<ContactFormFields> = async (data) => {
    if (!executeRecaptcha) {
      return;
    }

    try {
      const token = await executeRecaptcha();
      if (!token) {
        return;
      }

      setLoading(true);
      const response = await fetch(`/api/contact-form`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: JSON.stringify({ ...data, token }),
      });

      if (!response.ok) {
        errorMsg();
      }

      await response.json();
      toast.success('Gracias, tu mensaje ha sido enviado con éxito.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      reset();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      errorMsg();
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className='space-y-2 rounded-2xl bg-dark-primary p-8 lg:w-1/2 lg:rounded-l-none lg:bg-[#21165FB2]'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='group form-control w-full '>
        <label className='label' htmlFor='name'>
          <span
            className={clsx(
              'label-text text-white focus:text-secondary group-focus-within:text-secondary',
              errors.name && 'text-error group-focus-within:text-error',
            )}
          >
            {nameInput.label} *
          </span>
        </label>
        <input
          id='name'
          type='text'
          placeholder={nameInput.placeholder}
          className={clsx(
            'input input-bordered w-full text-black  placeholder:text-gray-400 group-focus-within:input-secondary',
            errors.name && 'input-error group-focus-within:input-error',
          )}
          {...register('name', { required: true })}
        />
      </div>
      <div className='group form-control w-full '>
        <label className='label' htmlFor='phone'>
          <span
            className={clsx(
              'label-text text-white focus:text-secondary group-focus-within:text-secondary',
              errors.phone && 'text-error group-focus-within:text-error',
            )}
          >
            {phoneInput.label} *
          </span>
        </label>
        <input
          id='phone'
          type='text'
          placeholder={phoneInput.placeholder}
          className={clsx(
            'input input-bordered w-full text-black  placeholder:text-gray-400 group-focus-within:input-secondary',
            errors.phone && 'input-error group-focus-within:input-error',
          )}
          {...register('phone', { required: true })}
        />
      </div>
      <div className='group form-control w-full '>
        <label className='label' htmlFor='email'>
          <span
            className={clsx(
              'label-text text-white focus:text-secondary group-focus-within:text-secondary',
              errors.email && 'text-error group-focus-within:text-error',
            )}
          >
            {emailInput.label} *
          </span>
        </label>
        <input
          id='email'
          type='email'
          placeholder={emailInput.placeholder}
          className={clsx(
            'input input-bordered w-full text-black  placeholder:text-gray-400 group-focus-within:input-secondary',
            errors.email && 'input-error group-focus-within:input-error',
          )}
          {...register('email', { required: true })}
        />
      </div>
      <div className='group form-control w-full '>
        <label className='label' htmlFor='subject'>
          <span
            className={clsx(
              'label-text text-white focus:text-secondary group-focus-within:text-secondary',
              errors.subject && 'text-error group-focus-within:text-error',
            )}
          >
            {subjectInput.label} *
          </span>
        </label>
        <textarea
          id='subject'
          placeholder={subjectInput.placeholder}
          className={clsx(
            'textarea textarea-bordered min-h-16 h-36 max-h-48 w-full resize-y text-black placeholder:text-gray-400 group-focus-within:textarea-secondary',
            errors.subject &&
              'textarea-error group-focus-within:textarea-error',
          )}
          {...register('subject', { required: true })}
        />
      </div>
      <div className='h-3' />
      <button
        type='submit'
        className={clsx(
          'btn btn-secondary btn-block py-0 text-white lg:w-56',
          loading && 'loading disabled:text-gray-300',
        )}
        disabled={loading}
      >
        {btnMessage}
      </button>
      <ToastContainer className='text-base' />
    </form>
  );
};

export default ContactForm;
