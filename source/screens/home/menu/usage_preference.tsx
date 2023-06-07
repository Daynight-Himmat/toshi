import React, {FunctionComponent} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  View,
} from 'react-native';
import { AuthHeader } from '../../../components/app_header';
import { commonStyles } from '../../../components/style';


type Props = {
  navigation: any;
};

const UsagePreference: FunctionComponent<Props> = ({navigation}) => {

  return (
    <View style={commonStyles.container}>
      <AuthHeader navigation={navigation} show={true}  showtitle={true} showAction={true} showLabel={true} title='My Profile'/>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default UsagePreference;
