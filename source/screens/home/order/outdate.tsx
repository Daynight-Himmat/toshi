import React, {FunctionComponent} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import ColorConstants from '../../../constants/color_constants';


type Props = {
  navigation: any;
};

const OutDateOrder: FunctionComponent<Props> = ({navigation}) => {

  return (
    <View style={styles.viewContainer}>
      
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  textStyles: {
    textAlign: 'justify',
    paddingHorizontal: 10
  },
  highLight: {
    alignSelf: 'flex-start',
    color: ColorConstants.primaryColor
  }
});

export default OutDateOrder;
