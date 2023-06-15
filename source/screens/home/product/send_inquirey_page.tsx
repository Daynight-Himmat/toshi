import React, {FunctionComponent, useEffect, useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  TextInput,
} from 'react-native';
import {commonStyles} from '../../../components/style';
import ColorConstants from '../../../constants/color_constants';
import {HighLightLabel} from '../../../components/label';
import {Loading} from '../../../components/no_data_found';
import RowButton from '../../../components/row_button';
import toastMessage from '../../../components/toast_message';
import {useToast} from 'react-native-toast-notifications';

const {height} = Dimensions.get('screen');

type Props = {
  navigation: any;
  route: any;
};

const SendInquiry: FunctionComponent<Props> = ({navigation, route}) => {
  const data = route.params.data;
  const toast = useToast();
  const [isLoading, setLoading] = useState(false);
  const [inquiry, setInquiry] = useState<string>('');

  useEffect(() => {}, []);

  return (
    <View style={commonStyles.viewContainer}>
      <ScrollView>
        <HighLightLabel
          hightLightLabel={data.product_name}
          style={{
            width: '100%',
          }}
          labelStyle={{textAlign: 'left'}}
        />
        <View
          style={{
            borderColor: ColorConstants.textHintColor,
            borderWidth: 1,
            padding: 10,
            borderRadius: 5,
            marginVertical: 10,
          }}>
          <TextInput
            onChangeText={text => setInquiry(text)}
            placeholder={`Write a Inquiry Description for ${data.product_name}`}
            multiline
            numberOfLines={50}
            style={{
              height: height / 2,
            }}
          />
        </View>
        <RowButton
          text1="Cancel"
          text2="Inquiry Preview"
          onback={() => navigation.goBack()}
          onPress={() => {
            if (inquiry) {
              return navigation.navigate('Send Inquiry Preview', {
                data: data,
              });
            } else {
              toastMessage(toast, 'Please input the Inquiry Description');
            }
          }}
        />
      </ScrollView>
      {isLoading && <Loading />}
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  messageContainer: {
    elevation: 100,
    backgroundColor: ColorConstants.primaryWhite,
    margin: 10,
    shadowColor: ColorConstants.primaryBlack,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 4,
    borderRadius: 5,
  },
});

export default SendInquiry;
