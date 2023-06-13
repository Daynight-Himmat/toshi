import React, {FunctionComponent} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  View,
} from 'react-native';
import {commonStyles} from '../../components/style';
import {Appbar} from 'react-native-paper';
import ColorConstants from '../../constants/color_constants';
import Menu from '../../assets/image/menu.svg';
import {Avatar} from '@rneui/themed';
import {HighLightLabel, Label} from '../../components/label';
import AppSize from '../../components/size';
import DSContainer from '../../components/dashboard_container';
import MyProfileList from '../../components/MyProfileList';
import { AuthHeader } from '../../components/app_header';
import CommanFunctions from '../../components/comman_functions';

type Props = {
  navigation: any;
};

const MyProfile: FunctionComponent<Props> = ({navigation}) => {
  const dashValue = [
    {
      name: 'Product Preference',
      icon: 'location-outline',
      iconType: 'ionicon',
      onPress: ()=> navigation.navigate('Product Preference'),
    },
    {
      name: 'Usage Preference',
      icon: 'location-outline',
      iconType: 'ionicon',
      onPress: ()=> navigation.navigate('Usage Preference'),
    },
    {
      name: 'Saved Product',
      icon: 'bookmark-outline',
      iconType: 'ionicon',
      onPress: ()=> navigation.navigate('Save Product'),
    },
    {
      name: 'Saved News Feeds',
      icon: 'bookmark-outline',
      iconType: 'ionicon',
      onPress: ()=> navigation.navigate('Save News Feeds'),
    },
    {
      name: 'Help & Support',
      icon: 'help-circle-outline',
      iconType: 'ionicon',
      onPress: ()=> {},
    },
    {
      name: 'About',
      icon: 'ios-information-circle-outline',
      iconType: 'ionicon',
      onPress: ()=> navigation.navigate('About Us'),
    },
    {
      name: 'Account Deletion',
      icon: 'trash-outline',
      iconType: 'ionicon',
      onPress: ()=> {},
    },
    {
      name: 'Logout',
      icon: 'logout',
      iconType: 'antdesign',
      onPress: ()=> CommanFunctions.routing(navigation, 'SignIn'),
    },
  ];

  return (
    <View style={commonStyles.container}>
      <AuthHeader navigation={navigation} show={true}  showtitle={true} showAction={true} showLabel={true} title='My Profile'/>
     <ScrollView contentContainerStyle={{
      marginTop: 10
     }}>
      {dashValue.map((data, index)=> <MyProfileList
          onPress={data?.onPress} 
          key={index}
          title={data?.name}
          icon={data?.icon}
          iconType={data?.iconType}
        />)}
     </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default MyProfile;
