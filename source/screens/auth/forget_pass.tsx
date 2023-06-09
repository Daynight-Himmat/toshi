import React, {FunctionComponent, SetStateAction, useState} from 'react';
import {View} from 'react-native';
import {AuthHeader} from '../../components/app_header';
import {alignSelf, commonStyles, paddingHorizontal} from '../../components/style';
import AppButton from '../../components/app_button';
import AppSize from '../../components/size';
import {HighLightLabel, Label} from '../../components/label';

import ColorConstants from '../../constants/color_constants';
import TextField from '../../components/floading_label';

type Props = {
  navigation: any;
};

const ForgetPass: FunctionComponent<Props> = ({navigation}) => {
  const [email, setEmail] = useState('');
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
        <AppButton
          text={'Send'}
          onPress={() => navigation.navigate('Create-Pass')}
        />
        <AppSize height={20} width={undefined} />
      </View>
    </View>
  );
};

export default ForgetPass;
