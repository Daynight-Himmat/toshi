import React, {FunctionComponent} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import ColorConstants from '../constants/color_constants';
import FontConstants from '../constants/font_constants';


type Props = {
  text: string;
  style: any;
  textStyle: any;
  onPress: any;
};

const AppButton: FunctionComponent<Props> = ({
  text,
  style,
  textStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[styles.button, {...style}]}
      onPress={onPress}>
      <Text style={[styles.buttonText, {...textStyle}]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: ColorConstants.primaryColor,
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: ColorConstants.primaryWhite,
    textAlign: 'center',
    fontFamily: FontConstants.medium,
  },
});

export default AppButton;
