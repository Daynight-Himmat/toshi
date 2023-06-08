import React, {FunctionComponent, useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {commonStyles} from '../../components/style';
import {AuthHeader} from '../../components/app_header';
import {HighLightLabel, Label} from '../../components/label';
import ColorConstants from '../../constants/color_constants';
import FontConstants from '../../constants/font_constants';
import AppSize from '../../components/size';
import {TexTButton} from '../../components/text_button';
import AppButton from '../../components/app_button';
import {CheckBox} from '@rneui/base';
import TextField from '../../components/floading_label';
import {useToast} from 'react-native-toast-notifications';
import toastMessage from '../../components/toast_message';
import CommanFunctions from '../../components/comman_functions';
import Apis from '../../apis/api_functions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Loading } from '../../components/no_data_found';

type Props = {
  navigation: any;
};

const SignIn: FunctionComponent<Props> = ({navigation}) => {
  const [isChecked, setChecked] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [show, setShow] = useState(false);
  const toast = useToast();

  const getLogIn = async () => {
    if (!email) {
      toastMessage(toast, 'Please Enter the Email');
    } else if (CommanFunctions.validateEmail(email) === false) {
      toastMessage(toast, 'Please Enter Valid Email');
    } else if (!password) {
      toastMessage(toast, 'Please Enter the Password');
    } else {
    try {
      setLoading(true);
      await Apis.logInApi(email,password).then(response => {
        if(response?.status === 200){
          setLoading(false);
          console.log(response.data.result.token);
          AsyncStorage.setItem('token', response.data.result.token);
          AsyncStorage.setItem('id', response.data.result.name?.id.toString());
          toastMessage(toast, response.data?.message);
          CommanFunctions.routing(navigation, 'DashBoard');
        }
      });
  
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
    }
  };

  return (
    <View style={commonStyles.container}>
      <AuthHeader navigation={navigation} show={false} />
      <View style={commonStyles.ph(10)}>
        <AppSize height={20} width={undefined} />
        <HighLightLabel
          hightLightLabel="Welcome"
          labelStyle={undefined}
          style={commonStyles.as('flex-start')}
        />
        <AppSize height={5} width={undefined} />
        <Label name="Sign in to you account" style={undefined} margin={0} />
        <AppSize height={20} width={undefined} />
        <TextField
          label="Enter the Email-Address"
          value={email}
          onChangeText={value => setEmail(value)}
        />
        <TextField
          label="Enter the Password"
          value={password}
          isPassword
          onChangeText={value => setPassword(value)}
        />
        <View style={styles.meContainer}>
          <TouchableOpacity onPress={() => setChecked(!isChecked)}>
            <CheckBox
              onPress={() => setChecked(!isChecked)}
              checked={isChecked}
              uncheckedColor={ColorConstants.primaryColor}
              title={'Remember Me'}
              fontFamily={FontConstants.ragular}
              size={15}
              checkedColor={ColorConstants.primaryColor}
            />
          </TouchableOpacity>
          <TexTButton
            onPressText={'Forget Password ?'}
            align={'flex-end'}
            callBack={() => {
              navigation.navigate('Forget-Pass');
            }}
            infoText={''}
          />
        </View>
        <AppSize height={20} width={undefined} />
        <AppButton
          text={'Login'}
          onPress={() => getLogIn()}
        />
        <AppSize height={20} width={undefined} />
        <TexTButton
          onPressText="Create an Account"
          infoText="New User ?"
          align={undefined}
          callBack={() => navigation.navigate('SignUp')}
        />
      </View>
      {isLoading && <Loading />}
    </View>
  );
};

const styles = StyleSheet.create({
  highLightLabel: {
    fontSize: 14,
    fontWeight: '600',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    fontFamily: FontConstants.ragular,
    color: ColorConstants.primaryBlack,
  },
  meContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default SignIn;
