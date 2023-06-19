import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import {
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import ColorConstants from '../../../constants/color_constants';
import {Loading} from '../../../components/no_data_found';
import {orderResult} from '../../../model/order_result';
import {AppHeader} from '../../../components/app_header';
import {Label, LabelAndTitle} from '../../../components/label';
import {color, padding} from '../../../components/style';
import {Avatar, Icon} from '@rneui/themed';
import {ApiConstants} from '../../../constants/api_constants';
import {ImageSlider} from 'react-native-image-slider-banner';
import AppSize from '../../../components/size';

interface img {
  img: ImageSourcePropType;
}

type Props = {
  navigation: any;
  route: any;
};

const OrderStatusDetails: FunctionComponent<Props> = ({navigation, route}) => {
  const data = route.params.data as orderResult;
  const [getImage, setImage] = useState<img[]>([]);
  const [isLoading, setLoading] = useState(false);

  const value = data.product_img
    .split(', ')
    .map(data => ApiConstants.baseProductImageUrl + data);

  const getImages = useCallback(() => {
    value.map((item, _index) => {
      const val2 = {img: item as ImageSourcePropType};
      if (getImage.some(data => data.img === val2.img)) {
        setImage([...new Set(getImage)]);
      } else {
        setImage(prevItems => [...prevItems, val2]);
      }
    });
  }, []);

  useEffect(() => {
    getImages();
  }, []);

  return (
    <View style={styles.viewContainer}>
      <AppHeader text={data?.inquiry_no} navigate={() => navigation.goBack()} />
      <View style={padding(10)}>
        {getImage ? (
          <ImageSlider
            data={getImage}
            autoPlay={true}
            closeIconColor="#fff"
            caroselImageStyle={{
              resizeMode: 'cover',
            }}
            activeIndicatorStyle={{
              backgroundColor: ColorConstants.primaryColor,
            }}
          />
        ) : (
          <Avatar
            containerStyle={styles.avatarStyles}
            renderPlaceholderContent={<Loading />}
            imageProps={{
              borderRadius: 5,
            }}
            source={require('../../../assets/image/nofound.jpg')}
          />
        )}

        <ScrollView>
          <AppSize height={10} />
          <View style={styles.inquiryNO}>
            <LabelAndTitle label={'Inquiry No'} title={data?.inquiry_no} />
            <View style={styles.inquiryStage}>
              <Label
                name={data.inquiry_stage}
                style={color(ColorConstants.primaryWhite)}
              />
            </View>
          </View>
          <LabelAndTitle label={'Inquiry Name'} title={data?.product_name} />
          <LabelAndTitle
            label={'Inquiry Description'}
            title={data?.description}
          />
          <Label name={'Product Name'} style={styles.productName} />
          <TouchableOpacity
            style={styles.productNameContainer}
            onPress={function (): void {
              return navigation.navigate('Product Details', {
                data: data?.productID,
              });
            }}>
            <Label name={data?.product_name} />
            <Icon name="info" size={17} color={ColorConstants.primaryColor} />
          </TouchableOpacity>
          <LabelAndTitle
            label={'Uploaded Document'}
            title={data?.documents ?? 'No Document Found'}
          />
          <LabelAndTitle
            label={'Sales Invoice Details'}
            title={data?.SalesInvoices ?? 'No Sales Invoic Found'}
          />
        </ScrollView>
      </View>
      {isLoading && <Loading />}
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
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
  productNameContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: ColorConstants.textGrey,
    borderWidth: 2,
    borderRadius: 4,
    marginBottom: 15,
  },
  textStyles: {
    textAlign: 'justify',
    paddingHorizontal: 10,
  },
  highLight: {
    alignSelf: 'flex-start',
    color: ColorConstants.primaryColor,
  },
  indicator: {
    color: ColorConstants.primaryBlack,
  },
  productName: {
    paddingVertical: 10,
    color: ColorConstants.textGrey,
  },
  inquiryStage: {
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    backgroundColor: ColorConstants.primaryColor,
    alignContent: 'center',
    alignItems: 'center',
  },
  inquiryNO: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
  avatarStyles: {
    width: 150,
    height: 150,
    borderRadius: 5,
    padding: 10,
  },
});

export default OrderStatusDetails;
