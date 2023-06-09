import React, {FunctionComponent} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ColorConstants from '../constants/color_constants';
import {CommonTwoText, Label} from './label';
import RowButton from './row_button';
import AppSize from './size';
import {color} from './style';
import {Avatar} from '@rneui/themed';

type Props = {
  uri?: string;
  label1?: string;
  label2?: string;
  label3?: string;
  label4?: string;
  start1?: string;
  start2?: string;
  start3?: string;
  start4?: string;
  inquiry_stage?:string;
  isComplete?: boolean;
  isSpecific?: boolean;
  onPress?: () => void;
};

const OrderList: FunctionComponent<Props> = ({
  uri,
  label1,
  label2,
  label3,
  label4,
  start1,
  start2,
  start3,
  start4,
  isComplete,
  isSpecific,
  inquiry_stage,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.inquiryContainer} onPress={onPress}>
      <Avatar
        containerStyle={{
          width: 150,
          height: 150,
        }}
        source={require('../assets/image/feeds.png')}
      />
      <View
        style={{
          flex: 1,
          padding: 10,
        }}>
        <CommonTwoText
          label={label1}
          start={start1}
          startStyle={color(ColorConstants.primaryColor)}
        />
        <CommonTwoText label={label2} start={start2} />
        <CommonTwoText label={label3} start={start3} />
        <CommonTwoText
          label={label4}
          start={start4}
          startStyle={color(ColorConstants.primaryColor)}
        />
        <AppSize height={10} />
        {isSpecific && (
          <View style={styles.specification}>
            <View style={styles.specific_container}>
              <Text style={styles.specific_text}>Specification</Text>
            </View>
            <Label
              name={inquiry_stage}
              style={color(ColorConstants.primaryColor)}
            />
          </View>
        )}
        {isComplete && (
          <RowButton text1="Download" text2="Send Email" onPress={() => {}} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default OrderList;

const styles = StyleSheet.create({
  inquiryContainer: {
    elevation: 100,
    flexDirection: 'row',
    backgroundColor: ColorConstants.primaryWhite,
    margin: 10,
    shadowColor: ColorConstants.primaryBlack,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 4,
    borderRadius: 5,
  },
  specification: {
    width: '100%',
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  specific_container: {
    height: 40,
    borderRadius: 5,
    backgroundColor: ColorConstants.primaryColor,
    justifyContent: 'center',
  },
  specific_text: {
    color: ColorConstants.primaryWhite,
    padding: 10,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
