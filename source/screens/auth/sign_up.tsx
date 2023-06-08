import React, {FunctionComponent, SetStateAction, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import AppButton from '../../components/app_button';
import AppSize from '../../components/size';
import {commonStyles} from '../../components/style';
import {TexTButton} from '../../components/text_button';
import {HighLightLabel} from '../../components/label';
import ColorConstants from '../../constants/color_constants';
import {AppHeader} from '../../components/app_header';
import TextField from '../../components/floading_label';

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

  const signUpValue = [
    {
      value: firstName,
      label: 'First Name',
      onChange: (text: string) => setFirstName(text),
    },
    {
      value: company,
      label: 'Company Name',
      onChange: (text: string) => setCompany(text),
    },
    {
      value: email,
      label: 'Email-Address',
      onChange: (text: string) => setEmail(text),
      keyType: 'email-address'
    },
    {
      value: phoneNumber,
      label: 'Phone Number',
      onChange: (text: string) => setPhoneNumber(text),
      keyType: 'numeric'
    },
    {
      value: country,
      label: 'Country',
      onChange: (text: string) => setCountry(text),
    },
    {
      value: message,
      label: 'Message',
      onChange: (text: string) => setMessage(text),
    },
  ];

  return (
    <View style={commonStyles.container}>
      <ScrollView style={commonStyles.ph(10)}>
        <AppSize height={20} width={undefined} />
        {signUpValue.map((data, index) => (
          <TextField
            value={data.value}
            label={data.label}
            keyboardType={data.keyType}
            onChangeText={data.onChange}
          />
        ))}

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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  highLightLabel: {
    height: 48,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: ColorConstants.primaryColor,
  },
});

export default SignUp;
