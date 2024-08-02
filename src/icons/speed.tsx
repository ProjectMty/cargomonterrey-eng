import { type SVGProps } from 'react';

export default function SpeedIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d='m20.57 8.58-1.38 2.02s2.02 2.99 0 7.63H4.75S1.62 12.9 6.45 8.11c0 0 4.09-4.02 9.06-1.24l1.84-1.24S10.87 1.22 4.98 6.96 3.75 19.98 3.75 19.98h16.13s4.27-3.72.69-11.4z' />
      <circle cx={12} cy={13.98} r={2.13} />
      <path d='m13.81 15.1-1.54-1.63-1.32-1.34 1.05-.72 6.77-4.39-3.85 6.27z' />
    </svg>
  );
}
