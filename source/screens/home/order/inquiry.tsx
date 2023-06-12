import React, {FunctionComponent, useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import ColorConstants from '../../../constants/color_constants';
import {OrderList} from '../../../components/order_list_container';
import {Loading, NoData} from '../../../components/no_data_found';
import Apis from '../../../apis/api_functions';
import {orderResult} from '../../../model/order_result';

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
    <View style={styles.viewContainer}>
      {getInquiry ? (
        <ScrollView>
          {getInquiry.map((_data: orderResult, index: React.Key | null | undefined) => (
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
          ))}
        </ScrollView>
      ) : (
        <NoData />
      )}

      {isLoading && <Loading />}
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: ColorConstants.primaryWhite,
  },
  inquiryContainer: {
    elevation: 100,
    flexDirection: 'row',
    backgroundColor: ColorConstants.primaryWhite,
    margin: 10,
    shadowColor: ColorConstants.primaryBlack,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 4,
    borderRadius: 5,
  },
  textStyles: {
    textAlign: 'justify',
    paddingHorizontal: 10,
  },
  highLight: {
    alignSelf: 'flex-start',
    color: ColorConstants.primaryColor,
  },
});

export default InquiryOrder;
