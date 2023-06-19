import React, {FunctionComponent, useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, View, ScrollView} from 'react-native';
import {alignSelf, commonStyles} from '../../components/style';
import {Appbar} from 'react-native-paper';
import ColorConstants from '../../constants/color_constants';
import Menu from '../../assets/image/menu.svg';
import {Avatar} from '@rneui/themed';
import {HighLightLabel, Label} from '../../components/label';
import AppSize from '../../components/size';
import DSContainer from '../../components/dashboard_container';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ApiConstants} from '../../constants/api_constants';

type Props = {
  navigation: any;
};

const DashBoard: FunctionComponent<Props> = ({navigation}) => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [profileImage, setProfileImage] = useState<string>('');

  const dashValue = [
    {
      name: 'Inquiry & Order Status',
    },
    {
      name: 'List of Product',
    },
    {
      name: 'Message',
    },
    {
      name: 'Feed',
    },
    {
      name: 'Setting',
      navigation: () => navigation.navigate('Create-Pass'),
    },
  ];

  const getProfileUrl = async () => {
    try {
      const first = await AsyncStorage.getItem('first_name');
      const last = await AsyncStorage.getItem('last_name');
      const profile_photo = await AsyncStorage.getItem('profile_photo');
      setFirstName(first ?? '');
      setLastName(last ?? '');
      setProfileImage(ApiConstants.baseProfileImageUrl + profile_photo ?? '');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfileUrl();
  }, []);

  return (
    <View style={commonStyles.container}>
      <Appbar.Header
        style={{backgroundColor: ColorConstants.primaryWhite}}
        children={
          <View style={styles.headerStyles}>
            <TouchableOpacity onPress={() => navigation.navigate('MyProfile')}>
              <Menu height={40} width={40} />
            </TouchableOpacity>
            <Avatar
              onPress={() => navigation.navigate('MyProfile')}
              size={45}
              rounded
              source={
                profileImage
                  ? {uri: profileImage}
                  : require('../../assets/image/profile.png')
              }
            />
          </View>
        }
      />
      <View style={styles.viewContainer}>
        <HighLightLabel
          hightLightLabel={`Hello ${firstName}`}
          labelStyle={undefined}
          style={alignSelf('flex-start')}
        />
        <Label name="Welcome back." margin={0} />
        <AppSize height={20} />
      </View>
      <ScrollView style={styles.viewContainer}>
        {dashValue.map((data, index) => (
          <DSContainer
            index={index}
            key={index}
            data={data}
            navigation={navigation}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    paddingHorizontal: 10,
  },
  headerStyles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
  },
});

export default DashBoard;
