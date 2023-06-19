import React, {FunctionComponent} from 'react';
import ColorConstants from '../../../constants/color_constants';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import InquiryOrder from './inquiry';
import OutDateOrder from './outdate';
import CompletedOrder from './complete';
import LostOrder from './lost';
import FontConstants from '../../../constants/font_constants';

const Tab = createMaterialTopTabNavigator();

const InquiryOrderStatus: FunctionComponent = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: ColorConstants.primaryBlack,
        tabBarActiveTintColor: ColorConstants.primaryColor,
        tabBarLabelStyle: {fontSize: 12, fontFamily: FontConstants.medium},
        tabBarIndicatorStyle: {
          columnGap: 12,
          backgroundColor: ColorConstants.primaryColor,
          borderRadius: 100,
          height: 4,
        },
      }}>
      <Tab.Screen name="Inquiry" component={InquiryOrder} />
      <Tab.Screen name="OuteDate" component={OutDateOrder} />
      <Tab.Screen name="Complete" component={CompletedOrder} />
      <Tab.Screen name="Lost" component={LostOrder} />
    </Tab.Navigator>
  );
};


export default InquiryOrderStatus;
