import { Platform } from 'react-native';

// Font family mapping for consistent usage throughout the app
export const getFontFamily = (fontName: string): string => {
  // Map the theme font names to actual font files
  // This helps handling font naming issues in some platforms
  const fontMap: Record<string, string> = {
    'PlusJakartaSans-Regular': 'PlusJakartaSans-Regular',
    'PlusJakartaSans-Medium': 'PlusJakartaSans-Medium', 
    'PlusJakartaSans-SemiBold': 'PlusJakartaSans-SemiBold',
    'PlusJakartaSans-Bold': 'PlusJakartaSans-Bold',
  };
  
  return fontMap[fontName] || fontName;
};

// Helper to adjust font names based on platform differences if needed
export const adjustFontFamily = (fontFamily: string): string => {
  // Some platforms might need specific naming adjustments
  if (Platform.OS === 'ios') {
    return fontFamily;
  }
  return fontFamily;
};

// For use in the app startup to ensure all custom fonts are properly set up
export const configureFonts = (): void => {
  // Any font configuration needed at app startup would go here
  // For example, configuring global text components or setting default font families
  console.log('Font configuration complete');
};