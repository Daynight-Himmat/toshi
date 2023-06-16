import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/native';
import { Linking, Platform } from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';

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

  static openLink = (url: string) => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " ,url);
      }
    });
  }; 

  static whatsApp = async () => {
    const whatsApp = await AsyncStorage.getItem('whatsapp_no');
    const message = '';
    const iosUrl = `https://wa.me/+91${whatsApp}/?text=${message}`;
    const androidUrl = `https://api.whatsapp.com/send?phone=91${whatsApp}&text=${message}`;
    if(Platform.OS === 'ios'){
      Linking.canOpenURL(iosUrl).then(supported => {
        if (supported) {
          Linking.openURL(iosUrl);
        } else {
          console.log("Don't know how to open URI: " ,iosUrl);
        }
      });
    }else{
    Linking.canOpenURL(androidUrl).then(supported => {
      if (supported) {
        Linking.openURL(androidUrl);
      } else {
        console.log("Don't know how to open URI: " ,androidUrl);
      }
    });}
  }; 

  // String url() {
    //   if (Platform.isIOS) {
    //     return "https://wa.me/+91$phone/?text=${Uri.parse(message)}";
    //   } else {
    //     return "https://api.whatsapp.com/send?phone=91$phone&text=${Uri.parse(message)}";
    //   }
    // }
    //
    // if (await canLaunch(url())) {
    //   await launch(url());
    // } else {
    //   print({"URL":"Could not launch ${url()}"});
    //   throw 'Could not launch ${url()}';
    // }
}

export default CommanFunctions;
