import React, {FunctionComponent, useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import ColorConstants from '../../../constants/color_constants';
import {OrderList} from '../../../components/order_list_container';
import {Loading, NoData} from '../../../components/no_data_found';
import Apis from '../../../apis/api_functions';
import {orderResult} from '../../../model/order_result';
import { commonStyles } from '../../../components/style';

type Props = {
  navigation: any;
};

const InquiryOrder: FunctionComponent<Props> = ({navigation}) => {
  const [getInquiry, setInquiry] = useState<orderResult[]>([]);
  const [isLoading, setLoading] = useState(false);

  const getInquiryOrder = async () => {
    try {
      setLoading(true);
      await Apis.inquiryOrder().then(response => {
        if (response?.status === 200) {
          setLoading(false);
          setInquiry(response?.data?.result);
        }
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getInquiryOrder();
  }, []);
  return (
    <View style={commonStyles.viewContainer}>
      {getInquiry ? (
        <ScrollView>
          {getInquiry.map(
            (_data: orderResult, index: React.Key | null | undefined) => (
              <OrderList
                key={index}
                label1="Inquiry No: "
                label2="Inquiry Date: "
                label3="Sales Invoice: "
                label4="Sales Invoice Account: "
                start1={_data.inquiry_no}
                start2={_data.inquiry_date}
                start3={_data.SalesInvoices ?? 'Not Found'}
                start4={_data.SalesInvoices ?? 'Not Found'}
                uri={_data.product_img}
              />
            ),
          )}
        </ScrollView>
      ) : (
        <NoData />
      )}

      {isLoading && <Loading />}
    </View>
  );
};
export default InquiryOrder;
