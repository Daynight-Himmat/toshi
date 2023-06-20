import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/native';
import { Linking, Platform } from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import toastMessage from './toast_message';

class CommanFunctions {
  static routing = (
    navigation: {dispatch: (arg0: CommonActions.Action) => any},
    route: string,
  ) =>
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: route}],
      }),
    );

  static emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  static validateEmail = (validEmail: string) =>
    this.emailRegex.test(validEmail);

  static imagePicker = () => ImageCropPicker.openPicker({
    width: 300,
    height: 400,
    mediaType: 'photo',
    cropping: false,
    multiple: false,
  });  

  static openLink =  (url: string) => {
         Linking.openURL(url);
  }; 

  static whatsApp = async () => {
    const whatsApp = await AsyncStorage.getItem('whatsapp_no');
    const message = '';
    const iosUrl = `https://wa.me/+91${whatsApp}/?text=${message}`;
    // const androidUrl = `whatsapp://send?text=${message}&phone=91${whatsApp}`;
    const androidUrl = `https://api.whatsapp.com/send?phone=91${whatsApp}&text=${message}`;
    if(Platform.OS === 'ios'){
      await await Linking.openURL(iosUrl);
    }else{
      await Linking.openURL(androidUrl);
  }
  }; 
}

export default CommanFunctions;
