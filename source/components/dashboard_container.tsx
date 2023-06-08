import React, {FunctionComponent, useState, useRef} from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {commonStyles} from './style';
import ColorConstants from '../constants/color_constants';
import {HighLightLabel} from './label';
import {Avatar} from '@rneui/base';
import AppSize from './size';
import Product from '../assets/qtile_image/active_order.svg';
import List from '../assets/qtile_image/grid_menu.svg';
import Message from '../assets/qtile_image/message.svg';
import Info from '../assets/qtile_image/message.svg';
import Feed from '../assets/qtile_image/newspaper.svg';
import Setting from '../assets/qtile_image/setting.svg';

type Props = {
  data: any;
  navigation: any;
  widget: any;
  index: number;
};

const DSContainer: FunctionComponent<Props> = ({navigation, data, index}) => {
  const getWidget = () => {
    switch (index) {
      case 0:
        return <Product height={30} width={30} />;
      case 1:
        return <List height={30} width={30} />;
      case 2:
        return <Message height={30} width={30} />;
      case 3:
        return <Feed height={30} width={30} />;
      case 4:
        return <Setting height={30} width={30} />;
      default:
        return <Info height={30} width={30} />;
    }
  };

  const getRoute = () => {
    switch (index) {
      case 0:
        return navigation.navigate('Inquiry & Order Status');
      case 1:
        return navigation.navigate('List Of Product');
      case 2:
        return navigation.navigate('InquiryMessage');
      case 3:
        return navigation.navigate('Feeds');
      case 4:
        return navigation.navigate('Create-Pass');
      default:
        return navigation.navigate('Create-Pass');
    }
  };

  return (
    <TouchableOpacity
        onPress={()=> getRoute()}
      style={styles.container}>
      <View style={styles.icon}>
        {getWidget()}
      </View>
      <AppSize width={20} />
      <HighLightLabel
        hightLightLabel={data.name}
        style={undefined}
        labelStyle={commonStyles.color(ColorConstants.primaryWhite)}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    container: {
        height: 130,
        paddingVertical: 10,
        backgroundColor: ColorConstants.primaryColor,
        marginVertical: 10,
        justifyContent: 'flex-start',
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
      },
      icon: {
        borderRadius: 100,
        backgroundColor: ColorConstants.primaryWhite,
        padding: 15

      },
});

export default DSContainer;
