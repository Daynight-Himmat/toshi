import React, {FunctionComponent} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { commonStyles } from './style';
import { Icon } from '@rneui/themed';
import ColorConstants from '../constants/color_constants';
import AppSize from './size';
import { Label } from './label';


type Props = {
    iconType?: string;
    icon?: string;
    title?: string;
    onPress?: ()=> void;
  navigation?: any;
};

const MyProfileList: FunctionComponent<Props> = ({title, icon, iconType, onPress, navigation}) => {

  return (
    <TouchableOpacity style={styles.viewContainer} onPress={onPress}>
      <View style={styles.iconContainer}>
      <Icon name={icon} type={iconType} color={ColorConstants.primaryWhite} size={15}/>
      </View>
      <AppSize width={10} />
      <View style={{ flexDirection: 'row', flex:1, justifyContent: 'space-between'}}>
      <Label name={title} style={undefined} margin={0}/>
      <Icon name='ios-chevron-forward' type='ionicon' color={ColorConstants.primaryColor} size={15}/>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    marginVertical: 5, 
  },
  iconContainer:{
    backgroundColor: ColorConstants.primaryColor,
    borderRadius: 100,
    padding: 10
  }
});

export default MyProfileList;
