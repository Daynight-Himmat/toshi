import React, {FunctionComponent, useEffect, useState} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {
  commonStyles,
} from '../../components/style';
import {AuthHeader} from '../../components/app_header';
import CommanFunctions from '../../components/comman_functions';
import AppButton from '../../components/app_button';
import AppSize from '../../components/size';
import {Label} from '../../components/label';
import TextField from '../../components/floading_label';
import {Avatar} from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ApiConstants } from '../../constants/api_constants';
import { Loading } from '../../components/no_data_found';
import Apis from '../../apis/api_functions';
import toastMessage from '../../components/toast_message';
import { useToast } from 'react-native-toast-notifications';

type Props = {
  navigation: any;
};

const EditProfile: FunctionComponent<Props> = ({navigation}) => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [forntImage, setForntImage] = useState<string>('');
  const [backImage, setBackImage] = useState<string>('');
  const [profileImage, setProfileImage] = useState<string>('');
  const [isLoading, setLoading] = useState(false);
    const toast = useToast();

  const getProfileUrl = async () => {
    try{
        setLoading(true);
        const userId = await AsyncStorage.getItem('id');
        const firstName = await AsyncStorage.getItem('first_name');
        const lastName = await AsyncStorage.getItem('last_name');
        const emailAddres = await AsyncStorage.getItem('email');
        const phoneNumber = await AsyncStorage.getItem('phone');
        const profile_photo = await AsyncStorage.getItem('profile_photo');
        const front_photo = await AsyncStorage.getItem('business_card');
        const back_photo = await AsyncStorage.getItem('back_business_card');
        setFirstName(firstName ?? '');
        setLastName(lastName ?? '');
        setEmailAddress(emailAddres ?? '');
        setPhone(phoneNumber ?? '');
        setProfileImage(ApiConstants.baseProfileImageUrl+profile_photo ?? '');
        setForntImage(ApiConstants.baseBusinessImageUrl+front_photo ?? '');
        setBackImage(ApiConstants.baseBusinessImageUrl+back_photo ?? '');
        setLoading(false);
    }
   catch(error){
    console.log(error);
   }
  }

  const getEditProfile = async () => {
    if (!emailAddress) {
      toastMessage(toast, 'Please Enter the Email');
    } else if (CommanFunctions.validateEmail(emailAddress) === false) {
      toastMessage(toast, 'Please Enter Valid Email');
    } else if (!firstName) {
      toastMessage(toast, 'Please Enter the First Name');
    } if (!lastName) {
        toastMessage(toast, 'Please Enter the Last Name');
      }else {
    try {
        const userId = await AsyncStorage.getItem('id');
        const formData = new FormData();
        formData.append('first_name',firstName);
        formData.append('last_name',lastName);
        formData.append('email',emailAddress);
        formData.append('mobile_no',phone);
        formData.append('user_id',userId);
        forntImage && formData.append('business_card',{
            uri: forntImage,
            type: 'image/jpeg',
            name: 'myImage.jpg',
          });
          profileImage && formData.append('profile_photo',{
            uri: profileImage,
            type: 'image/jpeg',
            name: 'myImage.jpg',
          });
          backImage && formData.append('back_business_card',{
            uri: backImage,
            type: 'image/jpeg',
            name: 'myImage.jpg',
          });
       
      setLoading(true);
      await Apis.getEditProfile(formData).then(response => {
        if(response?.status === 200){
          setLoading(false);
          toastMessage(toast, response.data.message)
          navigation.goBack();
        }
      });
  
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
    }
  };

  useEffect(()=>{
    getProfileUrl()
  },[]);

  const editForm = [
    {
      label: 'First Name',
      value: firstName,
      onChangeText: (text: string) => setFirstName(text),
    },
    {
      label: 'Last Name',
      value: lastName,
      onChangeText: (text: string) => setLastName(text),
    },
    {
      label: 'Email Address',
      value: emailAddress,
      onChangeText: (text: string) => setEmailAddress(text),
    },
    {
      label: 'Phone Number',
      value: phone,
      keyType: 'numeric',
      onChangeText: (text: string) => setPhone(text),
    },
  ];

  const imageCard = [
    {
      label: 'Business Card Front Photo',
      uri: forntImage,
      image: require('../../assets/image/feeds.png'),
      onPress: () => CommanFunctions.imagePicker().then(image => {
        setForntImage(image.path);
      }).catch(error => console.log(error))
    },
    {
      label: 'Business Card Back Photo',
      uri: backImage,
      image: require('../../assets/image/feeds.png'),
      onPress: () => CommanFunctions.imagePicker().then(image => {
        setBackImage(image.path);
      }).catch(error => console.log(error))}
  ];

  return (
    <View style={commonStyles.container}>
      <AuthHeader
        navigation={navigation}
        show={true}
        showtitle={true}
        url={profileImage}
        imagePress={()=> CommanFunctions.imagePicker().then(image => {
            setProfileImage(image.path);
          }).catch(error => console.log(error))}
        title="Edit Profile"
      />
      <ScrollView contentContainerStyle={styles.viewContainer}>
        {editForm.map((data, index) => (
          <TextField
            key={index}
            label={data.label}
            value={data.value}
            keyboardType={data.keyType}
            onChangeText={data.onChangeText}
          />
        ))}
        <View
          style={{
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'space-evenly',
          }}>
          {imageCard.map((data, index) => (
            <View style={styles.imageContainer} key={index}>
              <Avatar
                containerStyle={styles.imageSize}
                imageProps={{
                  borderRadius: 15,
                }}
                onPress={data.onPress}
                source={data.uri ? {uri: data.uri} : data.image}
              />
              <Label name={data.label} style={styles.labelText} />
            </View>
          ))}
        </View>
        <AppSize height={20} />
        <AppButton text="Save and Continue" onPress={()=> getEditProfile()}/>
      </ScrollView>
      {isLoading && <Loading/>}
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    padding: 10,
  },
  imageSize: {height: 100, width: 100, justifyContent: 'center'},
  imageContainer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelText: {padding: 10, fontSize: 12},
});

export default EditProfile;
