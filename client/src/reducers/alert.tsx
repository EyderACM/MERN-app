import { SET_ALERT, REMOVE_ALERT } from '../actions/constants/types';
import { AlertType } from '../actions/alert';

export const initialState = [];

export const alert = (state: any = initialState, action: AlertType) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter((warn: { id: any }) => warn.id !== payload);
    default:
      return state;
  }
};
