import React, {FunctionComponent} from 'react';
import {StyleSheet, Dimensions, View, Image} from 'react-native';
import ColorConstants from '../constants/color_constants';
import {Appbar} from 'react-native-paper';
import FontConstants from '../constants/font_constants';
import {Icon} from '@rneui/base';

const {width} = Dimensions.get('screen');

type Props = {
  text: string;
  navigate: any;
  action: any;
};

const AppHeader: FunctionComponent<Props> = ({text, navigate, action}) => {
  return (
    <Appbar.Header style={styles.headerStyles}>
      <Appbar.BackAction onPress={navigate} style={styles.backButton} />
      <Appbar.Content
        title={text}
        color={ColorConstants.primaryBlack}
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
  show: boolean;
  navigation: any;
};

const AuthHeader: FunctionComponent<Props3> = ({navigation, show}) => {
  return (
    <View>
      <View style={styles.authContainer}>
        <View style={styles.icon}>
          {show && (
            <Icon
              type="ionicon"
              name={'chevron-back-outline'}
              onPress={() => navigation.goBack()}
              color={ColorConstants.primaryWhite}
            />
          )}
        </View>
        <Image
          source={require('../assets/image/qual_icons.png')}
          style={styles.imageSize}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyles: {
    width: width,
    backgroundColor: ColorConstants.primaryWhite,
  },
  backButton: {
    marginLeft: 0,
  },
  headerText: {
    fontSize: 17,
    fontWeight: '600',
    color: ColorConstants.primaryBlack,
    fontFamily: FontConstants.ragular,
  },
  imageSize: {height: 80, width: 80, marginBottom: '10%'},
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
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomEndRadius: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: ColorConstants.primaryColor,
  },
});

export {AppHeader, CommanHeader, AuthHeader};