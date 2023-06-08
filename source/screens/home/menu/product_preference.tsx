import React, {FunctionComponent} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  View,
} from 'react-native';
import { AppHeader, AuthHeader } from '../../../components/app_header';
import { commonStyles } from '../../../components/style';
import AppButton from '../../../components/app_button';


type Props = {
  navigation: any;
};

const ProductPreference: FunctionComponent<Props> = ({navigation}) => {

  return (
    <View style={commonStyles.container}>
        <View style={{flex: 1, backgroundColor: 'green'}}></View>
        <View style={{margin: 20}}><AppButton text='Apply'/></View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default ProductPreference;
