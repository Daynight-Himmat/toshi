import React, {FunctionComponent} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import ColorConstants from '../constants/color_constants';
import {CommonTwoText, HighLightLabel, Label} from './label';
import RowButton from './row_button';
import AppSize from './size';
import {color, commonStyles, padding} from './style';
import {Avatar, Icon} from '@rneui/themed';
import AppButton from './app_button';
import {Loading} from './no_data_found';
import {ApiConstants} from '../constants/api_constants';
import ColorsCondtion from './color_condition';
import FontConstants from '../constants/font_constants';
import {CheckBox} from '@rneui/base';
import WhatsApp from './whats_app';
import TimeCondition from './date_constants';

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
        containerStyle={styles.imageContainer}
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
      <View style={styles.labelsText}>
        <CommonTwoText
          label={label1}
          start={start1}
          startStyle={{color: ColorConstants.primaryColor, fontSize: 12}}
        />
        <CommonTwoText
          label={label2}
          start={start2}
          startStyle={{color: ColorConstants.primaryBlack, fontSize: 12}}
        />
        <CommonTwoText
          label={label3}
          start={start3}
          startStyle={{color: ColorConstants.primaryBlack, fontSize: 12}}
        />
        <CommonTwoText
          label={label4}
          start={start4}
          startStyle={{color: ColorConstants.primaryColor, fontSize: 12}}
        />
        <AppSize height={5} />
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
          <RowButton
            text1="Download"
            text2="Send Email"
            textStyle={{fontSize: 12}}
            onPress={() => {}}
          />
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
          labelStyle={{
            paddingRight: 20,
            textAlign: 'left',
          }}
          style={{
            alignSelf: 'flex-start',
            width: '100%',
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
            <Icon
              name={iconCondition === 'Yes' ? 'bookmark' : 'bookmark-outline'}
              type="ionicon"
              onPress={iconPress}
              color={ColorConstants.primaryColor}
            />
          </View>
          <WhatsApp />
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
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.inquiryContainer} onPress={onPress}>
      <Avatar
        containerStyle={styles.feedContainer}
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
            fontSize: 14,
            fontFamily: FontConstants.ragular,
            textAlign: 'left',
          }}
        />
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
            name={TimeCondition.fullDate(date).slice(0, 12)}
            style={styles.discription}
            numberOfLines={1}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

type Props4 = {
  label?: string;
  is_preference_saved: string;
  onPress?: () => void;
};

const PraferenceContainer: FunctionComponent<Props4> = ({
  label,
  onPress,
  is_preference_saved,
}) => {
  return (
    <TouchableOpacity style={praferenceStyles({}).praferenceContainer} onPress={onPress}>
      <TouchableOpacity
        style={praferenceStyles({d: is_preference_saved}).checkClick}
        onPress={onPress}>
        <Icon name="check" color={ColorConstants.primaryWhite} />
      </TouchableOpacity>
      <HighLightLabel hightLightLabel={label} />
    </TouchableOpacity>
  );
};

type Props5 = {
  title?: string;
  isChecked?: any;
  onPress?: () => void;
};

const FilterList: FunctionComponent<Props5> = ({title, onPress, isChecked}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <CheckBox
          onPress={onPress}
          checked={isChecked}
          uncheckedColor={ColorConstants.primaryColor}
          title={title}
          fontFamily={FontConstants.ragular}
          size={15}
          checkedColor={ColorConstants.primaryColor}
        />
      </TouchableOpacity>
    </View>
  );
};

export {OrderList, ProductContainer, FeedList, PraferenceContainer, FilterList};

interface StyleSheetType {
  praferenceContainer: ViewStyle;
  checkClick: ViewStyle;
}

interface StylesProps {
  d?: string;
}

type StylesFunctionProps = (props: StylesProps) => StyleSheetType;

const praferenceStyles: StylesFunctionProps = ({d}) =>
  StyleSheet.create<StyleSheetType>({
    praferenceContainer: {
      marginTop: 15,
      elevation: 10,
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: ColorConstants.primaryWhite,
      margin: 10,
      height: 60,
      width: '95%',
      shadowColor: ColorConstants.primaryBlack,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.4,
      shadowRadius: 1,
      borderRadius: 5,
    },
    checkClick: {
      right: -20,
      top: -20,
      position: 'absolute',
      elevation: 100,
      borderRadius: 100,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: ColorsCondtion.backgroundColor(d),
      margin: 10,
      height: 30,
      width: 30,
      borderColor: ColorConstants.textGrey,
      borderWidth: 0.5,
      shadowColor: ColorConstants.primaryBlack,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.4,
      shadowRadius: 4,
    },
  });

const styles = StyleSheet.create({
  inquiryContainer: {
    elevation: 100,
    flexDirection: 'row',
    backgroundColor: ColorConstants.primaryWhite,
    margin: 4,
    flex: 1,
    shadowColor: ColorConstants.primaryBlack,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderRadius: 5,
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 5,
    padding: 5,
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
    flex: 1,
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  specific_container: {
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
  labelsText: {
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 5,
    justifyContent: 'center',
  },
  feedContainer: {
    width: 120,
    height: 120,
    borderRadius: 5,
    padding: 10,
  },
});
