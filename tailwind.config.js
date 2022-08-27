/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [],
  theme: {
    extend: {
      typography: theme => ({
        dark: {
          css: {
            color: theme('colors.gray.400'),
            'class~="lead"': {
              color: theme('colors.gray.300'),
            },
            a: {
              color: theme('colors.blue.400'),
            },
            strong: {
              color: theme('colors.white'),
            },
            'ul > li::marker': {
              color: theme('colors.gray.600'),
            },
            h2: {
              color: theme('colors.white'),
            },
            'figure > figcaption': {
              color: theme('colors.gray.400'),
            },
            thead: {
              color: theme('colors.white'),
              borderBottomColor: theme('colors.gray.400'),
            },
            'tbody tr': {
              borderBottomColor: theme('colors.gray.600'),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ['dark'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
};
