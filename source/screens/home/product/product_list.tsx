import React, {FunctionComponent, useEffect, useRef, useState} from 'react';
import ColorConstants from '../../../constants/color_constants';
import FontConstants from '../../../constants/font_constants';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Apis from '../../../apis/api_functions';
import ProductPage from './product_page';
import {
  ScrollView,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {Loading} from '../../../components/no_data_found';
import {Product} from '../../../model/product_preference';
import {AppHeader} from '../../../components/app_header';
import {Button} from 'react-native-paper';
import {Icon} from '@rneui/base';
import ActionSheet, {ActionSheetRef} from 'react-native-actions-sheet';
import MyProfileList from '../../../components/MyProfileList';
import {Label} from '../../../components/label';
import BottomSheet from '../../../components/bottom_sheet';
import {Keyboard} from 'react-native';
import { commonStyles } from '../../../components/style';
import { useIsFocused } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

type Props = {
  navigation: any;
};

const ListOfProduct: FunctionComponent<Props> = ({navigation}) => {
  const [getProductData, setProductData] = useState<Product[]>([]);
  const [isLoading, setLoading] = useState(false);

  const actionSheetRef = useRef<ActionSheetRef>(null);
  const isFocused = useIsFocused();
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

  const dashValue = [
    {
      name: 'Product Preference',
      icon: 'location-outline',
      iconType: 'ionicon',
      onPress: () => {
        actionSheetRef.current?.hide();
        navigation.navigate('Product Preference')
      },
    },
    {
      name: 'Usage Preference',
      icon: 'location-outline',
      iconType: 'ionicon',
      onPress: () => {
        actionSheetRef.current?.hide();
        navigation.navigate('Usage Preference')
      },
    },
  ];

  useEffect(() => {
    getProducts();
  }, [isFocused]);

  return (
    <View style={commonStyles.fill}>
      <AppHeader
        navigate={() => navigation.goBack()}
        text={'Product Praference'}
        action={
          <Button
            mode="text"
            labelStyle={{fontWeight: '600', fontFamily: FontConstants.medium}}
            textColor={ColorConstants.primaryWhite}
            style={{
              width: 200,
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}
            onPress={() => {
              Keyboard.dismiss();
              actionSheetRef.current?.show();
            }}>
            <Icon
              name="more-vertical"
              type="feather"
              color={ColorConstants.primaryWhite}
            />
          </Button>
        }
      />
      {!isLoading ? (
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
      )}
      <BottomSheet
        backButton={() => actionSheetRef.current?.hide()}
        refer={actionSheetRef}
        widget={dashValue.map((data, index) => (
          <MyProfileList
            onPress={data?.onPress}
            key={index}
            title={data?.name}
            icon={data?.icon}
            iconType={data?.iconType}
          />
        ))}
      />
    </View>
  );
};

interface StyleSheetType {
  container: ViewStyle;
  backButton: ViewStyle;
  headerTitle: TextStyle;
}

const actionSheet = StyleSheet.create<StyleSheetType>({
  container: {
    paddingHorizontal: 10,
  },
  backButton: {
    height: 5,
    width: '45%',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 100,
    backgroundColor: ColorConstants.primaryBlack,
  },
  headerTitle: {
    color: ColorConstants.primaryWhite,
  },
});

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
