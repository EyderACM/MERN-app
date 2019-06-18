import * as Colors from '../../styles/Colors';

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
