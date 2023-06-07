import React, {FunctionComponent} from 'react';
import {
  View,
  StyleSheet,
  ViewStyle,
  ImageStyle,
  Text,
  TouchableOpacity,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Image} from 'react-native';
import {HighLightLabel} from '../../components/label';
import ColorConstants from '../../constants/color_constants';
import FontConstants from '../../constants/font_constants';
import CommanFunctions from '../../components/comman_functions';
import ColorsCondtion from '../../components/color_condition';
import {commonStyles} from '../../components/style';

type Props = {
  navigation: any;
};

const SplashSreen: FunctionComponent<Props> = ({navigation}) => {
  const routing = async () => {
    CommanFunctions.routing(navigation, 'SignIn');
  };

  const slides = [
    {
      key: 1,
      title:
        'Browse The Largest Variety of Marble, \n Granite Sandstone And More',
      text: 'Description.\nSay something cool',
      image: require('../../assets/image/q4.png'),
    },
    {
      key: 2,
      title:
        'Browse The Largest Variety of Marble, \n Granite Sandstone And More',
      text: 'Other cool stuff',
      image: require('../../assets/image/q5.png'),
    },
    {
      key: 3,
      title:
        'Browse The Largest Variety of Marble, \n Granite Sandstone And More',
      text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
      image: require('../../assets/image/q6.png'),
    },
  ];

  const _renderItem = ({item}: {item: any}) => {
    return (
      <View style={styles({}).flex_container}>
        <View style={styles({}).textContainer}>
          <HighLightLabel hightLightLabel={item.title} style={undefined} labelStyle={undefined} />
        </View>
        <Image
          source={item?.image}
          style={styles({}).imgBg}
          resizeMode="contain"
        />
      </View>
    );
  };

  const _renderSkipButton = (t: string) => {
    return (
      <View style={styles({}).buttons}>
        <Text style={styles({}).buttonText}>{t ? 'Skip' : 'Next'}</Text>
      </View>
    );
  };

  const _renderDoneButton = () => {
    return (
      <View style={styles({}).buttons}>
        <Text style={styles({}).buttonText}>{'Done'}</Text>
      </View>
    );
  };

  return (
    <View style={commonStyles.container}>
      <View style={styles({}).header}>
        <Image
          source={require('../../assets/image/qualtilepng.png')}
          style={styles({}).imgBg1}
          resizeMode="contain"
        />
        <TouchableOpacity onPress={() => routing()}>
          <Text style={styles({}).headerText}>Skip</Text>
        </TouchableOpacity>
      </View>
      <AppIntroSlider
        data={slides}
        showPrevButton={false}
        showDoneButton={true}
        onDone={() => routing()}
        showSkipButton={false}
        renderItem={_renderItem}
        renderNextButton={() => _renderSkipButton('')}
        renderDoneButton={_renderDoneButton}
        dotStyle={styles({d: 'inactive'}).dotStyle}
        activeDotStyle={styles({d: 'active'}).dotStyle}
      />
    </View>
  );
};

export default SplashSreen;

interface StylesProps {
  d?: string;
}

interface StyleSheetType {
  flex_container: ViewStyle;
  header: ViewStyle;
  dotStyle: ViewStyle;
  imgBg: ImageStyle;
  imgBg1: ImageStyle;
  textContainer: ViewStyle;
  container: ViewStyle;
  imageContainer: ViewStyle;
  bottomContainer: ViewStyle;
  doneContainer: ViewStyle;
  buttons: ViewStyle;
  buttonText: ViewStyle;
  headerText: ViewStyle;
}

type StylesFunctionProps = (props: StylesProps) => StyleSheetType;

const styles: StylesFunctionProps = ({d}) =>
  StyleSheet.create<StyleSheetType>({
    flex_container: {
      flex: 1,
    },
    header: {
      padding: 10,
      flexDirection: 'row',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    dotStyle: {
      backgroundColor: ColorsCondtion.dotColors(d),
      width: d === 'active' ? 50 : 10,
      marginBottom: '50%',
    },
    imgBg: {
      height: 300,
      width: 300,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
    },
    imgBg1: {
      height: 50,
      width: 50,
    },
    textContainer: {
      marginTop: 25,
      alignSelf: 'center',
      width: '90%',
      marginBottom: 55,
    },
    container: {
      height: '100%',
      width: '100%',
      flexDirection: 'column',
    },
    imageContainer: {
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
    },
    bottomContainer: {
      width: '100%',
      backgroundColor: 'white',
      flexDirection: 'row',
      padding: 10,
    },
    doneContainer: {
      color: ColorConstants.primaryWhite,
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: FontConstants.ragular,
      fontWeight: '700',
      fontSize: 14,
      marginTop: 20,
    },
    buttons: {
      width: 200,
      height: 48,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      backgroundColor: ColorConstants.primaryColor,
    },
    buttonText: {
      color: ColorConstants.primaryWhite,
      fontSize: 17,
      fontFamily: FontConstants.medium,
    },
    headerText: {
      color: ColorConstants.primaryColor,
      fontWeight: '400',
      paddingLeft: 10,
    },
  });
