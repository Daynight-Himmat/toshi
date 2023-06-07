import React, {FunctionComponent, useState, useRef, useEffect} from 'react';
import {StyleSheet, TextInput, Text, TouchableOpacity, View} from 'react-native';
import {commonStyles} from '../../components/style';
import {AuthHeader} from '../../components/app_header';
import {HighLightLabel, Label} from '../../components/label';
import ColorConstants from '../../constants/color_constants';
import FontConstants from '../../constants/font_constants';
import AppSize from '../../components/size';
import {TexTButton} from '../../components/text_button';
import AppButton from '../../components/app_button';
import {CheckBox} from '@rneui/base';
import {TextField} from 'rn-material-ui-textfield';
import {Icon, Input} from '@rneui/themed';
import { FloatingLabelInput } from 'react-native-floating-label-input';

type Props = {
  navigation: any;
};

const SignIn: FunctionComponent<Props> = ({navigation}) => {
  const [isChecked, setChecked] = useState(false);
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(!show);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [show]);

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
        
        <FloatingLabelInput/>
        {/* <TextField
          value={email}
          label={'Enter the Email-Address'}
          onChangeText={(text: string)=> setEmail(text)}
          tintColor={ColorConstants.primaryBlack}
          textColor={ColorConstants.primaryBlack}
        />
        <TextField
          value={password}
          label={'Enter the Password'}
          secureTextEntry={visible}
          suffix={<Icon 
            name={visible ? 'eye-outline' : 'eye-off-outline'}
            type='ionicon'
            onPress={()=> setVisible(!visible)}
          />}
          onChangeText={(text: string)=> setPassword(text)}
          tintColor={ColorConstants.primaryBlack}
          textColor={ColorConstants.primaryBlack}
        /> */}
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
          style={undefined}
          textStyle={undefined}
          onPress={()=> {
            
            navigation.navigate('DashBoard');
            console.log({email: email, password: password});
          }}
        />
        <AppSize height={20} width={undefined} />
        <TexTButton
          onPressText="Create an Account"
          infoText="New User ?"
          align={undefined}
          callBack={() => navigation.navigate('SignUp')}
        />
      </View>
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
