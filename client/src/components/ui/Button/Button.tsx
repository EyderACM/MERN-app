import styled from 'styled-components';
import { backgroundColor, borderColor, fontColor } from './utils';

export interface IButtonProps {
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'transparent';
}

export const Button = styled.button<IButtonProps>`
  background-color: ${props => backgroundColor(props.color)};
  border: 3px solid ${props => borderColor(props.color)}  
  border-radius: 20px;
  color: ${props => fontColor(props.color)};
  cursor: pointer;
  display: block;
  font-family: Montserrat;
  font-weight: 600;
  height: 40px;
  outline: none;
  width: 200px;
`;
