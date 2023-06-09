import React, {FunctionComponent,useState} from 'react';
import {View} from 'react-native';
import {AuthHeader} from '../../components/app_header';
import {alignSelf, commonStyles, paddingHorizontal} from '../../components/style';
import AppButton from '../../components/app_button';
import {HighLightLabel} from '../../components/label';
import AppSize from '../../components/size';
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
