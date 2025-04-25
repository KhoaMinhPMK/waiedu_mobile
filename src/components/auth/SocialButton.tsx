import React from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  StyleProp,
  ViewStyle,
  ImageSourcePropType,
} from 'react-native';
import { theme } from '../../styles/theme';

interface SocialButtonProps {
  icon: ImageSourcePropType;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const SocialButton: React.FC<SocialButtonProps> = ({ icon, onPress, style }) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Image source={icon} style={styles.icon} resizeMode="contain" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 56,
    height: 56,
    borderRadius: theme.borderRadius.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
    backgroundColor: theme.colors.background.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: theme.spacing.sm,
    ...theme.shadow.sm,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default SocialButton;