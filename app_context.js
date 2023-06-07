import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import SplashScreen from 'react-native-splash-screen';
import screens from './source/components/screen_page';

const Stack = createNativeStackNavigator();

const AppContext = () => {
  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelCome">
        {screens.map((data, index) => (
          <Stack.Screen
            key={index}
            name={data.name}
            component={data.component}
            options={{
              headerShown: false,
            }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContext;
