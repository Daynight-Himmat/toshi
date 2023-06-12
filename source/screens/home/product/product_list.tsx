import React, {FunctionComponent, useEffect, useState} from 'react';
import ColorConstants from '../../../constants/color_constants';
import FontConstants from '../../../constants/font_constants';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Apis from '../../../apis/api_functions';
import ProductPage from './product_page';
import {StyleSheet} from 'react-native';
import {Loading} from '../../../components/no_data_found';
import { Product } from '../../../model/product_preference';

const Tab = createMaterialTopTabNavigator();

type Props = {
  navigation: any;
};

const ListOfProduct: FunctionComponent<Props> = ({navigation}) => {
  const [getProductData, setProductData] = useState<Product[]>([]);
  const [isLoading, setLoading] = useState(false);

  const getProducts = async () => {
    try {
      setLoading(true);
      await Apis.getProductWithUserPrefernce().then(response => {
        if (response?.status === 200) {
          setLoading(false);
          setProductData(response?.data?.result?.product);
        }
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return !isLoading ? (
    <Tab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarInactiveTintColor: ColorConstants.primaryBlack,
        tabBarActiveTintColor: ColorConstants.primaryColor,
        tabBarLabelStyle: {fontSize: 12, fontFamily: FontConstants.medium},
        tabBarIndicatorStyle: {
          columnGap: 12,
          backgroundColor: ColorConstants.primaryColor,
          borderRadius: 100,
          height: 4,
        },
        tabBarItemStyle: {
          backgroundColor: 'white',
          flexBasis: 1,
          width: 'auto',
        },
      }}>
      <Tab.Screen name={'All'} component={ProductPage} />
      {getProductData.map((data, index) => {
        return (
          <Tab.Screen
            key={index}
            name={data?.code}
            component={ProductPage}
            initialParams={{data: data}}
          />
        );
      })}
    </Tab.Navigator>
  ) : (
    <Loading />
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    paddingHorizontal: 10,
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

export default ListOfProduct;
