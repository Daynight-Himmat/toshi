import React, {FunctionComponent, SetStateAction, useState} from 'react';
import {View} from 'react-native';
import {AuthHeader} from '../../components/app_header';
import {
  alignSelf,
  commonStyles,
  paddingHorizontal,
} from '../../components/style';
import AppButton from '../../components/app_button';
import AppSize from '../../components/size';
import {HighLightLabel, Label} from '../../components/label';

import ColorConstants from '../../constants/color_constants';
import TextField from '../../components/floading_label';
import toastMessage from '../../components/toast_message';
import {useToast} from 'react-native-toast-notifications';
import Apis from '../../apis/api_functions';
import { Loading } from '../../components/no_data_found';

type Props = {
  navigation: any;
};

const ForgetPass: FunctionComponent<Props> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();

  const getCreateAccount = async () => {
    try {
      if (!email) {
        toastMessage(toast, 'Please Enter the Email-Address');
      } else {
        setLoading(true);
        await Apis.forgetPass(email).then(response => {
          if (response?.status === 200) {
            setLoading(false);
            toastMessage(toast, response?.data?.message);
            navigation.navigate('Create-Pass');
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
          hightLightLabel="Forget Password?"
          labelStyle={undefined}
          style={alignSelf('flex-start')}
        />
        <AppSize height={10} width={undefined} />
        <Label
          name="Don't Worry! Enter the Email address associated with your Account"
          style={undefined}
          margin={0}
        />
        <TextField
          value={email}
          label={'Enter the Email-Address'}
          onChangeText={(text: SetStateAction<string>) => setEmail(text)}
        />
        <AppSize height={20} width={undefined} />
        <AppButton text={'Send'} onPress={() => getCreateAccount()} />
        <AppSize height={20} width={undefined} />
      </View>
      {isLoading && <Loading/>}
    </View>
  );
};

export default ForgetPass;
