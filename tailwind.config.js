/* eslint-disable */
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      contrast: {
        110: '1.10',
      },
      colors: {
        'dark-primary': '#21165f',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
    require('@headlessui/tailwindcss'),
  ],
  daisyui: {
    theme: true,
    themes: [
      {
        mytheme: {
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
};

module.exports = config;
