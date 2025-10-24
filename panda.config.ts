import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customisation
  theme: {
    tokens: {
      fonts: {
        main: {
          value: '"Mona Sans", sans-serif',
        },
      },
      colors: {
        primary: { value: '#0F1F29' },
        secondary: { value: '#6A8698' },
        blue: { value: '#007AFF' },
        magenta: { value: '#E666FF' },
        red: { value: '#E81B1B' },
        grey: {
          500: { value: '#F2F2F7' },
        },
        mist: { value: '#FFFFFFCC' },
      },
      spacing: {
        'spacing-4': { value: '4px' },
        'spacing-8': { value: '8px' },
        'spacing-16': { value: '16px' },
        'spacing-24': { value: '24px' },
        'spacing-32': { value: '32px' },
      }
    },
    textStyles: {
      title: {
        description: 'Page titles',
        value: {
          fontSize: '32px',
          fontWeight: '700',
          lineHeight: '45px',
        },
      },
      subtitle: {
        description: 'Page subtitles',
        value: {
          fontSize: '20px',
          fontWeight: '400',
          lineHeight: '32px',
        },
      },
      tab: {
        description: 'Tabs',
        value: {
          fontSize: '20px',
          fontWeight: 600,
        },
      },
      cardTitle: {
        description: 'Card titles',
        value: {
          fontSize: '18px',
          fontWeight: '600',
        },
      },
      // heading: {
      //   description: 'Headings',
      //   value: {
      //     fontSize: '20px',
      //     fontWeight: '600',
      //   },
      // },
      base: {
        description: 'Normal text',
        value: {
          fontSize: '20px',
          fontWeight: '400',
        },
      },
    },
    keyframes: {
      rotate: {
        to: {
          '--angle': '360deg',
        },
      },
      'project-header-fade': {
        from: {
          opacity: '1',
          overflow: 'hidden',
        },
        '8%, 100%': {
          opacity: '0',
          height: '0',
          overflow: 'hidden',
        },
      },
      'project-header-name': {
        from: {
          fontSize: '32px',
          fontWeight: '700',
          lineHeight: '100%',
          marginTop: '0',
        },
        '10%': {
          marginTop: '0',
        },
        '15%, 100%': {
          fontSize: '18px',
          fontWeight: '600',
          lineHeight: '100%',
          marginTop: '-48px',
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
})
