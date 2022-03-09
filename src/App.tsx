import React, { useState } from 'react';
import MainNavigation from './navigation/MainNavigation';
import AppLoading from 'expo-app-loading';
import { loadFonts } from './utils/commonUtils';
import { ThemeProvider } from 'styled-components/native';
import theme from '@table2night/utils/theme/theme';
import Toast from 'react-native-toast-message';

export default function App() {
  // State to store information if App has finished loading
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Function to do loading at startup... while splash is showed
  const appStart = async (): Promise<void> => {
    await loadFonts();
  };

  // If App is still loading, return splash screen
  if (!isLoaded) {
    return (
      <AppLoading
        startAsync={appStart}
        onFinish={() => setIsLoaded(true)}
        onError={() => {
          console.log('Error while loading app');
        }}
      />
    );
  }

  // App
  return (
    <ThemeProvider theme={theme}>
      <MainNavigation />
      <Toast />
    </ThemeProvider>
  );
}
