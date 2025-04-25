/**
 * WaiEdu App
 */

import React, { useState, useEffect } from 'react';
import { StatusBar, View, ActivityIndicator } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import { theme } from './src/styles/theme';
import { AuthProvider } from './src/contexts/AuthContext';

function App(): React.JSX.Element {
  const [isReady, setIsReady] = useState(false);

  // Simulate any initialization tasks (like loading fonts, checking auth status, etc)
  useEffect(() => {
    const prepare = async () => {
      try {
        // Add any initialization logic here
        // Example: await loadFonts();
        
        // Simulate delay for initialization
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn('Error during app initialization:', e);
      } finally {
        setIsReady(true);
      }
    };

    prepare();
  }, []);

  if (!isReady) {
    return (
      <View style={{ 
        flex: 1, 
        backgroundColor: theme.colors.background.primary,
        justifyContent: 'center', 
        alignItems: 'center' 
      }}>
        <ActivityIndicator color={theme.colors.primary} size="large" />
      </View>
    );
  }

  return (
    <AuthProvider>
      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={theme.colors.background.primary}
          translucent={false}
        />
        <AppNavigator />
      </View>
    </AuthProvider>
  );
}

export default App;
