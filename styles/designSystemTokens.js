const tailwindColor = require('tailwindcss/colors');
const { fontFamily: fontFamilies } = require('tailwindcss/defaultTheme');

// for tailwind-css design system

const colors = {
  'retro-pink-01': '#f8e1e9',
  'retro-pink-02': '#f1c3d3',
  'retro-pink-03': '#eaa5bd', 
  'retro-pink-04': '#e387a7',
  'retro-pink-05': '#dc6991',
  'retro-pink-06': '#d54b7b',
  'retro-pink-07': '#ce2d65',
  'retro-pink-08': '#c70f4f',
  'grayscale-00': '#ffffff',
  'grayscale-01': '#f6f7f8',
  'grayscale-02': '#e6e8eb',
  'grayscale-03': '#bdc1c7',
  'grayscale-04': '#898f95',
  'grayscale-05': '#565d63',
  'grayscale-06': '#353d43',
  'grayscale-07': '#282d32',
  'grayscale-08': '#181c20',
  'grayscale-09': '#0f1215',
  'grayscale-10': '#05070e',
  'dim-white-10': 'rgba(255, 255, 255, 0.1)',
  'dim-white-20': 'rgba(255, 255, 255, 0.2)',
  'dim-black-05': 'rgba(0, 0, 0, 0.05)',
  'dim-black-10': 'rgba(0, 0, 0, 0.1)',
  'dim-black-20': 'rgba(0, 0, 0, 0.2)',
  'dim-black-30': 'rgba(0, 0, 0, 0.3)',
  'dim-black-35': 'rgba(0, 0, 0, 0.35)',
  'dim-black-50': 'rgba(0, 0, 0, 0.5)',
  primary: tailwindColor.pink,
  gray: tailwindColor.gray,
}

const borderRadius = {
  'default': '4px',
  'small': '4px',
  'medium': '8px',
  'large': '16px',
  'circular': '100px',
}

const spacing = {
  0: '0px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  7: '28px',
  8: '32px',
  9: '36px',
  10: '40px',
  11: '44px',
  12: '48px',
  13: '52px',
  14: '56px',
  15: '60px',
  16: '64px',
  17: '68px',
  18: '72px',
  19: '76px',
  20: '80px',
  21: '84px',
  22: '88px',
  23: '92px',
  24: '96px',
  25: '100px',
  26: '104px',
  27: '108px',
  28: '112px',
  29: '116px',
  30: '120px',
  31: '124px',
  32: '128px',
  33: '132px',
  34: '136px',
  35: '140px',
  36: '144px',
  37: '148px',
  38: '152px',
  39: '156px',
  40: '160px',
  41: '164px',
  42: '168px',
  43: '172px',
  44: '176px',
  45: '180px',
  46: '184px',
  47: '188px',
  48: '192px',
  49: '196px',
  50: '200px',
}

const textColor = {
  'text-strong': colors['grayscale-10'],
  'text-body': colors['grayscale-5'],
  'text-disabled': colors['grayscale-3'],
}

const backgroundColor = {
  'background-dim': colors['dim-black-50'],
}

const borderColor = {
  'default': colors['grayscale-2'],
}

const lineHeight = {
  11: '2.75rem',
  12: '3rem',
  13: '3.25rem',
  14: '3.5rem',
}

const fontFamily = {
  sans: ['var(--font-space-grotesk)', ...fontFamilies.sans],
  mono: ['var(--font-space-grotesk)', ...fontFamilies.mono],
  DOSGothic: ['DOSGothic', ...fontFamilies.serif],
  DOSMyungjo: ['DOSMyungjo', ...fontFamilies.serif]
}

const typography = ({ theme }) => ({
  DEFAULT: {
    css: {
      a: {
        color: theme('colors.primary.500'),
        '&:hover': {
          color: `${theme('colors.primary.600')}`,
        },
        code: { color: theme('colors.primary.400') },
      },
      'h1,h2': {
        fontWeight: '700',
        letterSpacing: theme('letterSpacing.tight'),
      },
      h3: {
        fontWeight: '600',
      },
      code: {
        color: theme('colors.indigo.500'),
      },
    },
  },
  invert: {
    css: {
      a: {
        color: theme('colors.primary.500'),
        '&:hover': {
          color: `${theme('colors.primary.400')}`,
        },
        code: { color: theme('colors.primary.400') },
      },
      'h1,h2,h3,h4,h5,h6': {
        color: theme('colors.gray.100'),
      },
    },
  },
})

const designSystemTokens = {
  colors,
  borderRadius,
  spacing,
  textColor,
  backgroundColor,
  borderColor,
  lineHeight,
  fontFamily,
  typography,
};

export default designSystemTokens;