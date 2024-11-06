import styled from 'styled-components/native';
import defaultTheme from '../theme/defaultTheme';

const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: ${defaultTheme.height * 20}px ${defaultTheme.width * 20}px;
`;

const Title = styled.Text`
  font-size: ${defaultTheme.width * 32}px;
  text-align: center;
  font-weight: bold;
  margin-bottom: ${defaultTheme.height * 10}px;
`;

const CommonText = styled.Text<{special?: boolean}>`
  font-size: ${props =>
    props.special ? defaultTheme.width * 18 : defaultTheme.width * 16}px;
  font-weight: ${props => (props.special ? 'bold' : 'normal')};
  color: ${props => (props.special ? defaultTheme.colors.emphasize : 'black')};
`;

const WarningText = styled.View`
  font-size: ${defaultTheme.width * 16}px;
  color: red;
`;

const InputText = styled.TextInput`
  width: ${defaultTheme.width * 100}px;
  height: ${defaultTheme.height * 40}px;
`;

const ButtonContainer = styled.TouchableOpacity<{transparent?: boolean}>`
  width: ${defaultTheme.width * 200}px;
  height: ${defaultTheme.height * 40}px;
  background-color: ${props =>
    props.transparent ? 'transparent' : defaultTheme.colors.primary};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  border-width: 2px;
  border-color: ${props =>
    props.transparent ? defaultTheme.colors.primary : 'transparent'};
`;

const ButtonText = styled.Text<{transparent?: boolean}>`
  font-size: ${defaultTheme.width * 16}px;
  color: ${props =>
    props.transparent ? defaultTheme.colors.primary : 'white'};
`;

const OptionContainer = styled.View`
  flex-direction: row;
  width: ${defaultTheme.width * 300}px;
  justify-content: space-between;
  margin: ${defaultTheme.height * 15}px 0px;
`;

const DescriptionText = styled.Text`
  color: #fff;
  font-size: ${defaultTheme.width * 30}px;
  text-align: center;
`;

const TimerText = styled.Text`
  color: #fff;
  font-size: ${defaultTheme.width * 200}px;
  text-align: center;
`;

export {
  Container,
  Title,
  CommonText,
  WarningText,
  InputText,
  ButtonContainer,
  ButtonText,
  OptionContainer,
  DescriptionText,
  TimerText,
};
