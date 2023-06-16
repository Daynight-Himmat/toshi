import { Icon } from "@rneui/themed";
import React, { FunctionComponent } from "react";
import {StyleSheet, View} from 'react-native';
import ColorConstants from "../constants/color_constants";
import CommanFunctions from "./comman_functions";



const WhatsApp: FunctionComponent = () => {
    return <View
    style={styles.container}>
    <Icon
      name="logo-whatsapp"
      type="ionicon"
      color={ColorConstants.whatsAppGreen}
      onPress={()=> CommanFunctions.whatsApp()}
    />
  </View>
}

const styles = StyleSheet.create({
    container: {
        marginTop: -10,
        paddingRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
      }
});

export default WhatsApp;