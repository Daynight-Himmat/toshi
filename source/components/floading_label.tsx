import React, {FunctionComponent} from 'react';
import {StyleSheet, View} from 'react-native';
import {Icon} from '@rneui/themed';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import ColorConstants from '../constants/color_constants';
import FontConstants from '../constants/font_constants';
import {Divider} from 'react-native-paper';

type Props = {
  label?: string;
  isPassword?: boolean;
  togglePassword?: any;
  value?: string;
  onChangeText?: (text: string) => void;
  keyboardType?: any;
};

const TextField: FunctionComponent<Props> = ({
  label,
  isPassword,
  togglePassword,
  value,
  onChangeText,
  keyboardType,
}) => {
  return (
    <View style={styles.view}>
      <FloatingLabelInput
        label={label ?? 'Please Enter'}
        labelStyles={styles.labelstyles}
        containerStyles={styles.container}
        isPassword={isPassword}
        togglePassword={togglePassword}
        keyboardType={keyboardType}
        value={value}
        inputStyles={styles.inputStyle}
        onChangeText={onChangeText}
        customShowPasswordComponent={
          <Icon name={'eye-outline'} type="ionicon" />
        }
        customHidePasswordComponent={
          <Icon name={'eye-off-outline'} type="ionicon" />
        }
      />
      <Divider style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    marginVertical: 10,
  },
  container: {
    borderWidth: 0,
    borderBottomColor: ColorConstants.primaryBlack,
    paddingTop: 15,
  },
  labelstyles: {
    fontSize: 17,
    paddingVertical: 5,
    color: ColorConstants.primaryBlack,
    fontFamily: FontConstants.medium,
  },
  inputStyle: {
    color: ColorConstants.primaryBlack,
    paddingTop: 5,
    fontFamily: FontConstants.ragular,
    fontSize: 17,
  },
  divider: {
    height: 1,
    backgroundColor: ColorConstants.primaryBlack,
  },
});

export default TextField;
