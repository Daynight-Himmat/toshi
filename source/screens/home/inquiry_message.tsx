import React, {FunctionComponent} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  View,
} from 'react-native';
import {commonStyles} from '../../components/style';
import {Appbar} from 'react-native-paper';
import ColorConstants from '../../constants/color_constants';
import Menu from '../../assets/image/menu.svg';
import {Avatar} from '@rneui/themed';
import {HighLightLabel, Label} from '../../components/label';
import AppSize from '../../components/size';
import DSContainer from '../../components/dashboard_container';
import MyProfileList from '../../components/MyProfileList';
import { AppHeader, AuthHeader } from '../../components/app_header';

type Props = {
  navigation: any;
};

const InquiryMessage: FunctionComponent<Props> = ({navigation}) => {
  
    

  return (
    <View style={commonStyles.container}>
      <AppHeader text='Inquiry Message' navigate={()=> navigation.goBack()}/>
      <ScrollView>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default InquiryMessage;
