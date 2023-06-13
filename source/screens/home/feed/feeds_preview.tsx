import React, {FunctionComponent, useCallback, useEffect, useState} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import ColorConstants from '../../../constants/color_constants';
import {FeedList} from '../../../components/order_list_container';
import Apis from '../../../apis/api_functions';
import {FeedsResult} from '../../../model/newFeeds';
import {Loading, NoData} from '../../../components/no_data_found';
import { Avatar, Icon } from '@rneui/themed';
import { color } from '@rneui/base';
import AppButton from '../../../components/app_button';
import { HighLightLabel, Label, ProductDetailTable } from '../../../components/label';
import AppSize from '../../../components/size';
import { marginBottom, commonStyles, alignSelf } from '../../../components/style';
import { ApiConstants } from '../../../constants/api_constants';
import toastMessage from '../../../components/toast_message';
import { useToast } from 'react-native-toast-notifications';

type Props = {
  navigation: any;
  route: any;
};

const FeedsPreview: FunctionComponent<Props> = ({navigation, route}) => {
    const data = route?.params?.data as FeedsResult;
    const toast = useToast();
  const [getFeeds, setFeeds] = useState<FeedsResult[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [feedSave, setFeedsSave] = useState<string>(data?.is_news_feed_saved ==='No' ? 'No' : 'Yes');

  const getFeedsData =  useCallback( async () => {
    try {
      setLoading(true);
      Apis.getFeeds().then(response => {
        if (response?.status === 200) {
          setLoading(false);
          setFeeds(response.data?.result);
        }
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  },[]);

  const getSave = async () => {
    try {
      setLoading(true);
      Apis.getSaveFeeds(data.id).then(response => {
        if (response?.status === 200) {
          setLoading(false);
          toastMessage(toast,response.data.message);
        }
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };


  useEffect(() => {
    getFeedsData();
    console.log(data?.is_news_feed_saved);
  }, []);

  return (
    <View style={styles.viewContainer}>
      <View style={styles.pagerView}>
      <Avatar
          containerStyle={{
            width: '100%',
            height: 250,
            borderRadius: 5,
            
          }}
          renderPlaceholderContent={<Loading />}
          source={{uri: ApiConstants.baseNewsMainImageUrl+ data.main_image}}
        />
      </View>

      <View
        style={styles.productContainer}>
        <ScrollView contentContainerStyle={marginBottom(50)}>
          <View style={commonStyles.rowWithCenterAndSB}>
            <HighLightLabel
              hightLightLabel={
                data?.title
              }
              style={alignSelf('flex-start')}
            />
            <View
              style={{
                backgroundColor: ColorConstants.primaryWhite,

                paddingRight: 20,
              }}>
              <Icon
                name= {feedSave === 'Yes' ? "bookmark" : "bookmark-outline"}
                type="ionicon"
                color={ColorConstants.primaryColor}
                onPress={()=> {
                    getSave();
                    if(data.is_news_feed_saved === 'No'){
                        setFeedsSave("Yes");
                    }else{
                        setFeedsSave("No");
                    }
                    }
                }
              />
            </View>
          </View>
          <AppSize height={15} />
          <Label name={data.descroption}/>
          <AppSize height={15} />
          <Avatar
          containerStyle={{
            width: '100%',
            height: 250,
            borderRadius: 5,
            
          }}
          renderPlaceholderContent={<Loading />}
          imageProps={{
            borderRadius: 5,
          }}
          source={{uri: ApiConstants.baseNewsBottomImageUrl+ data.bottom_img}}
        />
          <AppSize height={20} />
          
          
          <AppSize height={40} />
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
      height: 250,
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

export default FeedsPreview;
