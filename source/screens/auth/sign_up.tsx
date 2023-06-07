import React, {FunctionComponent, SetStateAction, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import AppButton from '../../components/app_button';
import AppSize from '../../components/size';
import {commonStyles} from '../../components/style';
import {TexTButton} from '../../components/text_button';
import {HighLightLabel} from '../../components/label';
import ColorConstants from '../../constants/color_constants';
import { TextField } from 'rn-material-ui-textfield';
import { AppHeader } from '../../components/app_header';

type Props = {
  navigation: any;
};

const SignUp: FunctionComponent<Props> = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [country, setCountry] = useState('');
  const [message, setMessage] = useState('');

  return (
    <View style={commonStyles.container}>
      <AppHeader text='Create an Account' navigate={()=>navigation.goBack()} action={undefined}/>
      <ScrollView style={commonStyles.ph(10)}>
        <AppSize height={20} width={undefined} />
        <TextField
          value={firstName}
          label={'First Name'}
          onChangeText={(text: SetStateAction<string>)=> setFirstName(text)}
          tintColor={ColorConstants.primaryBlack}
          textColor={ColorConstants.primaryBlack}
        />
        <TextField
          value={company}
          label={'Company Name'}
          onChangeText={(text: SetStateAction<string>)=> setCompany(text)}
          tintColor={ColorConstants.primaryBlack}
          textColor={ColorConstants.primaryBlack}
        />
        <TextField
          value={email}
          label={'Email-Address'}
          onChangeText={(text: SetStateAction<string>)=> setEmail(text)}
          tintColor={ColorConstants.primaryBlack}
          textColor={ColorConstants.primaryBlack}
        />
        <TextField
          value={phoneNumber}
          label={'Phone Number'}
          onChangeText={(text: SetStateAction<string>)=> setPhoneNumber(text)}
          tintColor={ColorConstants.primaryBlack}
          textColor={ColorConstants.primaryBlack}
        />
        <TextField
          value={country}
          label={'Country'}
          onChangeText={(text: SetStateAction<string>)=> setCountry(text)}
          tintColor={ColorConstants.primaryBlack}
          textColor={ColorConstants.primaryBlack}
        />
        <TextField
          value={message}
          label={'Message'}
          onChangeText={(text: SetStateAction<string>)=> setMessage(text)}
          tintColor={ColorConstants.primaryBlack}
          textColor={ColorConstants.primaryBlack}
        />
        <AppSize height={20} width={undefined}/>
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
      </ScrollView>
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
