import React from 'react';
import styled from 'styled-components/native';
import {ButtonContainer, ButtonText} from '../screens/style';
import defaultTheme from '../theme/defaultTheme';

interface ButtonProps {
  text: string;
  onPress: () => void;
  transparent?: boolean;
  style?: {};
}

export const ArrowButton = ({
  onPress,
  up,
  down,
}: {
  onPress: () => void;
  up?: boolean;
  down?: boolean;
}) => {
  return (
    <ArrowButtonContainer onPress={onPress}>
      <ArrowButtonText>{down ? '▼' : '▲'}</ArrowButtonText>
    </ArrowButtonContainer>
  );
};

const Button = ({text, onPress, transparent, style}: ButtonProps) => {
  return (
    <ButtonContainer
      style={style}
      onPress={onPress}
      activeOpacity={0.8}
      transparent={transparent}>
      <ButtonText transparent={transparent}>{text}</ButtonText>
    </ButtonContainer>
  );
};

const ArrowButtonContainer = styled.TouchableOpacity`
  width: ${defaultTheme.width * 40}px;
  /* height: ${defaultTheme.height * 20}px; */
  background-color: #ababab;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

const ArrowButtonText = styled.Text`
  font-size: ${defaultTheme.width * 20}px;
  text-align: center;
`;

export default Button;
