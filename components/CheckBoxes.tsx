import React from 'react';
import styled from 'styled-components/native';
import defaultTheme from '../theme/defaultTheme';

const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Circle = styled.View`
  width: ${defaultTheme.width * 20}px;
  height: ${defaultTheme.width * 20}px;
  border-radius: 20px;
  border-color: #000;
  border-width: 1px;
  justify-content: center;
  align-items: center;
`;

const SmallCircle = styled.View`
  width: ${defaultTheme.width * 14}px;
  height: ${defaultTheme.width * 14}px;
  border-radius: 20px;
  border-color: blueviolet;
  background-color: blueviolet;
`;

const Text = styled.Text`
  font-size: ${defaultTheme.width * 16}px;
  margin-left: ${defaultTheme.width * 6}px;
`;

const CheckBox = ({
  active,
  onClick,
  text,
}: {
  active: boolean;
  onClick: () => void;
  text: string;
}) => {
  return (
    <Container onPress={onClick} activeOpacity={0.8}>
      <Circle>{active && <SmallCircle />}</Circle>
      <Text>{text}</Text>
    </Container>
  );
};

export default CheckBox;
