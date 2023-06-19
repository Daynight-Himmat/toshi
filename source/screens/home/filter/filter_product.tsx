import React, {FunctionComponent, useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import ColorConstants from '../../../constants/color_constants';
import Apis from '../../../apis/api_functions';
import {Loading, NoData} from '../../../components/no_data_found';
import {ProductContainer} from '../../../components/order_list_container';
import {ResulPro} from '../../../model/product';
import toastMessage from '../../../components/toast_message';
import {useToast} from 'react-native-toast-notifications';
import {useIsFocused} from '@react-navigation/native';
import { commonStyles } from '../../../components/style';

type Props = {
  navigation: any;
  route: any;
};

const FilterProductPage: FunctionComponent<Props> = ({navigation, route}) => {
  const data = route?.params?.data;
  const toast = useToast();
  const isFocused = useIsFocused();
  const [isLoading, setLoading] = useState(false);
  const [getProductData, setProductData] = useState<ResulPro[]>([]);

  const getProducts = async () => {
    try {
      setLoading(true);
      await Apis.getFilterProducts(
        data.productCategories,
        data.productFinish,
        data.productUsage,
        data.productType,
        data.productMixingPossibility,
        data.productColors,
      ).then(response => {
        if (response?.status === 200) {
          setLoading(false);
          setProductData(response?.data?.result?.resulPro);
          toastMessage(toast, response?.data?.message);
        }
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const getSave = async (id: any) => {
    try {
      setLoading(true);
      Apis.getSaveProduct(id).then(response => {
        if (response?.status === 200) {
          setLoading(false);
          toastMessage(toast, response.data.message);
        }
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [getProducts, isFocused]);

  return (
    <View style={commonStyles.viewContainer}>
      {getProductData ? (
        <ScrollView>
          {getProductData &&
            getProductData.map((_data, _index) => (
              <ProductContainer
                key={_index}
                uri={_data.upload_img}
                iconCondition={_data.is_product_saved}
                label={_data?.product_name + ` (${_data?.product_code})`}
                description={_data.description}
                iconPress={() => getSave(_data.id)}
                containerPress={function (): void {
                  return navigation.navigate('Product Details', {
                    data: _data.id,
                  });
                }}
                sendInquiry={function (): void {
                  return navigation.navigate('Send Inquiry Page', {
                    data: {
                      product_id: _data?.id,
                      product_name: _data?.product_name,
                    }
                  });
                }}
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

export default FilterProductPage;
