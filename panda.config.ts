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
        error: { value: '#FF3B30' },
        grey: {
          100: { value: '#FAFAFA' },
          500: { value: '#F2F2F7' },
          600: { value: '#EDEDED' },
        },
        mist: { value: '#FFFFFFCC' },
      },
      spacing: {
        'spacing-4': { value: '4px' },
        'spacing-8': { value: '8px' },
        'spacing-16': { value: '16px' },
        'spacing-24': { value: '24px' },
        'spacing-32': { value: '32px' },
        'spacing-64': { value: '64px' },
      },
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
      sectionTitle: {
        description: 'Section titles',
        value: {
          fontSize: '32px',
          fontWeight: '700',
          lineHeight: '45px',
          textAlign: 'center',
        },
      },
      sectionSubtitle: {
        description: 'Section titles',
        value: {
          fontSize: '24px',
          fontWeight: '600',
          lineHeight: '45px',
          textAlign: 'center',
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
      base: {
        description: 'Normal text',
        value: {
          fontSize: '20px',
          fontWeight: '400',
        },
      },
      small: {
        description: 'Small text',
        value: {
          fontSize: '18px',
          fontWeight: '400',
        },
      },
      bold: {
        description: 'Bold text',
        value: {
          fontSize: '20px',
          fontWeight: '600',
        },
      },
    },
    keyframes: {
      rotate: {
        to: {
          rotate: '360deg',
        },
      },
      'project-header-fade': {
        '0%': {
          opacity: '1',
          overflow: 'hidden',
        },
        '60%': {
          opacity: '0',
        },
        '100%': {
          opacity: '0',
          height: '0',
          overflow: 'hidden',
        },
      },
      'project-header-fade-no-interpolate-size': {
        '0%': {
          opacity: '1',
        },
        '0.1%': {
          maxHeight: '3em',
        },
        '100%': {
          opacity: '0',
          maxHeight: '0px',
        },
      },
      'project-header-name': {
        '0%': {
          fontSize: '32px',
          fontWeight: '700',
          lineHeight: '100%',
          translate: '0 0',
        },
        '100%': {
          fontSize: '18px',
          fontWeight: '600',
          lineHeight: '100%',
          translate: '0 -85px',
          marginBottom: '-85px',
        },
      },
      'project-header-mt': {
        '0%': {
          marginTop: 'spacing-24',
        },
        '100%': {
          marginTop: '-24px',
        },
      },
      'dog-hide': {
        '0%, 49%, 100%': {
          translate: '-50% 0',
        },
        '50%, 99%': {
          translate: '-50% -60px',
        },
      },
    },
    breakpoints: {
      sm: '400px',
      md: '600px',
      lg: '800px',
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
})
