import React, {FunctionComponent} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ColorConstants from '../constants/color_constants';
import {CommonTwoText, HighLightLabel, Label} from './label';
import RowButton from './row_button';
import AppSize from './size';
import {alignItems, alignSelf, color, commonStyles, padding} from './style';
import {Avatar, Icon} from '@rneui/themed';
import AppButton from './app_button';
import {Loading} from './no_data_found';
import {ApiConstants} from '../constants/api_constants';

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
  inquiry_stage?: string;
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
          borderRadius: 5,
        }}
        imageProps={{
          borderRadius: 5,
        }}
        source={
          uri
            ? {
                uri: ApiConstants.baseProductImageUrl + uri?.split(',')[0],
              }
            : require('../assets/image/nofound.jpg')
        }
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

type Props1 = {
  label?: string;
  uri?: string;
  description?: string;
  iconCondition?: string;
  sendInquiry?: () => void;
  iconPress?: () => void;
  whatsAppPress?: () => void;
  containerPress?: () => void;
};

const ProductContainer: FunctionComponent<Props1> = ({
  uri,
  label,
  description,
  iconCondition,
  whatsAppPress,
  iconPress,
  sendInquiry,
  containerPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.inquiryColumContainer}
      onPress={containerPress}>
      <Avatar
        containerStyle={{
          width: '100%',
          height: 150,
          borderRadius: 5,
        }}
        renderPlaceholderContent={<Loading />}
        imageProps={{
          borderRadius: 5,
        }}
        source={
          uri
            ? {
                uri: ApiConstants.baseProductImageUrl + uri?.split(',')[0],
              }
            : require('../assets/image/nofound.jpg')
        }
      />
      <View style={padding(10)}>
        <HighLightLabel
          hightLightLabel={label}
          style={{
            alignSelf: 'flex-start',
          }}
        />
        <AppSize height={4} />
        {description && (
          <Label
            name={description ?? ''}
            style={styles.discription}
            numberOfLines={2}
          />
        )}
        <AppSize height={15} />
        <View style={commonStyles.row}>
          <AppButton
            text="send Inquiry"
            style={{flex: 2}}
            onPress={sendInquiry}
          />
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'flex-start',
              paddingLeft: 20,
            }}>
            <Icon name={iconCondition === 'Yes' ? "bookmark" : "bookmark-outline"} type="ionicon" onPress={iconPress} color={ColorConstants.primaryColor}/>
          </View>
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'flex-end',
              paddingRight: 20,
            }}>
            <Icon
              name="logo-whatsapp"
              type="ionicon"
              color={ColorConstants.whatsAppGreen}
              onPress={whatsAppPress}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

type Props3 = {
  uri?: string;
  iconType?: string;
  icon?: string;
  label?: string;
  description?: string;
  date?: string;
  onPress?: () => void;
  navigation?: any;
};

const FeedList: FunctionComponent<Props3> = ({
  uri,
  label,
  description,
  date,
  onPress
}) => {

  return (
    <TouchableOpacity style={styles.inquiryContainer} onPress={onPress}>
      <Avatar
        containerStyle={{
          width: 150,
          height: 150,
          borderRadius: 5,
          padding: 10,
        }}
        renderPlaceholderContent={<Loading />}
        
        source={
          uri
            ? {
                uri: ApiConstants.baseNewsMainImageUrl + uri,
              }
            : require('../assets/image/nofound.jpg')
        }
      />
      <View
        style={{
          flex: 1,
          paddingRight: 10,
        }}>
        <HighLightLabel
          hightLightLabel={label}
          style={{
            width: '100%',
            alignSelf: 'flex-start',
          }}
          labelStyle={{
            fontSize: 17,
            textAlign: 'left',
          }}
        />
        <AppSize height={4} />
        {description && (
          <Label
            name={description ?? ''}
            style={styles.discription}
            numberOfLines={4}
          />
        )}
        <AppSize height={5} />
        {date && (
          <Label
            name={date ?? ''}
            style={styles.discription}
            numberOfLines={1}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export {OrderList, ProductContainer, FeedList};

const styles = StyleSheet.create({
  inquiryContainer: {
    elevation: 100,
    flexDirection: 'row',
    backgroundColor: ColorConstants.primaryWhite,
    margin: 10,
    height: 150,
    shadowColor: ColorConstants.primaryBlack,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 4,
    borderRadius: 5,
  },
  inquiryColumContainer: {
    elevation: 100,
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
  discription: {
    color: ColorConstants.textHintColor,
  },
});
