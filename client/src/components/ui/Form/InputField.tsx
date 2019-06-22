import styled from 'styled-components';
import { Field } from 'formik';
import * as Colors from '../../../styles/Colors';
import * as Units from '../../../styles/Units';
import { colorFromStatus } from './utils';

export interface IInputField {
  haserror?: true | false;
}

export const InputField = styled(Field)<IInputField>`
  background: ${props => colorFromStatus(props.haserror)};
  color: ${Colors.LETTERY_GREY};
  border: none;
  border-radius: 5px;
  margin: 7px 0;
  height: 40px;
  padding: 0 10px;
  width: 240px;

  @media (min-width: ${Units.MIN_DESKTOP_WIDTH}) {
    font-size: 18px;
    height: 60px;
    padding 0 15px;
    width: 560px;
  }
`;
