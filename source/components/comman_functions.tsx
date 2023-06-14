import {CommonActions} from '@react-navigation/native';
import { Linking } from 'react-native';
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
}

export default CommanFunctions;
