import React, {FunctionComponent, SetStateAction, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import AppButton from '../../components/app_button';
import AppSize from '../../components/size';
import {commonStyles, paddingHorizontal} from '../../components/style';
import {TexTButton} from '../../components/text_button';
import {HighLightLabel} from '../../components/label';
import ColorConstants from '../../constants/color_constants';
import {AppHeader} from '../../components/app_header';
import TextField from '../../components/floading_label';
import Apis from '../../apis/api_functions';
import toastMessage from '../../components/toast_message';
import {useToast} from 'react-native-toast-notifications';
import CommanFunctions from '../../components/comman_functions';

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
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();

  const getCreateAccount = async () => {
    try {
      if (!firstName) {
        toastMessage(toast, 'Please Enter the name');
      } else if (CommanFunctions.validateEmail(email) === false) {
        toastMessage(toast, 'Please Enter Valid Email');
      } else if (!company) {
        toastMessage(toast, 'Please Enter the Company');
      } else if (!phoneNumber) {
        toastMessage(toast, 'Please Enter the Phone Number');
      } else if (!country) {
        toastMessage(toast, 'Please Enter Country Name');
      } else if (!message) {
        toastMessage(toast, 'Please Enter the Message');
      } else {
        setLoading(true);
        await Apis.signUp(
          firstName,
          company,
          email,
          phoneNumber,
          country,
          message,
        ).then(response => {
          if (response?.status === 200) {
            setLoading(false);
            toastMessage(toast, response?.data?.message);
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

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
      keyType: 'email-address',
    },
    {
      value: phoneNumber,
      label: 'Phone Number',
      onChange: (text: string) => setPhoneNumber(text),
      keyType: 'numeric',
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
      <ScrollView style={paddingHorizontal(10)}>
        {signUpValue.map((data: any, index: any) => (
          <TextField
            key={index}
            value={data.value}
            label={data.label}
            keyboardType={data.keyType}
            onChangeText={data.onChange}
          />
        ))}

        <AppSize height={20} />
        <AppButton
          text={'Create an Account'}
          onPress={() => getCreateAccount()}
        />
        <AppSize height={20} />
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


export default SignUp;
