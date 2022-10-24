import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='my-0 flex w-full flex-col items-center justify-center gap-4 bg-[#1E1E1E] py-6 text-center text-sm font-extralight text-white'>
      <div className='space-x-4'>
        <Link href='https://www.facebook.com/cargomonterrey'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block hover:underline'
          >
            <FontAwesomeIcon
              icon={faFacebookF}
              className='h-4 w-4 cursor-pointer rounded-full bg-white p-2 text-base text-[#1E1E1E] hover:bg-secondary'
            />
          </a>
        </Link>
        <Link href='https://www.instagram.com/cargomonterrey/'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block hover:underline'
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className='h-4 w-4 cursor-pointer rounded-full bg-white p-2 text-base text-[#1E1E1E] hover:bg-secondary'
            />
          </a>
        </Link>
        <Link href='https://www.youtube.com/channel/UCj43332fzcWnMBmZfTHjx3g'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block hover:underline'
          >
            <FontAwesomeIcon
              icon={faYoutube}
              className='h-4 w-4 cursor-pointer rounded-full bg-white p-2 text-base text-[#1E1E1E] hover:bg-secondary'
            />
          </a>
        </Link>
        <Link href='https://www.linkedin.com/company/cargo-monterrey/'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block hover:underline'
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className='h-4 w-4 cursor-pointer rounded-full bg-white p-2 text-base text-[#1E1E1E] hover:bg-secondary'
            />
          </a>
        </Link>
      </div>
      {/* <p>Aviso de privacidad - Términos y condiciones</p> */}
      <div>
        <p>Copyright © 2022. Cargo Monterrey.</p>
        {/* <p>Todos los derechos reservados.</p> */}
      </div>
    </footer>
  );
};

export default Footer;
