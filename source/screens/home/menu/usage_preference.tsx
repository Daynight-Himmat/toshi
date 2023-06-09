import React, {FunctionComponent, useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {commonStyles, margin} from '../../../components/style';
import AppButton from '../../../components/app_button';
import Apis from '../../../apis/api_functions';
import {UsagesPreferenceList} from '../../../model/preferences';
import {Loading, NoData} from '../../../components/no_data_found';
import {PraferenceContainer} from '../../../components/order_list_container';
import toastMessage from '../../../components/toast_message';
import {useToast} from 'react-native-toast-notifications';
import {AppHeader} from '../../../components/app_header';

type Props = {
  navigation: any;
};

const UsagePreference: FunctionComponent<Props> = ({navigation}) => {
  const [getProductPraference, setProductPraference] = useState<
    UsagesPreferenceList[]
  >([]);
  const [isLoading, setLoading] = useState(false);
  const [checkedItems, setCheckedItems] = useState<UsagesPreferenceList[]>([]);
  const toast = useToast();

  const getProductPraferences = async () => {
    try {
      setLoading(true);
      await Apis.getPraferences().then(response => {
        if (response?.status === 200) {
          setLoading(false);
          setProductPraference(response?.data?.result?.usages_preference);
          response?.data?.result?.usages_preference.map(
            (_data: any, _index: any) => {
              if (_data.is_preference_saved === 'Yes') {
                handleCheckChange(_data);
              }
            },
          );
        }
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const getSavePreference = async (
    praferenceType: string,
    praferenceId: any,
  ) => {
    try {
      setLoading(true);
      await Apis.getSavePreference(praferenceType, praferenceId).then(
        response => {
          if (response?.status === 200) {
            setLoading(false);
            toastMessage(toast, response?.data?.message);
            navigation.goBack();
          }
        },
      );
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleCheckChange = (item: UsagesPreferenceList) => {
    if (
      checkedItems.some((checkedItem: {id: any}) => checkedItem.id === item.id)
    ) {
      setCheckedItems(prevItems =>
        prevItems?.filter((prevItem: {id: any}) => prevItem.id !== item.id),
      );
    } else {
      setCheckedItems(prevItems => [...prevItems, item]);
    }
  };

  const selectAll = (item: UsagesPreferenceList) => {
    if (
      checkedItems.some((checkedItem: {id: any}) => checkedItem.id !== item.id)
    ) {
      setCheckedItems(prevItems =>
        prevItems?.filter((prevItem: {id: any}) => prevItem.id === item.id),
      );
    } else {
      setCheckedItems(prevItems => [...prevItems, item]);
    }
  };

  useEffect(() => {
    getProductPraferences();
  }, []);

  return (
    <View style={commonStyles.container}>
      <AppHeader
        navigate={() => navigation.goBack()}
        buttonText="Select All"
        text={'Usage Praference'}
        action
        onPress={() => getProductPraference.map(data => selectAll(data))}
      />
      <View style={commonStyles.fill}>
        {getProductPraference ? (
          <ScrollView>
            {getProductPraference &&
              getProductPraference.map((_data, _index) => (
                <PraferenceContainer
                  key={_index}
                  label={_data.code}
                  is_preference_saved={
                    checkedItems.some(
                      checkedItem => checkedItem.id === _data.id,
                    )
                      ? 'Yes'
                      : 'No'
                  }
                  onPress={() => handleCheckChange(_data)}
                />
              ))}
          </ScrollView>
        ) : (
          <NoData />
        )}
        {isLoading && <Loading />}
      </View>
      <View style={margin(10)}>
        <AppButton
          text="Apply"
          onPress={() => {
            if (checkedItems.length > 0) {
              getSavePreference(
                'usage',
                checkedItems.map(data => data.id),
              );
            } else {
              toastMessage(toast, 'Please select Product Preference');
            }
          }}
        />
      </View>
    </View>
  );
};

export default UsagePreference;
