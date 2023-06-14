import React, {FunctionComponent} from 'react';
import {StyleSheet, Dimensions, View, Image} from 'react-native';
import ColorConstants from '../constants/color_constants';
import {Appbar, Button} from 'react-native-paper';
import FontConstants from '../constants/font_constants';
import {Icon} from '@rneui/base';
import ColorsCondtion from './color_condition';
import {Label} from './label';
import AppSize from './size';
import {Avatar} from '@rneui/themed';

const {height, width} = Dimensions.get('screen');

type Props = {
  text?: string;
  navigate?: any;
  action?: any;
};

const AppHeader: FunctionComponent<Props> = ({text, navigate, action}) => {
  return (
    <Appbar.Header style={styles.headerStyles}>
      <Appbar.BackAction
        onPress={navigate}
        style={styles.backButton}
        color={ColorConstants.primaryWhite}
      />
      <Appbar.Content
        title={text ?? ''}
        color={ColorConstants.primaryWhite}
        titleStyle={styles.headerText}
      />
      {action}
    </Appbar.Header>
  );
};

type Props1 = {
  title: string;
  pencilPress: any;
  deletePress: any;
  navigation: any;
};

const CommanHeader: FunctionComponent<Props1> = ({
  title,
  pencilPress,
  navigation,
}) => {
  return (
    <Appbar.Header style={styles.headerStyles}>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <Appbar.Content
        title={title}
        color={ColorConstants.primaryBlack}
        titleStyle={styles.headerText}
      />
      <Appbar.Action icon="pencil" onPress={pencilPress} />
    </Appbar.Header>
  );
};

type Props3 = {
  show?: boolean;
  showtitle?: boolean;
  showAction?: boolean;
  showLabel?: boolean;
  navigation?: any;
  title?: string;
  url?: string;
  label?: string;
  onPress?: ()=> void;
  imagePress?: () => void;
};

const AuthHeader: FunctionComponent<Props3> = ({
  navigation,
  show,
  showtitle,
  showAction,
  showLabel,
  label,
  title,
  onPress,
  url,
  imagePress,
}) => {
  return (
    <View>
      <Appbar.Header style={{backgroundColor: ColorConstants.primaryColor}}>
        {show && (
          <Appbar.BackAction
            onPress={() => navigation.goBack()}
            style={styles.backButton}
            color={ColorConstants.primaryWhite}
          />
        )}
        {showtitle && (
          <Appbar.Content
            title={title ?? ''}
            titleStyle={{fontFamily: FontConstants.medium}}
            color={ColorConstants.primaryWhite}
          />
        )}
        {showAction && (
          <Button
            mode="text"
            labelStyle={{fontWeight: '600', fontFamily: FontConstants.medium}}
            textColor={ColorConstants.primaryWhite}
            style={{
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}
            onPress={onPress}>
            Edit
          </Button>
        )}
      </Appbar.Header>
      <View style={styles.authContainer}>
        <Avatar
          containerStyle={styles.imageSize}
          rounded
          imageProps={{
            borderRadius: 100,
          }}
          onPress={imagePress}
          source={url ? {uri: url} : require('../assets/image/qualtile.png')}
        />
        <AppSize height={10} />
        {showLabel && (
          <Label
            name={label}
            style={{
              color: ColorConstants.primaryWhite,
              padding: 10,
              marginBottom: 5,
            }}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyles: {
    width: width,
    backgroundColor: ColorConstants.primaryColor,
    justifyContent: 'space-between',
  },
  backButton: {
    marginLeft: 0,
    color: ColorConstants.primaryWhite,
  },
  headerText: {
    fontSize: 17,
    fontWeight: '600',
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    color: ColorConstants.primaryWhite,
    fontFamily: FontConstants.ragular,
  },
  imageSize: {height: 80, width: 80, borderRadius:100},
  icon: {
    height: 50,
    flexDirection: 'row',
    padding: 15,
    width: '100%',
    alignItems: 'center',
    // backgroundColor: ColorConstants.primaryWhite,
  },
  authContainer: {
    width: '100%',
    height: 120,
    borderBottomLeftRadius: 40,
    borderBottomEndRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ColorConstants.primaryColor,
  },
});

export {AppHeader, CommanHeader, AuthHeader};
