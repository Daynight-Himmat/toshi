import React, {FunctionComponent} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import SplashScreen from 'react-native-splash-screen';
import screens from './source/components/screen_page';
import ColorConstants from './source/constants/color_constants';
import FontConstants from './source/constants/font_constants';

const Stack = createNativeStackNavigator();

const AppContext: FunctionComponent = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelCome">
        {screens.map((data, index) => (
          <Stack.Screen
            key={index}
            name={data.name}
            component={data.component}
            options={({route, navigation}) => ({
              headerShown: data.headerShown,
              headerTitle: data.title,
              headerTintColor: ColorConstants.primaryWhite,
              headerTitleStyle: {
                color: ColorConstants.primaryWhite,
                fontFamily: FontConstants.ragular,
                fontSize: 17,
                fontWeight: '500'
              },
              headerStyle: {
                backgroundColor: ColorConstants.primaryColor,
              },
            })}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContext;
