import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import ColorConstants from '../../../constants/color_constants';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import {Avatar} from '@rneui/base';
import {Loading} from '../../../components/no_data_found';
import {
  HighLightLabel,
  Label,
  ProductDetailTable,
} from '../../../components/label';
import {
  alignSelf,
  color,
  commonStyles,
  marginBottom,
} from '../../../components/style';
import {Icon} from '@rneui/themed';
import AppButton from '../../../components/app_button';
import AppSize from '../../../components/size';
import Apis from '../../../apis/api_functions';
import {ProductResult} from '../../../model/product_details';
import {ApiConstants} from '../../../constants/api_constants';
import toastMessage from '../../../components/toast_message';
import {useToast} from 'react-native-toast-notifications';
import {ImageSlider} from 'react-native-image-slider-banner';
import WhatsApp from '../../../components/whats_app';

const {width} = Dimensions.get('screen');

const Tab = createMaterialTopTabNavigator();

interface img {
  img: ImageSourcePropType;
}

type Props = {
  navigation: any;
  route: any;
};

const ProductDetails: FunctionComponent<Props> = ({navigation, route}) => {
  const data = route?.params?.data;
  const toast = useToast();
  const [getImage, setImage] = useState<img[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [getProduct, setProductDetails] = useState<ProductResult>();

  const getProductDetails = () => {
    setLoading(true);
    Apis.getProductDetails(data).then(response => {
      if (response?.status === 200) {
        setProductDetails(response?.data.result);
        const value = response?.data.result.upload_img
          .split(', ')
          .map((data: string) => ApiConstants.baseProductImageUrl + data);

        value.map((item: ImageSourcePropType, index: any) => {
          const val2 = {img: item as ImageSourcePropType};
          if (getImage.some(data => data.img === val2.img)) {
            setImage([...new Set(getImage)]);
          } else {
            setImage(prevItems => [...prevItems, val2]);
          }
        });
        setLoading(false);
      }
    });
  };

  const getSave = async () => {
    try {
      setLoading(true);
      Apis.getSaveProduct(data).then(response => {
        if (response?.status === 200) {
          setLoading(false);
          getProductDetails();
          toastMessage(toast, response.data.message);
        }
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const productDetails = [
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
      divider: false,
    },
  ];

  useEffect(() => {
    getProductDetails();
  }, []);
  return (
    productDetails && (
      <View style={styles.viewContainer}>
        <View style={styles.pagerView}>
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
              containerStyle={styles.pagerView}
              renderPlaceholderContent={<Loading />}
              imageProps={{
                borderRadius: 5,
              }}
              source={require('../../../assets/image/nofound.jpg')}
            />
          )}
        </View>

        <View style={styles.productContainer}>
          <ScrollView contentContainerStyle={marginBottom(50)}>
            <View style={commonStyles.rowWithCenterAndSB}>
              <HighLightLabel
                hightLightLabel={
                  getProduct?.product_name + ` (${getProduct?.product_code})`
                }
                labelStyle={{
                  textAlign: 'left',
                }}
                style={{
                  alignSelf: 'flex-start',
                  width: '80%',
                }}
              />
              <View
                style={{
                  backgroundColor: ColorConstants.primaryWhite,
                  paddingRight: 20,
                }}>
                <Icon
                  onPress={() => getSave()}
                  name={
                    getProduct?.is_product_saved === 'Yes'
                      ? 'bookmark'
                      : 'bookmark-outline'
                  }
                  type="ionicon"
                  color={ColorConstants.primaryColor}
                />
              </View>
            </View>
            <AppSize height={15} />
            <View style={commonStyles.rowWithCenterAndSB}>
              <Label
                name={'Readly Availablity' + getProduct?.readily_available_qty}
                style={color(ColorConstants.primaryColor)}
              />
              <WhatsApp />
            </View>
            <AppSize height={20} />
            <View
              style={{
                borderColor: ColorConstants.textHintColor,
                borderWidth: 2,
                paddingVertical: 10,
                marginBottom: 10,
              }}>
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
            <AppButton
              text="Send Inquiry"
              onPress={function (): void {
                return navigation.navigate('Send Inquiry Page', {
                  data: {
                    product_id: getProduct?.id,
                    product_name: getProduct?.product_name,
                  },
                });
              }}
            />
            <AppSize height={40} />
          </ScrollView>
          {isLoading && <Loading />}
        </View>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: ColorConstants.primaryWhite,
  },
  productContainer: {
    flex: 1,
    marginTop: -20,
    backgroundColor: ColorConstants.primaryWhite,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  pagerView: {
    height: 300,
    width: '100%',
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

export default ProductDetails;
