const theme = {
  color: {
    white: '#ffffff',
    black: '#000000',
    green10: '#DEFBE6',
    green20: '#A7F0BA',
    green30: '#6FDC8C',
    green40: '#42BE65',
    green50: '#24A148',
    green60: '#198038',
    green70: '#0E6027',
    green80: '#044317',
    green90: '#022D0D',
    green100: '#071908',
    gray20: '#E6E6E6',
    gray80: '#9CA3AF',
    gray100: '#717171',
  },

  fontSize: {
    size8: '8px',
    size12: '12px',
    size16: '16px',
    size20: '20px',
    size24: '24px',
    size32: '32px',
  },

  space: {
    space4: '4px',
    space8: '8px',
    space16: '16px',
    space20: '20px',
    space24: '24px',
    space32: '32px',
    space48: '48px',
    space64: '64px',
    space80: '80px',
  },
};

export type TTheme = typeof theme;

export const stripPx = (value: string) => +value.replace('px', '');

export default theme;
