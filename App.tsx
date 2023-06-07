import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ToastProvider} from 'react-native-toast-notifications';
import AppContext from './app_context';
import {StatusBar} from 'react-native';
import ColorConstants from './source/constants/color_constants';

const App = () => {
  return (
    <SafeAreaProvider>
      <ToastProvider>
        <StatusBar backgroundColor={ColorConstants.primaryColor} />
        <AppContext />
      </ToastProvider>
    </SafeAreaProvider>
  );
};

export default App;
