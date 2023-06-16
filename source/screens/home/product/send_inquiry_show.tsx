import React, {FunctionComponent, useEffect, useState} from 'react';
import ColorConstants from '../../../constants/color_constants';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ScrollView, View} from 'react-native';
import {commonStyles} from '../../../components/style';
import {ProductDetailTable} from '../../../components/label';
import AppButton from '../../../components/app_button';
import {ProductResult} from '../../../model/product_details';
import Apis from '../../../apis/api_functions';
import {Loading} from '../../../components/no_data_found';
import AppSize from '../../../components/size';

const Tab = createMaterialTopTabNavigator();

type Props = {
  navigation: any;
  route: any;
};

const SendInquiryPreview: FunctionComponent<Props> = ({navigation, route}) => {
  const data = route?.params?.data;
  const [isLoading, setLoading] = useState(false);
  const [getProduct, setProductDetails] = useState<ProductResult>();

  const getProductDetails = () => {
    setLoading(true);
    Apis.getProductDetails(data.product_id).then(response => {
      if (response?.status === 200) {
        setProductDetails(response?.data?.result);
        setLoading(false);
      }
    });
  };

  const productDetails = [
    {
      label: 'Product',
      type: 'data',
      data: getProduct?.product_name,
      divider: true,
    },
    {
      label: 'Color',
      type: 'list',
      data: getProduct?.product_color,
      divider: true,
    },
    {
      label: 'Description',
      type: 'data',
      data: getProduct?.description,
      divider: true,
    },
    {
      label: 'Finish',
      type: 'list',
      data: getProduct?.product_finish,
      divider: true,
    },
    {
      label: 'Usage',
      type: 'list',
      data: getProduct?.product_usage,
      divider: true,
    },
    {
      label: 'Type',
      type: 'list',
      data: getProduct?.product_type,
      divider: true,
    },
    {
      label: 'Mixing Possibility',
      type: 'data',
      data: getProduct?.mixing_possibility,
      divider: true,
    },
    {
      label: 'Inquiry Message',
      type: 'data',
      data: data.inquiry_message,
      divider: false,
    },
  ];

  useEffect(() => {
    getProductDetails();
  }, []);

  return (
    <View style={commonStyles.viewContainer}>
      <ScrollView>
        <AppSize height={20} />
        <View
          style={{
            borderColor: ColorConstants.textHintColor,
            borderWidth: 2,
            paddingVertical: 10,
            marginBottom: 10,
          }}>
          {productDetails.map((data, index) => (
            <ProductDetailTable
              key={index}
              label={data.label}
              type={data.type}
              data={data.data}
              divider={data.divider}
            />
          ))}
        </View>
        <AppButton text="Send Inquiry" onPress={function (): void {}} />
        <AppSize height={20} />
      </ScrollView>
      {isLoading && <Loading />}
    </View>
  );
};

export default SendInquiryPreview;
