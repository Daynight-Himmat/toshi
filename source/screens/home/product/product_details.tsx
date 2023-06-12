import React, {FunctionComponent, useEffect, useState} from 'react';
import ColorConstants from '../../../constants/color_constants';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import PagerView from 'react-native-pager-view';
import {Avatar} from '@rneui/base';
import {Loading} from '../../../components/no_data_found';
import {HighLightLabel, Label, ProductDetailTable} from '../../../components/label';
import {alignSelf, color, commonStyles, marginBottom} from '../../../components/style';
import {Icon} from '@rneui/themed';
import AppButton from '../../../components/app_button';
import AppSize from '../../../components/size';
import Apis from '../../../apis/api_functions';
import { ProductResult } from '../../../model/product_details';
import { Divider } from 'react-native-paper';

const Tab = createMaterialTopTabNavigator();

type Props = {
  navigation: any;
  route: any;
};

const ProductDetails: FunctionComponent<Props> = ({navigation, route}) => {
    const data = route?.params?.data;
  const [isLoading, setLoading] = useState(false);
  const [getProduct, setProductDetails] = useState<ProductResult>();

  const getProductDetails = ()=>{
    Apis.getProductDetails(data.id).then(response => {
        if(response?.status === 200){
            setProductDetails(response?.data.result);
            console.log(response?.data.result);
        }
    });
  }
  console.log(data);

  useEffect(()=> {
    getProductDetails()
  }, []);

  return (
    <View style={styles.viewContainer}>
      <PagerView style={styles.pagerView} initialPage={0}>
        <Avatar
          containerStyle={{
            width: '100%',
            height: 150,
            borderRadius: 5,
          }}
          renderPlaceholderContent={<Loading />}
          imageProps={{
            borderRadius: 5,
          }}
          source={require('../../../assets/image/feeds.png')}
        />
      </PagerView>
      <View
        style={{
            flex:1,
          marginTop: -20,
          
          backgroundColor: ColorConstants.primaryWhite,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          paddingHorizontal: 10,
          paddingTop: 20,
        }}>
        <ScrollView contentContainerStyle={marginBottom(50)}> 
          
          <View style={commonStyles.rowWithCenterAndSB}>
          <HighLightLabel
            hightLightLabel={getProduct?.product_name + ` (${getProduct?.product_code})`}
            style={alignSelf('flex-start')}
          />
            <View style={{
                backgroundColor: ColorConstants.primaryWhite,
                 
                paddingRight: 20
            }}>
            <Icon
              name="bookmark"
              type="ionicon"
              color={ColorConstants.primaryColor}
            />
            </View>
          </View>
          <AppSize height={15}/>
          <View style={commonStyles.rowWithCenterAndSB}>
            <Label name={"Readly Availablity" +getProduct?.readily_available_qty} style={color(ColorConstants.primaryColor)} />
            <View style={{
                marginTop: -10, 
                paddingRight: 20,
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center'
            }}>
           <Icon
              name="logo-whatsapp"
              type="ionicon"
              color={ColorConstants.whatsAppGreen}
            />
            </View>
            
          </View>
          <AppSize height={20}/>
          <View style={{
            borderColor: ColorConstants.textHintColor, 
            borderWidth: 2,
            paddingVertical: 10,
            marginBottom: 10,
          }}>
            
            <ProductDetailTable label='Color' type = {'data'} data={getProduct?.product_color} divider={true} />
            <ProductDetailTable label='Description' type = {'data'} data={getProduct?.description} divider={true} />
            <ProductDetailTable label='Finish' type = {'list'} data={getProduct?.product_finish} divider={true} />
            <ProductDetailTable label='Usage' type = {'list'} data={getProduct?.product_usage} divider={true} />
            <ProductDetailTable label='Type' type = {'list'} data={getProduct?.product_type} divider={true} />
            <ProductDetailTable label='Mixing Possibility' type = {'data'} data={getProduct?.mixing_possibility}/>
          </View>
          <AppButton text='Send Inquiry'/>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: ColorConstants.primaryWhite,
  },
  pagerView: {
    height: 200,
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
