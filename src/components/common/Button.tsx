import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacityProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { theme } from '../../styles/theme';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  disabled?: boolean;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
}

// Define types for our dynamic style keys
type ButtonStyleKey = 'button' | 'buttonSm' | 'buttonMd' | 'buttonLg' | 'buttonPrimary' | 
  'buttonSecondary' | 'buttonOutline' | 'buttonDisabled';
type TextStyleKey = 'text' | 'textPrimary' | 'textSecondary' | 'textOutline' | 'textDisabled';

const Button: React.FC<ButtonProps> = ({
  title,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  textStyle,
  style,
  ...props
}) => {
  // Create properly typed keys for style lookups
  const buttonSizeKey = `button${size.charAt(0).toUpperCase() + size.slice(1)}` as ButtonStyleKey;
  const buttonVariantKey = `button${variant.charAt(0).toUpperCase() + variant.slice(1)}` as ButtonStyleKey;
  const textVariantKey = `text${variant.charAt(0).toUpperCase() + variant.slice(1)}` as TextStyleKey;

  const buttonStyles = [
    styles.button,
    styles[buttonSizeKey],
    styles[buttonVariantKey],
    disabled && styles.buttonDisabled,
    style,
  ];

  const textStyles = [
    styles.text,
    styles[textVariantKey],
    disabled && styles.textDisabled,
    textStyle,
  ];

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={buttonStyles}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator
          color={variant === 'outline' ? theme.colors.primary : theme.colors.text.light}
          size="small"
        />
      ) : (
        <Text style={textStyles}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

// Styles remain the same
const styles = StyleSheet.create({
  button: {
    borderRadius: theme.borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSm: {
    height: 40,
    paddingHorizontal: theme.spacing.md,
  },
  buttonMd: {
    height: 50,
    paddingHorizontal: theme.spacing.lg,
  },
  buttonLg: {
    height: 56,
    paddingHorizontal: theme.spacing.xl,
  },
  buttonPrimary: {
    backgroundColor: theme.colors.primary,
    ...theme.shadow.md,
  },
  buttonSecondary: {
    backgroundColor: theme.colors.secondary,
    ...theme.shadow.md,
  },
  buttonOutline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  buttonDisabled: {
    backgroundColor: theme.colors.background.tertiary,
    ...theme.shadow.sm,
  },
  text: {
    fontFamily: theme.typography.fontFamily.semiBold,
    fontSize: theme.typography.fontSize.md,
    letterSpacing: 0.5,
  },
  textPrimary: {
    color: theme.colors.text.light,
  },
  textSecondary: {
    color: theme.colors.text.light,
  },
  textOutline: {
    color: theme.colors.primary,
  },
  textDisabled: {
    color: theme.colors.text.secondary,
  },
});

export default Button;