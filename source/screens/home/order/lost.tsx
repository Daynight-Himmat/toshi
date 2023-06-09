import React, {FunctionComponent, useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import ColorConstants from '../../../constants/color_constants';
import Apis from '../../../apis/api_functions';
import {OrderList} from '../../../components/order_list_container';
import {Loading, NoData} from '../../../components/no_data_found';
import {orderResult} from '../../../model/order_result';
import TimeCondition from '../../../components/date_constants';
import { commonStyles } from '../../../components/style';

type Props = {
  navigation: any;
};

const LostOrder: FunctionComponent<Props> = ({navigation}) => {
  const [getLostResult, setLostResult] = useState<orderResult[]>([]);
  const [isLoading, setLoading] = useState(false);

  const getCompleteOrders = async () => {
    try {
      setLoading(true);
      await Apis.lostOrder().then(response => {
        if (response?.status === 200) {
          setLoading(false);
          setLostResult(response?.data?.result);
        }
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getCompleteOrders();
  }, []);

  return (
    <View style={commonStyles.viewContainer}>
      {getLostResult ? (
        <ScrollView>
          {getLostResult.map(
            (_data: orderResult, index: React.Key | null | undefined) => (
              <OrderList
                key={index}
                label1="Inquiry No: "
                label2="Inquiry Date: "
                label3="Sales Invoice: "
                label4="Sales Invoice Account: "
                start1={_data.inquiry_no}
                start2={TimeCondition.fullDate(_data?.inquiry_date).slice(0, 12,)}
                start3={_data.SalesInvoices ?? 'Not Found'}
                start4={_data.SalesInvoices ?? 'Not Found'}
                uri={_data.product_img}
                onPress={() =>
                  navigation.navigate('Order Status Details', {
                    data: _data,
                  })
                }
                isSpecific
                inquiry_stage={_data.inquiry_stage}
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

export default LostOrder;
