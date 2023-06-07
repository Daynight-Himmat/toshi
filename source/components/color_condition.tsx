import ColorConstants from '../constants/color_constants';

abstract class ColorsCondtion {
  static dotColors = (d: any) =>
    d === 'inactive'
      ? ColorConstants.textHintColor
      : ColorConstants.primaryColor;
}

export default ColorsCondtion;
