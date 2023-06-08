import React, {FunctionComponent} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {commonStyles} from '../../components/style';

type Props = {
  navigation: any;
};

const SaveNewsFeeds: FunctionComponent<Props> = ({navigation}) => {
  

  return (
    <View style={commonStyles.container}>
      
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default SaveNewsFeeds;
