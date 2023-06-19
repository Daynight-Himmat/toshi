import React, {FunctionComponent, useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import ColorConstants from '../../../constants/color_constants';
import Apis from '../../../apis/api_functions';
import {Loading, NoData} from '../../../components/no_data_found';
import {orderResult} from '../../../model/order_result';
import {OrderList} from '../../../components/order_list_container';
import TimeCondition from '../../../components/date_constants';

type Props = {
  navigation: any;
};

const CompletedOrder: FunctionComponent<Props> = ({navigation}) => {
  const [getCompleteResult, setCompleteResult] = useState<orderResult[]>([]);
  const [isLoading, setLoading] = useState(false);

  const getCompleteOrders = async () => {
    try {
      setLoading(true);
      await Apis.completeOrder().then(response => {
        if (response?.status === 200) {
          setLoading(false);
          setCompleteResult(response?.data?.result);
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
    <View style={styles.viewContainer}>
      {getCompleteResult ? (
        <ScrollView>
          {getCompleteResult.map(
            (_data: orderResult, index: React.Key | null | undefined) => (
              <OrderList
                key={index}
                label1="Inquiry No: "
                label2="Inquiry Date: "
                label3="Sales Invoice: "
                label4="Sales Invoice Account: "
                start1={_data?.inquiry_no}
                start2={TimeCondition.fullDate(_data?.inquiry_date).slice(0, 12,)}
                start3={_data?.SalesInvoices ?? 'Not Found'}
                start4={_data?.SalesInvoices ?? 'Not Found'}
                uri={_data?.product_img}
                onPress={() =>
                  navigation.navigate('Order Status Details', {
                    data: _data,
                  })
                }
                isComplete
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

export default CompletedOrder;
