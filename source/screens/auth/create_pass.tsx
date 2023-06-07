import React, {FunctionComponent,useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {AuthHeader} from '../../components/app_header';
import {commonStyles} from '../../components/style';
import {CheckBox} from '@rneui/base';
import AppButton from '../../components/app_button';
import {HighLightLabel, Label} from '../../components/label';
import AppSize from '../../components/size';
import {TexTButton} from '../../components/text_button';
import ColorConstants from '../../constants/color_constants';
import FontConstants from '../../constants/font_constants';
import {TextField} from 'rn-material-ui-textfield';
import { Icon } from '@rneui/themed';

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
          label={'Enter the Password'}
          secureTextEntry={passVisible}
          suffix={<Icon 
            name={passVisible ? 'eye-outline' : 'eye-off-outline'}
            type='ionicon'
            onPress={()=> setPasswordVisible(!passVisible)}
          />}
          onChangeText={(text)=> setPassword(text)}
          tintColor={ColorConstants.primaryBlack}
          textColor={ColorConstants.primaryBlack}
        />
          <TextField
          value={conPassword}
          label={'Enter the Password'}
          secureTextEntry={conPassVisible}
          suffix={<Icon 
            name={conPassVisible ? 'eye-outline' : 'eye-off-outline'}
            type='ionicon'
            onPress={()=> setConPasswordVisible(!conPassVisible)}
          />}
          onChangeText={(text)=> setConPassword(text)}
          tintColor={ColorConstants.primaryBlack}
          textColor={ColorConstants.primaryBlack}
        />
        <AppSize height={20} width={undefined} />
        <AppButton
          text={'Update'}
          style={undefined}
          textStyle={undefined}
          onPress={undefined}
        />
        <AppSize height={20} width={undefined} />
      </View>
    </View>
  );
};

export default ResetPass;
