import React, {
  FunctionComponent,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import ColorConstants from '../../../constants/color_constants';
import Apis from '../../../apis/api_functions';
import {Loading, NoData} from '../../../components/no_data_found';
import {ProductContainer} from '../../../components/order_list_container';
import {ResulPro} from '../../../model/product';
import toastMessage from '../../../components/toast_message';
import {useToast} from 'react-native-toast-notifications';
import {useIsFocused} from '@react-navigation/native';
import {ActionSheetRef} from 'react-native-actions-sheet';

type Props = {
  navigation: any;
  route: any;
};

const ProductPage: FunctionComponent<Props> = ({navigation, route}) => {
  const data = route?.params?.data;
  const toast = useToast();
  const isFocused = useIsFocused();
  const [isLoading, setLoading] = useState(false);
  const [getProductData, setProductData] = useState<ResulPro[]>([]);

  const actionSheetRef = useRef<ActionSheetRef>(null);
  const dashValue = [
    {
      name: 'Product Preference',
      icon: 'location-outline',
      iconType: 'ionicon',
      onPress: () => navigation.navigate('Product Preference'),
    },
    {
      name: 'Usage Preference',
      icon: 'location-outline',
      iconType: 'ionicon',
      onPress: () => navigation.navigate('Usage Preference'),
    },
  ];

  const getProducts = async () => {
    try {
      setLoading(true);
      await Apis.getProductBYPrefernce(data?.preference_id ?? '').then(
        response => {
          if (response?.status === 200) {
            setLoading(false);
            setProductData(response?.data?.result?.resulPro);
          }
        },
      );
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
  }, [isFocused]);
  return (
    <View style={styles.viewContainer}>
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

export default ProductPage;
