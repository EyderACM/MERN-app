import * as Colors from '../../../styles/Colors';

export const backgroundColor = (variant: String = 'primary') => {
  switch (variant) {
    case 'primary':
      return Colors.PRIMARY_BLUE;
    case 'secondary':
      return Colors.SCARY_GREY;
    case 'transparent':
      return 'Transparent';
  }
};

export const borderColor = (variant: String = 'primary') => {
  switch (variant) {
    case 'primary':
      return Colors.PRIMARY_BLUE;
    case 'secondary':
      return '';
    case 'transparent':
      return Colors.PRIMARY_BLUE;
  }
};

export const fontColor = (variant: String = 'primary') => {
  switch (variant) {
    case 'primary':
    case 'secondary':
      return 'white';
    case 'transparent':
      return Colors.PRIMARY_BLUE;
  }
};
