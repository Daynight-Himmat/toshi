import React, {FunctionComponent} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ColorConstants from '../constants/color_constants';
import FontConstants from '../constants/font_constants';

type Props = {
  name?: string;
  style?: any;
  margin?: number;
};

const Label: FunctionComponent<Props> = ({name, style, margin}) => {
  return (
    <View style={{marginVertical: margin ?? 0}}>
      <Text style={[styles.label_text, {...style}]}>{name}</Text>
    </View>
  );
};

type Props1 = {
  hightLightLabel?: string;
  style?: any;
  labelStyle?: any;
};

const HighLightLabel: FunctionComponent<Props1> = ({
  hightLightLabel,
  style,
  labelStyle,
}) => {
  return (
    <View style={[styles.introText, {...style}]}>
      <Text style={[styles.label, {...labelStyle}]}>{hightLightLabel}</Text>
    </View>
  );
};

type Props2 = {
  lightText: string;
};

const LightText: FunctionComponent<Props2> = ({lightText}) => {
  return (
    <View style={styles.introTextView}>
      <Text style={styles.introText}>{lightText}</Text>
    </View>
  );
};

type Props3 = {
  lightText1: string;
};

const LightText1: FunctionComponent<Props3> = ({lightText1}) => {
  return (
    <View>
      <Text style={styles.lightText1}>{lightText1}</Text>
    </View>
  );
};


type Props4 = {
  label?: string;
  start?: string;
}


const TwoText : FunctionComponent<Props4> = ({label, start}) => {
  return <View style={styles.two}>
    <View style={{flex:1 }}><Label name={label} style={styles.twoLabel}/></View>
    <View style={{flex:2 }}><Label name={': ' + start} /></View>
  </View>;
}

const styles = StyleSheet.create({
  label: {
    width: '100%',
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: ColorConstants.primaryBlack,
  },
  label_text: {
    fontSize: 14,
    color: ColorConstants.primaryBlack,
    fontFamily: FontConstants.medium,
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontWeight: '500',
  },
  introTextView: {
    width: '90%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  introText: {
    fontSize: 14,
    fontWeight: '600',
    justifyContent: 'center',
    alignSelf: 'center',
    fontFamily: FontConstants.ragular,
    color: ColorConstants.primaryBlack,
    textAlign: 'center',
  },
  lightText1: {
    fontSize: 12,
    fontWeight: '400',
    color: ColorConstants.primaryBlack,
    fontFamily: FontConstants.ragular,
  },
  two: {
    flexDirection:'row',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 8
  },
  twoLabel: {
    fontFamily: FontConstants.bold,
    fontWeight: '700', 
    color: ColorConstants.primaryColor}
});

export {Label, LightText, LightText1, HighLightLabel, TwoText};
