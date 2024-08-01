import headlessui from '@headlessui/tailwindcss';
import typography from '@tailwindcss/typography';
import daisy from 'daisyui';
import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', ...defaultTheme.fontFamily.sans],
      },
      contrast: {
        110: '1.10',
      },
      colors: {
        'dark-primary': '#21165f',
      },
    },
  },
  plugins: [typography, daisy, headlessui],
  daisyui: {
    theme: true,
    themes: [
      {
        cargomty: {
          primary: '#3926ae',
          secondary: '#4ecdc4',
          accent: '#6750fa',
          neutral: '#1E1E1E',
          'base-100': '#FFFFFF',
          info: '#0288d1',
          success: '#2e7d32',
          warning: '#ffcc00',
          error: '#d32f2f',
        },
      },
    ],
  },
} satisfies Config;

export default config;
