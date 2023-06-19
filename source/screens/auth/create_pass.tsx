import React, {FunctionComponent, useState} from 'react';
import {View} from 'react-native';
import {AuthHeader} from '../../components/app_header';
import {
  alignSelf,
  commonStyles,
  paddingHorizontal,
} from '../../components/style';
import AppButton from '../../components/app_button';
import {HighLightLabel} from '../../components/label';
import AppSize from '../../components/size';
import TextField from '../../components/floading_label';
import toastMessage from '../../components/toast_message';
import {useToast} from 'react-native-toast-notifications';
import Apis from '../../apis/api_functions';
import { Loading } from '../../components/no_data_found';

type Props = {
  navigation: any;
};

const ResetPass: FunctionComponent<Props> = ({navigation}) => {
  const toast = useToast();
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');
  const [isLoading, setLoading] = useState(false);

  const getCreatePass = async () => {
    try {
      if (!password) {
        toastMessage(toast, 'Please Enter the Password');
      } else if (!conPassword) {
        toastMessage(toast, 'Please Enter the Confirm-Password');
      } else if (password !== conPassword) {
        toastMessage(toast, 'Password not match');
      } else {
        setLoading(true);
        await Apis.createPassword(password, conPassword).then(response => {
          if (response?.status === 200) {
            setLoading(false);
            console.log(response?.data);
            toastMessage(toast, response?.data?.message);
            navigation.navigate('SignIn');
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={commonStyles.container}>
      <AuthHeader navigation={navigation} show={true} />
      <View style={paddingHorizontal(10)}>
        <AppSize height={20} width={undefined} />
        <HighLightLabel
          hightLightLabel="Change Password?"
          labelStyle={undefined}
          style={alignSelf('flex-start')}
        />
        <AppSize height={5} width={undefined} />
        <TextField
          value={password}
          isPassword
          label={'Enter the Password'}
          onChangeText={text => setPassword(text)}
        />
        <TextField
          value={conPassword}
          isPassword
          label={'Enter the Password'}
          onChangeText={text => setConPassword(text)}
        />
        <AppSize height={20} width={undefined} />
        <AppButton text={'Update'} onPress={() => getCreatePass()} />
        <AppSize height={20} width={undefined} />
      </View>
      {isLoading && <Loading />} 
    </View>
  );
};

export default ResetPass;
