import React, {FunctionComponent} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {alignSelf, commonStyles} from '../../components/style';
import {Appbar} from 'react-native-paper';
import ColorConstants from '../../constants/color_constants';
import Menu from '../../assets/image/menu.svg';
import {Avatar} from '@rneui/themed';
import {HighLightLabel, Label} from '../../components/label';
import AppSize from '../../components/size';
import DSContainer from '../../components/dashboard_container';
import {ScrollView} from 'react-native';

type Props = {
  navigation: any;
};

const DashBoard: FunctionComponent<Props> = ({navigation}) => {
  const dashValue = [
    {
      name: 'Inquiry & Order Status',
    },
    {
      name: 'List of Product',
    },
    {
      name: 'Message',
    },
    {
      name: 'Feed',
    },
    {
      name: 'Setting',
      navigation: ()=> navigation.navigate('Create-Pass')
    },
  ];

  return (
    <View style={commonStyles.container}>
      <Appbar.Header
        style={{backgroundColor: ColorConstants.primaryWhite}}
        children={
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              paddingHorizontal: 10,
            }}>
            <TouchableOpacity onPress={()=> navigation.navigate('MyProfile')}>
            <Menu height={40} width={40} />
            </TouchableOpacity>
            <Avatar
              size={45}
              rounded
              source={require('../../assets/image/profile.png')}
            />
          </View>
        }></Appbar.Header>
      <View style={styles.viewContainer}>
        <HighLightLabel
          hightLightLabel="Hello, Live!"
          labelStyle={undefined}
          style={alignSelf('flex-start')}
        />
        <Label name="Welcome back."  margin={0} />
        <AppSize height={20} />
        <ScrollView>
          {dashValue.map((data, index) => (
            <DSContainer
              index={index}
              key={index}
              data={data}
              navigation={navigation}
              widget={undefined}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default DashBoard;
