import React, {FunctionComponent, useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, ScrollView, View} from 'react-native';
import {commonStyles} from '../../../components/style';
import ColorConstants from '../../../constants/color_constants';
import {TwoText} from '../../../components/label';
import {AppHeader} from '../../../components/app_header';
import Apis from '../../../apis/api_functions';
import { Loading } from '../../../components/no_data_found';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Message } from '../../../model/inquiry_message';

type Props = {
  navigation: any;
};

const InquiryMessage: FunctionComponent<Props> = ({navigation}) => {
  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState<Message[]>([]);

  const messageList = async () => {
    try{
      setLoading(true);
      await Apis.getInquiryMessage().then(
        response => {
          if(response?.status === 200){
            setMessage(response?.data?.message);
            setLoading(false);
          }
        }
      );
    }
    catch(error){
      setLoading(false);
      console.log(error);
      
    }
  }

  useEffect(()=> {
    messageList();
  }, []);

  return (
    <View style={commonStyles.container}>
      
      <ScrollView>
      {message.map((data, index)=> 
      <TouchableOpacity
      key={index}
      onPress={()=> navigation.navigate('Inquiry Preview', {
        data: data.productDetails,
        inquiry_message: data.inquiry_msg,
      })}
       style={styles.messageContainer}>
         <TwoText label='Date' start={data?.inquiry_date}/>
         <TwoText label='Product' start={data?.inquiry_for +' '+ data?.productDetails?.product_code}/>
         <TwoText label='Inquiry Medium' start={data?.source_type}/>
         <TwoText label='Inquiry From' start={data?.inquiry_source}/>
         <TwoText label='Description' start={data?.inquiry_msg}/>
       </TouchableOpacity>
      
      )}
        
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
    
  }
});

export default InquiryMessage;
