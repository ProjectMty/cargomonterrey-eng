import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='my-0 flex w-full flex-col items-center justify-center gap-4 bg-[#1E1E1E] py-6 text-center text-sm font-extralight text-white'>
      <div className='space-x-4'>
        <Link
          href='https://www.facebook.com/cargomonterrey'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-block hover:underline'
        >
          <FontAwesomeIcon
            icon={faFacebookF}
            className='size-4 cursor-pointer rounded-full bg-white p-2 text-base text-[#1E1E1E] hover:bg-secondary'
          />
        </Link>
        <Link
          href='https://www.instagram.com/cargomonterrey/'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-block hover:underline'
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className='size-4 cursor-pointer rounded-full bg-white p-2 text-base text-[#1E1E1E] hover:bg-secondary'
          />
        </Link>
        <Link
          href='https://www.youtube.com/channel/UCj43332fzcWnMBmZfTHjx3g'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-block hover:underline'
        >
          <FontAwesomeIcon
            icon={faYoutube}
            className='size-4 cursor-pointer rounded-full bg-white p-2 text-base text-[#1E1E1E] hover:bg-secondary'
          />
        </Link>
        <Link
          href='https://www.linkedin.com/company/cargo-monterrey/'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-block hover:underline'
        >
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className='size-4 cursor-pointer rounded-full bg-white p-2 text-base text-[#1E1E1E] hover:bg-secondary'
          />
        </Link>
      </div>
      {/* <p>Aviso de privacidad - Términos y condiciones</p> */}
      <div>
        <p>Copyright © {new Date().getFullYear()}. Cargo Monterrey.</p>
        {/* <p>Todos los derechos reservados.</p> */}
      </div>
    </footer>
  );
};

export default Footer;
