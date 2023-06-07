import {StyleSheet} from 'react-native';
import FontConstants from '../constants/font_constants';
import ColorConstants from '../constants/color_constants';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
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
  ph: (paddingHorizontal: any) => ({
    paddingHorizontal,
  }),
  bg: (backgroundColor: any) => ({
    backgroundColor,
  }),
  color: (color: any) => ({
    color,
  }),
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
  fontSize: (fontSize: any) => ({
    fontSize,
  }),
  height: (height: any) => ({
    height,
  }),
  borderColor: (borderColor: any) => ({
    borderColor,
  }),
  width: (width: any) => ({
    width,
  }),
  pr: (paddingRight: any) => ({
    paddingRight,
  }),
  pb: (paddingBottom: any) => ({
    paddingBottom,
  }),

  pt: (paddingTop: any) => ({
    paddingTop,
  }),
  pv: (paddingVertical: any) => ({
    paddingVertical,
  }),

  pl: (paddingLeft: any) => ({
    paddingLeft,
  }),
  mb: (marginBottom: any) => ({
    marginBottom,
  }),
  mt: (marginTop: any) => ({
    marginTop,
  }),
  ml: (marginLeft: any) => ({
    marginLeft,
  }),
  mr: (marginRight: any) => ({
    marginRight,
  }),
  mh: (marginHorizontal: any) => ({
    marginHorizontal,
  }),
  mv: (marginVertical: any) => ({
    marginVertical,
  }),
  m: (margin: any) => ({
    margin,
  }),
  jc: (justifyContent: any) => ({
    justifyContent,
  }),
  ai: (alignItems: any) => ({
    alignItems,
  }),
  as: (alignSelf: any) => ({
    alignSelf,
  }),
  padding: (padding: any) => ({
    padding,
  }),
  row: {
    flexDirection: 'row',
  },
  Textbold: (fontWeight: any) => ({
    fontWeight,
  }),
  darkTilet: (height: any, width: any) => ({
    backgroundColor: 'rgba(0,0,0,0.4)',
    height,
    width,
    position: 'absolute',
  }),
  upperCase: {
    textTransform: 'uppercase',
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
  offerText: {
    fontSize: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
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
  zIndex: (zIndex: any) => ({
    zIndex,
  }),
  tintColor: (tintColor: any) => ({
    tintColor,
  }),
  borderWidth: (borderWidth: any) => ({
    borderWidth,
  }),
  textDecorationLine: {
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderColor: '#333',
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
    // backgroundColor: '#fff',
  },
  headerIcon: (backgroundColor: any) => ({
    backgroundColor,
    padding: 10,
    borderRadius: 100,
  }),
  iconBg: (backgroundColor: any) => ({
    padding: 10,
    backgroundColor,
    borderRadius: 50,
  }),
  bbw: (borderBottomWidth: any) => ({
    borderBottomWidth,
  }),
  borderRadius: (borderRadius: any) => ({
    borderRadius,
  }),
  positionRelative: {
    position: 'relative',
  },
  badgeStyle: {
    position: 'absolute',
    top: -3,
    right: -3,
  },
  rowText: {
    // color: BASIC_COLORS.REGENT_GRAY,
    fontSize: 12,
  },
  headingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 14,
    paddingBottom: 10,
    paddingLeft: 6,
  },
  headerPadding: {
    marginTop: 5,
    paddingHorizontal: 16,
  },
  modalHeaderPadding: {
    marginTop: 10,
    paddingHorizontal: 16,
  },
  flexEnd: {
    alignItems: 'flex-end',
  },
  flexWrap: {
    flex: 1,
    flexWrap: 'wrap',
  },
  top: (top: any) => ({top}),
  fr: {
    flexDirection: 'row-reverse',
  },
  left: (left: any) => ({
    left,
  }),
  bottom: (bottom: any) => ({
    bottom,
  }),
  FD: (flexDirection: any) => ({
    flexDirection,
  }),
  right: (right: any) => ({
    right,
  }),
  column: {
    flexDirection: 'column',
  },
  midCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title400: {
    fontFamily: FontConstants.ragular,
    fontSize: 16,
    color: ColorConstants.primaryBlack,
  },
  title500: {
    fontFamily: FontConstants.ragular,
    fontSize: 16,
    color: ColorConstants.primaryBlack,
  },
  title600: {
    fontFamily: FontConstants.ragular,
    fontSize: 16,
    color: ColorConstants.primaryBlack,
  },
});
