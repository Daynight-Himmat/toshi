/* eslint-disable @typescript-eslint/no-shadow */
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import ColorConstants from '../constants/color_constants';

type Style = {
  container: ViewStyle;
  viewContainer: ViewStyle;
  flexWithMidCenter: ViewStyle;
  titleStyle: ViewStyle;
  fill: ViewStyle;
  header: ViewStyle;
  fontFamily: ViewStyle;
  ph20: ViewStyle;
  rowWithCenter: ViewStyle;
  rowWithCenterAndSB: ViewStyle;
  rowWithSB: ViewStyle;
  row: ViewStyle;
  rowWithWrap: ViewStyle;
  rowWithWrapCenter: ViewStyle;
  textCenter: ViewStyle;
  selfCenter: ViewStyle;
  selfStart: ViewStyle;
  selfEnd: ViewStyle;
  shadow: ViewStyle;
  column: ViewStyle;
  midCenter: ViewStyle;
};

export const padding = (padding: any): ViewStyle => {
  return {padding};
};

export const paddingHorizontal = (paddingHorizontal: any): ViewStyle => {
  return {paddingHorizontal};
};

export const paddingVertical = (paddingVertical: any): ViewStyle => {
  return {paddingVertical};
};

export const paddingRight = (paddingRight: any): ViewStyle => {
  return {paddingRight};
};

export const paddingLeft = (paddingLeft: any): ViewStyle => {
  return {paddingLeft};
};

export const paddingTop = (paddingTop: any): ViewStyle => {
  return {paddingTop};
};

export const paddingBottom = (paddingBottom: any): ViewStyle => {
  return {paddingBottom};
};

export const margin = (margin: any): ViewStyle => {
  return {margin};
};

export const marginHorizontal = (marginHorizontal: any): ViewStyle => {
  return {marginHorizontal};
};

export const marginVertical = (marginVertical: any): ViewStyle => {
  return {marginVertical};
};

export const marginRight = (marginRight: any): ViewStyle => {
  return {marginRight};
};

export const marginLeft = (marginLeft: any): ViewStyle => {
  return {marginLeft};
};

export const marginTop = (marginTop: any): ViewStyle => {
  return {marginTop};
};

export const marginBottom = (marginBottom: any): ViewStyle => {
  return {marginBottom};
};

export const backgroundColor = (backgroundColor: any): ViewStyle => {
  return {backgroundColor};
};

export const color = (color: any): TextStyle => {
  return {color};
};

export const fontSize = (fontSize: any): TextStyle => {
  return {fontSize};
};

export const height = (height: any): ViewStyle => {
  return {height};
};

export const width = (width: any): ViewStyle => {
  return {width};
};

export const justifyContent = (justifyContent: any): ViewStyle => {
  return {justifyContent};
};

export const alignItems = (alignItems: any): ViewStyle => {
  return {alignItems};
};

export const alignSelf = (alignSelf: any): ViewStyle => {
  return {alignSelf};
};

export const alignContent = (alignContent: any): ViewStyle => {
  return {alignContent};
};

export const commonStyles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: ColorConstants.primaryWhite,
  },
  viewContainer: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: ColorConstants.primaryWhite,
  },
  flexWithMidCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  titleStyle: {
    color: 'white',
  },
  fill: {
    flex: 1,
  },
  header: {
    marginTop: 0,
  },
  fontFamily: {
    // fontFamily: 'Roboto',
  },
  ph20: {
    paddingHorizontal: 20,
  },
  rowWithCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowWithCenterAndSB: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowWithSB: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
  },
  rowWithWrap: {
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
  },
  rowWithWrapCenter: {
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
  selfCenter: {
    alignSelf: 'center',
  },
  selfStart: {
    alignSelf: 'flex-start',
  },
  selfEnd: {
    alignSelf: 'flex-end',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.14,
    shadowRadius: 5,
    elevation: 5,
  },
  column: {
    flexDirection: 'column',
  },
  midCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
function getStyle(arg0: number): any {
  throw new Error('Function not implemented.');
}
