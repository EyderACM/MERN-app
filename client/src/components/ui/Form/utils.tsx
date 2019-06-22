import * as Colors from '../../../styles/Colors';

export const colorFromStatus = (hasError: boolean = false) => {
  if (hasError) {
    return Colors.WRONG_RED;
  }
  return Colors.LOVELY_GREY;
};
