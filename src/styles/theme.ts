import { getFontFamily } from '../utils/fonts';

export const theme = {
  colors: {
    primary: '#3672E9',
    primaryDark: '#1E59D9',
    primaryLight: '#F0F6FF',
    secondary: '#FF8A65',
    text: {
      primary: '#1E2B4D',
      secondary: '#7D8597',
      light: '#FFFFFF',
      placeholder: '#A0A0A0',
    },
    background: {
      primary: '#FFFFFF',
      secondary: '#F9FAFC',
      tertiary: '#E8ECF4',
    },
    border: '#E8ECF4',
    success: '#4CAF50',
    error: '#F44336',
    warning: '#FFC107',
  },
  typography: {
    fontFamily: {
      regular: 'PlusJakartaSans-Regular',
      medium: 'PlusJakartaSans-Medium',
      semiBold: 'PlusJakartaSans-SemiBold',
      bold: 'PlusJakartaSans-Bold',
    },
    fontSize: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 20,
      '2xl': 24,
      '3xl': 28,
      '4xl': 32,
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    '2xl': 48,
    '3xl': 64,
  },
  borderRadius: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    full: 9999,
  },
  shadow: {
    sm: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 1,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 2,
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 5,
    },
  },
};

export type Theme = typeof theme;