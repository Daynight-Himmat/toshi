import React, {FunctionComponent, SetStateAction, useState} from 'react';
import {View} from 'react-native';
import {AuthHeader} from '../../components/app_header';
import {commonStyles} from '../../components/style';
import AppButton from '../../components/app_button';
import AppSize from '../../components/size';
import {HighLightLabel, Label} from '../../components/label';
import { TextField } from 'rn-material-ui-textfield';
import ColorConstants from '../../constants/color_constants';

type Props = {
  navigation: any;
};

const ForgetPass: FunctionComponent<Props> = ({navigation}) => {
  const [email, setEmail] = useState('');
  return (
    <View style={commonStyles.container}>
      <AuthHeader navigation={navigation} show={true} />
      <View style={commonStyles.ph(10)}>
        <AppSize height={20} width={undefined} />
        <HighLightLabel
          hightLightLabel="Forget Password?"
          labelStyle={undefined}
          style={commonStyles.as('flex-start')}
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
          onChangeText={(text: SetStateAction<string>)=> setEmail(text)}
          tintColor={ColorConstants.primaryBlack}
          textColor={ColorConstants.primaryBlack}
        />
        <AppSize height={20} width={undefined} />
        <AppButton
          text={'Send'}
          style={undefined}
          textStyle={undefined}
          onPress={()=> navigation.navigate('Create-Pass')}
        />
        <AppSize height={20} width={undefined} />
      </View>
    </View>
  );
};

export default ForgetPass;
