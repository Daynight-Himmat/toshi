import React, {FunctionComponent, useEffect, useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Modal,
  Alert,
  Text,
  Pressable,
  BackHandler,
  Platform,
} from 'react-native';
import ColorConstants from '../../constants/color_constants';
import {HighLightLabel, Label} from '../../components/label';
import FontConstants from '../../constants/font_constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CommanFunctions from '../../components/comman_functions';
import {marginBottom} from '../../components/style';
import RowButton from '../../components/row_button';
import AppSize from '../../components/size';
import Apis from '../../apis/api_functions';
import DeviceInfo from 'react-native-device-info';

type Props = {
  navigation: any;
};

const WelCome: FunctionComponent<Props> = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const getRoute = async () => {
    const userId = await AsyncStorage.getItem('id');
    if (userId) {
      CommanFunctions.routing(navigation, 'DashBoard');
    } else {
      CommanFunctions.routing(navigation, 'Splash');
    }
  };

  const getLastUpdateTime = async () => {
    await Apis.getFourceToUpdate().then(respone => {
      if (respone?.status === 200) {
        
        const ios_version = respone?.data?.version?.ios_version.toString();
        const android_version = respone?.data?.version?.android_version;
        const buildNumber = DeviceInfo.getBuildNumber();
        if (Platform.OS === 'ios') {
          if (buildNumber < '1') {
            setModalVisible(true);
          } else {
            setModalVisible(false);
            setTimeout(() => {
              getRoute();
            }, 1000);
          }
        }else{
          if (buildNumber < '1') {
            setModalVisible(true);
          } else {
            setModalVisible(false);
            setTimeout(() => {
              getRoute();
            }, 1000);
          }
        }
      }
    });
  };

  const handleBackButtonClick = () => {
    //this.props.navigation.goBack(null);
    BackHandler.exitApp();
    return true;
}

  useEffect(() => {
    getLastUpdateTime();
  }, []);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <HighLightLabel hightLightLabel="Update Available" />
            <AppSize height={20} />
            <RowButton
              text1="Cancel"
              text2="Update"
              onback={()=> {}}
              onPress={() => {}}
            />
          </View>
        </View>
      </Modal>
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
    marginBottom: 50,
  },
  label: {
    color: ColorConstants.primaryWhite,
    fontSize: 27,
    fontFamily: FontConstants.medium,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default WelCome;
