import React, {FunctionComponent} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {commonStyles} from '../../../components/style';
import { HighLightLabel, Label } from '../../../components/label';
import ColorConstants from '../../../constants/color_constants';

type Props = {
  navigation: any;
};

const AboutUs: FunctionComponent<Props> = ({navigation}) => {
  
    const first = "We, “QualTile”, are most steadfast and well-liked Manufacturer and Exporter of Black Granite, Gold Granite, Brown Granite, White Granite, etc. The offered products are available with us in various sizes, designs and patterns that best suits that the requirements of our esteemed customers in the most efficient manner. \n Our high patron-centric approach has helped us in gaining a long list of the client. These products are provided at industry leading prices that suit our esteemed customer's budget.\n\nWe deliver the product range within the stipulated time frame. We are exporting Our Products in Doha, Kuwait Europe, Spain, Germany, UK, Australia, Edypt, Kenia, Niezeria, UAE, Turkey and  Vietnam.Under the valuable guidance of our mentor, \'Mr. Akshat Gupta\', we have listed our company among the top list manufacturers of the best quality product. \nHis motivation inspires our workforce to faithfully work towards the goal."

  return (
    <View style={styles.viewContainer}>
      <View style={{padding: 10, justifyContent:'flex-start'}}>
      <HighLightLabel
          hightLightLabel="About Us"
          labelStyle={styles.highLight}
          style={styles.highLight}
        />
        </View>
      <Label name={first} style={styles.textStyles}/>
      <View style={{padding: 10, justifyContent:'flex-start'}}>
      <HighLightLabel
          hightLightLabel="Contact Us"
          labelStyle={styles.highLight}
          style={styles.highLight}
        />
        <Label name= {"QualTile \n242, 2nd Floor, Connaught Place, \nShobhagpura, Udaipur, \nRajasthan - 313001, India"}/>
        
        <Label name={"\n Akshat Gupta (CEO)"}/>
        <Label name="+91 7043785665"/>

        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    paddingHorizontal: 10,
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

export default AboutUs;
