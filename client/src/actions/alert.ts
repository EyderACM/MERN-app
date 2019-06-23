import uuid from 'uuid';
import * as constants from './constants/types';

export interface SetAlert {
  type: constants.SET_ALERT;
  payload: {
    msg: String;
    alertType: String;
    id: String;
  };
}

export interface RemoveAlert {
  type: constants.REMOVE_ALERT;
  payload: {
    msg: String;
    alertType: String;
    id: String;
  };
}

export const setAlert = (msg: string, alertType: constants.SET_ALERT) => (dispatch: any) => {
  const id = uuid.v4();
  dispatch({
    type: constants.SET_ALERT,
    payload: { msg, alertType, id },
  });
};

export type AlertType = SetAlert | RemoveAlert;
