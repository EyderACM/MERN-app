import * as Colors from '../../../styles/Colors';

export const fontWeight = (variant: String = '400') => {
  switch (variant) {
    case 'semi-bold':
      return '600';
  }
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
