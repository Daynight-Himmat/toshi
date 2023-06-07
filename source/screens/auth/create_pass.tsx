import React, {FunctionComponent} from 'react';
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

type Props = {
  navigation: any;
};

const ResetPass: FunctionComponent<Props> = ({navigation}) => {
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
