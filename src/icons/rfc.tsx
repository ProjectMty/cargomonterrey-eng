import { type SVGProps } from 'react';

export default function RfcIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlSpace='preserve'
      x={0}
      y={0}
      viewBox='0 0 24 24'
      fill='currentColor'
      {...props}
    >
      <path d='M2 .67h16.03c-.01.1-.02.2-.02.31v12.34c-2.63.03-4.59 1.15-5.58 3.59-.98 2.44-.33 4.59 1.54 6.42H2V.67zm5.35 5.31h7.96v-1.3H7.35v1.3zm.01 1.37v1.31h7.96V7.35H7.36zm7.96 3.97v-1.3H7.36v1.3h7.96zm-3.99 1.36H7.36v1.3h3.97v-1.3zm-6.65-1.36h1.3v-1.3h-1.3v1.3zm1.3 1.36h-1.3v1.29h1.3v-1.29zm0-8h-1.3v1.29h1.3V4.68zm-1.3 2.66v1.32h1.3V7.35c-.06 0-.11-.01-.16-.01H4.68z' />
      <path d='M17.66 23.33a4.34 4.34 0 0 1-4.33-4.34c0-2.38 1.96-4.33 4.34-4.33S22 16.62 22 19.01c0 2.39-1.95 4.32-4.34 4.32zm-.47-2.51 2.76-2.76-.91-.91-1.88 1.88-.9-.93-.9.9c.62.61 1.24 1.23 1.83 1.82z' />
    </svg>
  );
}
