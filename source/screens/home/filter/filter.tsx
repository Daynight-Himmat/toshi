import React, {FunctionComponent, useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {commonStyles, justifyContent} from '../../../components/style';
import ColorConstants from '../../../constants/color_constants';
import AppButton from '../../../components/app_button';
import {AppHeader} from '../../../components/app_header';
import {Loading} from '../../../components/no_data_found';
import FontConstants from '../../../constants/font_constants';
import {Button} from 'react-native-paper';
import Accordion from 'react-native-collapsible/Accordion';
import {Text} from 'react-native';
import {HighLightLabel, Label} from '../../../components/label';
import {CheckBox, Icon} from '@rneui/base';
import Apis from '../../../apis/api_functions';
import {
  MixingPosibility,
  ProductCategory,
  ProductColor,
  ProductFinish,
  ProductType,
  ProductUsage,
} from '../../../model/filter_response';
import {FilterList} from '../../../components/order_list_container';
import toastMessage from '../../../components/toast_message';
import { useToast } from 'react-native-toast-notifications';

type Props = {
  navigation: any;
};

const FilterPage: FunctionComponent<Props> = ({navigation}) => {
  const toast = useToast();
  const [isLoading, setLoading] = useState(false);
  const [isChecked, setCheck] = useState(false);
  const [isCollapsed, setCollapsed] = useState<number[]>([]);
  const [getCategories, setCategories] = useState<ProductCategory[]>([]);
  const [getColours, setColours] = useState<ProductColor[]>([]);
  const [getFinish, setFinish] = useState<ProductFinish[]>([]);
  const [getUsage, setUsage] = useState<ProductUsage[]>([]);
  const [getTypes, setTypes] = useState<ProductType[]>([]);
  const [getMixingPossibility, setMixingPossibility] = useState<
    MixingPosibility[]
  >([]);
  const [getSearchCategories, setSearchCategories] = useState<
    ProductCategory[]
  >([]);
  const [getSearchColours, setSearchColours] = useState<ProductColor[]>([]);
  const [getSearchFinish, setSearchFinish] = useState<ProductFinish[]>([]);
  const [getSearchUsage, setSearchUsage] = useState<ProductUsage[]>([]);
  const [getSearchTypes, setSearchTypes] = useState<ProductType[]>([]);
  const [getSearchMixingPossibility, setSearchMixingPossibility] = useState<
    MixingPosibility[]
  >([]);

  const [getCheckedCategories, setCheckedCategories] = useState<
    ProductCategory[]
  >([]);
  const [getCheckedColours, setCheckedColours] = useState<ProductColor[]>([]);
  const [getCheckedFinish, setCheckedFinish] = useState<ProductFinish[]>([]);
  const [getCheckedUsage, setCheckedUsage] = useState<ProductUsage[]>([]);
  const [getCheckedTypes, setCheckedTypes] = useState<ProductType[]>([]);
  const [getCheckedMixingPossibility, setCheckedMixingPossibility] = useState<
    MixingPosibility[]
  >([]);

  const getFilterData = async () => {
    try {
      setLoading(true);
      await Apis.getFilter().then(response => {
        if (response?.status === 200) {
          response.data.result;
          setCategories(response.data.result.product_categories);
          setColours(response.data.result.product_color);
          setFinish(response.data.result.product_finish);
          setTypes(response.data.result.product_types);
          setUsage(response.data.result.product_usages);
          setMixingPossibility(response.data.result.mixing_posibilities);
          setSearchCategories(response.data.result.product_categories);
          setSearchColours(response.data.result.product_color);
          setSearchFinish(response.data.result.product_finish);
          setSearchTypes(response.data.result.product_types);
          setSearchUsage(response.data.result.product_usages);
          setSearchMixingPossibility(response.data.result.mixing_posibilities);
          setLoading(false);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFilterData();
  }, []);

  const handleReset = () => {
    setCheckedCategories([]);
    setCheckedColours([]);
    setCheckedFinish([]);
    setCheckedUsage([]);
    setCheckedTypes([]);
    setCheckedMixingPossibility([]);
    toastMessage(toast, 'Filter Clear');
  };

  const handleProductCategory = (item: ProductCategory) => {
    if (
      getCheckedCategories.some(
        (checkedItem: {id: any}) => checkedItem.id === item.id,
      )
    ) {
      setCheckedCategories(prevItems =>
        prevItems?.filter((prevItem: {id: any}) => prevItem.id !== item.id),
      );
    } else {
      setCheckedCategories(prevItems => [...prevItems, item]);
    }
  };

  const handleProductColor = (item: ProductColor) => {
    if (
      getCheckedColours.some(
        (checkedItem: {id: any}) => checkedItem.id === item.id,
      )
    ) {
      setCheckedColours(prevItems =>
        prevItems?.filter((prevItem: {id: any}) => prevItem.id !== item.id),
      );
    } else {
      setCheckedColours(prevItems => [...prevItems, item]);
    }
  };

  const handleProductFinish = (item: ProductFinish) => {
    if (
      getCheckedFinish.some(
        (checkedItem: {id: any}) => checkedItem.id === item.id,
      )
    ) {
      setCheckedFinish(prevItems =>
        prevItems?.filter((prevItem: {id: any}) => prevItem.id !== item.id),
      );
    } else {
      setCheckedFinish(prevItems => [...prevItems, item]);
    }
  };

  const handleProductUsage = (item: ProductUsage) => {
    if (
      getCheckedUsage.some(
        (checkedItem: {id: any}) => checkedItem.id === item.id,
      )
    ) {
      setCheckedUsage(prevItems =>
        prevItems?.filter((prevItem: {id: any}) => prevItem.id !== item.id),
      );
    } else {
      setCheckedUsage(prevItems => [...prevItems, item]);
    }
  };

  const handleProductType = (item: ProductType) => {
    if (
      getCheckedTypes.some(
        (checkedItem: {id: any}) => checkedItem.id === item.id,
      )
    ) {
      setCheckedTypes(prevItems =>
        prevItems?.filter((prevItem: {id: any}) => prevItem.id !== item.id),
      );
    } else {
      setCheckedTypes(prevItems => [...prevItems, item]);
    }
  };

  const handleMixingPosibility = (item: MixingPosibility) => {
    if (
      getCheckedMixingPossibility.some(
        (checkedItem: {id: any}) => checkedItem.id === item.id,
      )
    ) {
      setCheckedMixingPossibility(prevItems =>
        prevItems?.filter((prevItem: {id: any}) => prevItem.id !== item.id),
      );
    } else {
      setCheckedMixingPossibility(prevItems => [...prevItems, item]);
    }
  };

  const handleCategories = (text: string) => {
    if (text === '') {
      setSearchCategories(getCategories);
    } else {
      const filtered = getCategories.filter((item: {code: string}) => {
        return item.code?.toLowerCase().includes(text.toLowerCase());
      });
      setSearchCategories(filtered);
    }
  };

  const handleColors = (text: string) => {
    if (text === '') {
      setSearchColours(getColours);
    } else {
      const filtered = getColours.filter((item: {code: string}) => {
        return item.code?.toLowerCase().includes(text.toLowerCase());
      });
      setSearchColours(filtered);
    }
  };

  const handleFinish = (text: string) => {
    if (text === '') {
      setSearchFinish(getFinish);
    } else {
      const filtered = getFinish.filter((item: {code: string}) => {
        return item.code?.toLowerCase().includes(text.toLowerCase());
      });
      setSearchFinish(filtered);
    }
  };

  const handleUsage = (text: string) => {
    if (text === '') {
      setSearchUsage(getUsage);
    } else {
      const filtered = getUsage.filter((item: {code: string}) => {
        return item.code?.toLowerCase().includes(text.toLowerCase());
      });
      setSearchUsage(filtered);
    }
  };

  const handleType = (text: string) => {
    if (text === '') {
      setSearchTypes(getTypes);
    } else {
      const filtered = getTypes.filter((item: {code: string}) => {
        return item.code?.toLowerCase().includes(text.toLowerCase());
      });
      setSearchTypes(filtered);
    }
  };

  const handleMixing = (text: string) => {
    if (text === '') {
      setSearchMixingPossibility(getMixingPossibility);
    } else {
      const filtered = getMixingPossibility.filter((item: {code: string}) => {
        return item.code?.toLowerCase().includes(text.toLowerCase());
      });
      setSearchMixingPossibility(filtered);
    }
  };

  const SECTIONS = [
    {
      key: 0,
      title: 'Stone Category',
      content: 'Lorem ipsum...',
      icon: 'category',
      type: 'material',
      onChangeText: (value: string) => handleCategories(value),
      data: (
        <View>
          {getSearchCategories?.map((data: ProductCategory, index: any) => (
            <FilterList
              key={index}
              isChecked={getCheckedCategories.some(
                checkedItem => checkedItem.id === data.id,
              )}
              title={data.code}
              onPress={() => handleProductCategory(data)}
            />
          ))}
        </View>
      ),
    },
    {
      key: 1,
      title: 'Colours',
      content: 'Lorem ipsum...',
      icon: 'dot-fill',
      type: 'octicon',
      onChangeText: (value: string) => handleColors(value),
      data: (
        <View>
          {getSearchColours?.map((data: ProductColor, index: any) => (
            <FilterList
              key={index}
              isChecked={getCheckedColours.some(
                checkedItem => checkedItem.id === data.id,
              )}
              title={data.code}
              onPress={() => handleProductColor(data)}
            />
          ))}
        </View>
      ),
    },
    {
      key: 2,
      title: 'Finish',
      content: 'Lorem ipsum...',
      icon: 'ios-flag-outline',
      type: 'ionicon',
      onChangeText: (value: string) => handleFinish(value),
      data: (
        <View>
          {getSearchFinish?.map((data: ProductFinish, index: any) => (
            <FilterList
              key={index}
              isChecked={getCheckedFinish.some(
                checkedItem => checkedItem.id === data.id,
              )}
              title={data.code}
              onPress={() => handleProductFinish(data)}
            />
          ))}
        </View>
      ),
    },
    {
      key: 3,
      title: 'Usage',
      content: 'Lorem ipsum...',
      icon: 'data-usage',
      type: 'mateiralicon',
      onChangeText: (value: string) => handleUsage(value),
      data: (
        <View>
          {getSearchUsage?.map((data: ProductUsage, index: any) => (
            <FilterList
              key={index}
              isChecked={getCheckedUsage.some(
                checkedItem => checkedItem.id === data.id,
              )}
              title={data.code}
              onPress={() => handleProductUsage(data)}
            />
          ))}
        </View>
      ),
    },
    {
      key: 4,
      title: 'Type',
      content: 'Lorem ipsum...',
      icon: 'sports-baseball',
      type: 'mateiralicon',
      onChangeText: (value: string) => handleType(value),
      data: (
        <View>
          {getSearchTypes?.map((data: ProductType, index: any) => (
            <FilterList
              key={index}
              isChecked={getCheckedTypes.some(
                checkedItem => checkedItem.id === data.id,
              )}
              title={data.code}
              onPress={() => handleProductType(data)}
            />
          ))}
        </View>
      ),
    },
    {
      key: 5,
      title: 'Mixing Possibilities',
      content: 'Lorem ipsum...',
      icon: 'shuffle',
      type: 'feather',
      onChangeText: (value: string) => handleMixing(value),
      data: (
        <View>
          {getSearchMixingPossibility?.map((data: MixingPosibility, index: any) => (
            <FilterList
              key={index}
              isChecked={getCheckedMixingPossibility.some(
                checkedItem => checkedItem.id === data.id,
              )}
              title={data.code}
              onPress={() => handleMixingPosibility(data)}
            />
          ))}
        </View>
      ),
    },
  ];

  const _renderSectionTitle = (section: any) => {
    return (
      <View>
        <Text>{section.content}</Text>
      </View>
    );
  };

  const _renderHeader = (section: any) => {
    return (
      <View style={styles.listContainer}>
        <Icon
          name={section.icon}
          type={section.type}
          color={ColorConstants.primaryWhite}
          style={styles.iconContainer}
        />
        <HighLightLabel
          hightLightLabel={section.title}
          style={commonStyles.fill}
          labelStyle={{
            textAlign: 'left',
          }}
        />
        <Icon
          name={'chevron-down'}
          type={'ionicon'}
          color={ColorConstants.primaryColor}
          style={justifyContent('center')}
        />
      </View>
    );
  };

  const _renderContent = (section: any) => {
    return (
      <View style={styles.listContainer}>
        <View style={commonStyles.fill}>
          <View
            style={{
              borderBottomColor: ColorConstants.primaryColor,
              borderBottomWidth: 2,
              height: 50,
            }}>
            <View style={{flexDirection: 'row', padding: 10}}>
              <Icon
                name="search"
                type={'ionicon'}
                color={ColorConstants.primaryColor}
                style={justifyContent('center')}
              />
              <TextInput
                placeholder="search here"
                placeholderTextColor={ColorConstants.textGrey}
                style={{
                  flex: 1,
                  paddingHorizontal: 10,
                }}
                onChangeText={section.onChangeText}
              />
            </View>
          </View>
          <View>{section.data}</View>
        </View>
      </View>
    );
  };

  return (
    <View style={commonStyles.container}>
      <AppHeader
        navigate={() => navigation.goBack()}
        text={'Filter Page'}
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
            onPress={() => handleReset()}>
            Reset All
          </Button>
        }
      />
      <View style={{flex: 1}}>
        <ScrollView>
          <Accordion
            underlayColor={ColorConstants.primaryWhite}
            sections={SECTIONS}
            activeSections={isCollapsed}
            renderHeader={_renderHeader}
            renderContent={_renderContent}
            onChange={(index: number[]) => setCollapsed(index)}
          />
        </ScrollView>
        {isLoading && <Loading />}
      </View>
      <View style={{margin: 20}}>
        <AppButton text="Apply" onPress={() => {

          navigation.navigate('Filter Product Page', {
            data: {
              productCategories: getCheckedCategories.map(data=> data.id),
              productColors: getCheckedColours.map(data=> data.id),
              productFinish: getCheckedFinish.map(data=> data.id),
              productUsage: getCheckedUsage.map(data=> data.id),
              productType: getCheckedTypes.map(data=> data.id),
              productMixingPossibility: getCheckedMixingPossibility.map(data=> data.id)
            }
          });

          console.log(getCheckedCategories.map(data=> data.id));
          console.log(getCheckedColours.map(data=> data.id));
          console.log(getCheckedFinish.map(data=> data.id));
          console.log(getCheckedUsage.map(data=> data.id));
          console.log(getCheckedTypes.map(data=> data.id));
          console.log(getCheckedMixingPossibility.map(data=> data.id));
        }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: ColorConstants.primaryWhite,
  },
  textStyles: {
    textAlign: 'justify',
    paddingHorizontal: 10,
  },
  highLight: {
    alignSelf: 'flex-start',
    color: ColorConstants.primaryColor,
  },
  iconContainer: {
    height: 50,
    width: 50,
    marginRight: 20,
    backgroundColor: ColorConstants.primaryColor,
    justifyContent: 'center',
    borderRadius: 100,
    color: ColorConstants.primaryWhite,
  },
  listContainer: {
    marginTop: 10,
    elevation: 100,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: ColorConstants.primaryWhite,
    margin: 10,
    padding: 15,
    paddingHorizontal: 20,
    shadowColor: ColorConstants.primaryBlack,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 4,
    borderRadius: 5,
  },
});

export default FilterPage;
