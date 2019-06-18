import * as Colors from '../../styles/Colors';
import * as Units from '../../styles/Units';

export const fontWeight = (variant: String = 'regular') => {
  let fontWeight;
  switch (variant) {
    case 'semi-bold':
      fontWeight = '600';
      break;
    case 'regular':
      fontWeight = '400';
      break;
  }
  return fontWeight;
};

export const fontColor = (variant: String = 'primary') => {
  let colorPicked;
  switch (variant) {
    case 'primary':
      colorPicked = Colors.PRIMARY_BLUE;
      break;
    case 'secondary':
      return Colors.SCARY_GREY;
  }
  return colorPicked;
};

export const imageSize = (variant: String = 'mobile') => {
  switch (variant) {
    case 'mobile':
      return Units.MOBILE_IMAGE;
    case 'desktop':
      return Units.DESKTOP_IMAGE;
  }
};
