import React, {FunctionComponent} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AppButton from '../../components/app_button';
import AppSize from '../../components/size';
import {commonStyles} from '../../components/style';
import {TexTButton} from '../../components/text_button';
import {HighLightLabel} from '../../components/label';
import ColorConstants from '../../constants/color_constants';

type Props = {
  navigation: any;
};

const SignUp: FunctionComponent<Props> = ({navigation}) => {
  return (
    <View style={commonStyles.container}>
      <HighLightLabel
        labelStyle={commonStyles.color(ColorConstants.primaryWhite)}
        hightLightLabel="Create an Account"
        style={styles.highLightLabel}
      />
      <View style={commonStyles.ph(10)}>
        <AppSize height={20} width={undefined} />
        <AppButton
          text={'Create an Account'}
          style={undefined}
          textStyle={undefined}
          onPress={undefined}
        />
        <AppSize height={20} width={undefined} />
        <TexTButton
          onPressText="SignIn"
          infoText="Already have an Account ?"
          align={undefined}
          callBack={() => navigation.navigate('SignIn')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  highLightLabel:{
    height: 48,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: ColorConstants.primaryColor,
  }
});

export default SignUp;
