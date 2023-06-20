import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import ColorConstants from '../../../constants/color_constants';
import {FeedList} from '../../../components/order_list_container';
import Apis from '../../../apis/api_functions';
import {FeedsResult} from '../../../model/newFeeds';
import {Loading, NoData} from '../../../components/no_data_found';
import {useIsFocused} from '@react-navigation/native';
import { commonStyles } from '../../../components/style';

type Props = {
  navigation: any;
};

const Feeds: FunctionComponent<Props> = ({navigation}) => {
  const [getFeeds, setFeeds] = useState<FeedsResult[]>([]);
  const [isLoading, setLoading] = useState(false);
  const isFocused = useIsFocused();

  const getFeedsData = useCallback(async () => {
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
  }, []);

  useEffect(() => {
    getFeedsData();
  }, [isFocused]);

  return (
    <View style={commonStyles.viewContainer}>
      {getFeeds ? (
        <ScrollView>
          {getFeeds.map((data, index) => (
            <FeedList
              onPress={() =>
                navigation.navigate('Feed Preview', {
                  data: data,
                })
              }
              uri={data.main_image}
              key={index}
              label={data.title}
              description={data.descroption}
              date={data.created_date}
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


export default Feeds;
