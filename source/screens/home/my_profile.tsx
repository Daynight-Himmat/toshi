import React, {FunctionComponent, useEffect, useState} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {commonStyles, marginTop} from '../../components/style';
import MyProfileList from '../../components/MyProfileList';
import {AuthHeader} from '../../components/app_header';
import CommanFunctions from '../../components/comman_functions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ApiConstants} from '../../constants/api_constants';

type Props = {
  navigation: any;
};

const MyProfile: FunctionComponent<Props> = ({navigation}) => {
  const [getProfileImage, setProfileImage] = useState<string>('');
  const [getProfileName, setProfileName] = useState<string>('');

  const dashValue = [
    {
      name: 'Product Preference',
      icon: 'location-outline',
      iconType: 'ionicon',
      onPress: () => navigation.navigate('Product Preference'),
    },
    {
      name: 'Usage Preference',
      icon: 'location-outline',
      iconType: 'ionicon',
      onPress: () => navigation.navigate('Usage Preference'),
    },
    {
      name: 'Saved Product',
      icon: 'bookmark-outline',
      iconType: 'ionicon',
      onPress: () => navigation.navigate('Save Product'),
    },
    {
      name: 'Saved News Feeds',
      icon: 'bookmark-outline',
      iconType: 'ionicon',
      onPress: () => navigation.navigate('Save News Feeds'),
    },
    {
      name: 'Help & Support',
      icon: 'help-circle-outline',
      iconType: 'ionicon',
      onPress: () =>
        CommanFunctions.openLink(
          'https://toshibbaimpex.com/privacy-policy.php',
        ),
    },
    {
      name: 'About',
      icon: 'ios-information-circle-outline',
      iconType: 'ionicon',
      onPress: () => navigation.navigate('About Us'),
    },
    {
      name: 'Account Deletion',
      icon: 'trash-outline',
      iconType: 'ionicon',
      onPress: () =>
        CommanFunctions.openLink('http://app.toshibbaimpex.com/account.php'),
    },
    {
      name: 'Logout',
      icon: 'logout',
      iconType: 'antdesign',
      onPress: () => CommanFunctions.routing(navigation, 'SignIn'),
    },
  ];

  const getProfileUrl = async () => {
    const firstName = await AsyncStorage.getItem('first_name');
    const lastName = await AsyncStorage.getItem('last_name');
    const profile_photo = await AsyncStorage.getItem('profile_photo');
    const fullName = firstName! + ' ' + lastName!;
    setProfileImage(profile_photo ?? '');
    setProfileName(fullName ?? '');
  };

  useEffect(() => {
    getProfileUrl();
  }, []);

  return (
    <View style={commonStyles.container}>
      <AuthHeader
        navigation={navigation}
        show={true}
        showtitle={true}
        showAction={true}
        showLabel={true}
        label={getProfileName}
        title="My Profile"
        url={ApiConstants.baseProfileImageUrl + getProfileImage}
        onPress={() => {
          navigation.navigate('Edit Profile');
        }}
      />
      <ScrollView contentContainerStyle={marginTop(10)}>
        {dashValue.map((data, index) => (
          <MyProfileList
            onPress={data?.onPress}
            key={index}
            title={data?.name}
            icon={data?.icon}
            iconType={data?.iconType}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default MyProfile;
