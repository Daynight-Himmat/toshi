import React, {FunctionComponent} from 'react';
import ColorConstants from '../../../constants/color_constants';
import {ScrollView, StyleSheet, View} from 'react-native';
import {ProductDetailTable} from '../../../components/label';
import {ProductDetails} from '../../../model/inquiry_message';

type Props = {
  navigation: any;
  route: any;
};

const InquiryPreView: FunctionComponent<Props> = ({route}) => {
  const data = route.params.data as ProductDetails;
  const inquiry_message = route.params.inquiry_message;

  const productDetails = [
    {
      label: 'Color',
      type: 'list',
      data: data?.product_color,
      divider: true,
    },
    {
      label: 'Description',
      type: 'data',
      data: data?.description,
      divider: true,
    },
    {
      label: 'Finish',
      type: 'list',
      data: data?.product_finish,
      divider: true,
    },
    {
      label: 'Usage',
      type: 'list',
      data: data?.product_usage,
      divider: true,
    },
    {
      label: 'Type',
      type: 'list',
      data: data?.product_type,
      divider: true,
    },
    {
      label: 'Mixing Possibility',
      type: 'data',
      data: data?.mixing_possibility,
      divider: true,
    },
    {
      label: 'Inquiry Message',
      type: 'data',
      data: inquiry_message,
      divider: false,
    },
  ];

  return (
    <View style={styles.viewContainer}>
      <ScrollView>
        <View style={styles.box_styles}>
          {productDetails.map((item: any, index: any) => (
            <ProductDetailTable
              key={index}
              label={item.label}
              type={item.type}
              data={item.data}
              divider={item.divider}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: ColorConstants.primaryWhite,
  },
  box_styles: {
    borderColor: ColorConstants.textHintColor,
    borderWidth: 2,
    paddingVertical: 10,
    marginBottom: 10,
  },
});

export default InquiryPreView;
