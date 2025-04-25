import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform } from 'react-native';

import LoginScreen from '../screens/auth/login/LoginScreen';
import SignUpScreen from '../screens/auth/signup/SignUpScreen';
import ForgotPasswordScreen from '../screens/auth/forgot-password/ForgotPasswordScreen';

export type AuthStackParamList = {
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

// Custom screen options for smooth transitions with proper typing
const screenOptions = {
  headerShown: false,
  gestureEnabled: true,
  presentation: 'card' as const,
  // Fix animation type issue by using explicit type or conditional
  ...(Platform.OS === 'ios' 
    ? { animation: 'default' as const }
    : { animation: 'slide_from_right' as const })
};

const AuthNavigator = () => {
  return (
    <Stack.Navigator 
      initialRouteName="Login"
      screenOptions={screenOptions}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;