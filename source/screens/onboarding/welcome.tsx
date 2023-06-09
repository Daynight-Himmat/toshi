import React, {FunctionComponent, useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import ColorConstants from '../../constants/color_constants';
import {Label} from '../../components/label';
import FontConstants from '../../constants/font_constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CommanFunctions from '../../components/comman_functions';

type Props = {
  navigation: any;
};

const WelCome: FunctionComponent<Props> = ({navigation}) => {

  const getRoute = async () => {
    const userId = await AsyncStorage.getItem('id');
    if(userId){
      CommanFunctions.routing(navigation,'DashBoard');
      
    }
    else{
      CommanFunctions.routing(navigation,'Splash');
    }
  }


  useEffect(() => {
    
    setTimeout(() => {
      getRoute()
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Label name={'WelCome to QualTile'} style={styles.label} margin={0} />
      <View style={styles.dash} />
      <Image
        source={require('../../assets/image/qual_icons.png')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorConstants.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 150,
    width: 150,
  },
  dash: {
    margin: 20,
    backgroundColor: ColorConstants.yellow,
    height: 2,
    width: 50,
  },
  label: {
    color: ColorConstants.primaryWhite,
    fontSize: 27,
    fontFamily: FontConstants.medium,
  },
});

export default WelCome;
