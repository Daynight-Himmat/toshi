import React, {FunctionComponent,useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {AuthHeader} from '../../components/app_header';
import {commonStyles} from '../../components/style';
import {CheckBox} from '@rneui/base';
import AppButton from '../../components/app_button';
import {HighLightLabel, Label} from '../../components/label';
import AppSize from '../../components/size';
import ColorConstants from '../../constants/color_constants';
import { Icon } from '@rneui/themed';
import TextField from '../../components/floading_label';

type Props = {
  navigation: any;
};

const ResetPass: FunctionComponent<Props> = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');
  const [passVisible, setPasswordVisible] = useState(false);
  const [conPassVisible, setConPasswordVisible] = useState(false);

  return (
    <View style={commonStyles.container}>
      <AuthHeader navigation={navigation} show={true} />
      <View style={commonStyles.ph(10)}>
        <AppSize height={20} width={undefined} />
        <HighLightLabel
          hightLightLabel="Change Password?"
          labelStyle={undefined}
          style={commonStyles.as('flex-start')}
        />
        <AppSize height={5} width={undefined} />
        <TextField
          value={password}
          isPassword
          label={'Enter the Password'}
          onChangeText={(text)=> setPassword(text)}
          
        />
          <TextField
          value={conPassword}
          isPassword
          label={'Enter the Password'}
          onChangeText={(text)=> setConPassword(text)}
        />
        <AppSize height={20} width={undefined} />
        <AppButton
          text={'Update'}
          onPress={undefined}
        />
        <AppSize height={20} width={undefined} />
      </View>
    </View>
  );
};

export default ResetPass;
