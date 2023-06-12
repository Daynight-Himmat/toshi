import React, {FunctionComponent, useEffect, useState} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import ColorConstants from '../../../constants/color_constants';
import Apis from '../../../apis/api_functions';
import {Loading, NoData} from '../../../components/no_data_found';
import {orderResult} from '../../../model/order_result';
import { OrderList } from '../../../components/order_list_container';

type Props = {
  navigation: any;
};

const OutDateOrder: FunctionComponent<Props> = ({navigation}) => {
  const [getOutDate, setOutDateOrder] = useState<orderResult[]>([]);
  const [isLoading, setLoading] = useState(false);

  const getOutDateOrder = async () => {
    try {
      setLoading(true);
      await Apis.outDateOrder().then(response => {
        if (response?.status === 200) {
          setLoading(false);
          setOutDateOrder(response?.data?.result);
        }
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getOutDateOrder();
  }, []);

  return (
    <View style={styles.viewContainer}>
      {getOutDate ? (
        <ScrollView>
          {getOutDate.map((_data: orderResult, index: React.Key | null | undefined) => (
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
              isSpecific
              inquiry_stage={_data.inquiry_stage}
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
  textStyles: {
    textAlign: 'justify',
    paddingHorizontal: 10,
  },
  highLight: {
    alignSelf: 'flex-start',
    color: ColorConstants.primaryColor,
  },
});

export default OutDateOrder;
