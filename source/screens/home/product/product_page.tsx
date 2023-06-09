import React, {FunctionComponent, useEffect, useState} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import ColorConstants from '../../../constants/color_constants';
import Apis from '../../../apis/api_functions';


type Props = {
  navigation: any;
};

const ProductPage: FunctionComponent<Props> = ({navigation}) => {

    const [isLoading, setLoading] = useState(false);
    const [getProductData, setProductData] = useState([]);

    const getProducts = async () => {
        try {
          setLoading(true);
          await Apis.getProductBYPrefernce().then(response => {
            if (response?.status === 200) {
              setLoading(false);
              setProductData(response?.data?.result?.product);
              console.log(response?.data?.result?.product);
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
  return (
   <View style={styles.viewContainer}>

   </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: ColorConstants.primaryWhite
  },
  textStyles: {
    textAlign: 'justify',
    paddingHorizontal: 10
  },
  highLight: {
    alignSelf: 'flex-start',
    color: ColorConstants.primaryColor
  }
});

export default ProductPage;