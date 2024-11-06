import React, {useState} from 'react';
import {
  CommonText,
  Container,
  InputText,
  OptionContainer,
  Title,
  WarningText,
} from './style';
import Button, {ArrowButton} from '../components/Buttons';
import CheckBox from '../components/CheckBoxes';
import {View} from 'react-native';
import defaultTheme from '../theme/defaultTheme';
import {GameMode, Screens} from '../App';

/* 짝수면 첫 플레이어가 번역/그림까지 그리고 넘기기 */
const Main = ({
  setScreen,
  numPeople,
  setNumPeople,
  limit,
  setLimit,
  mode,
  setMode,
}: {
  setScreen: (screen: Screens) => void;
  numPeople: number;
  setNumPeople: (p: number) => void;
  limit: number;
  setLimit: (l: number) => void;
  mode: GameMode;
  setMode: (m: GameMode) => void;
}) => {
  const [warningText, setWarningText] = useState<string>('');

  return (
    <Container>
      <Title>✨ Jennifer와 함께하는 GAME TIME ✨</Title>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          marginTop: defaultTheme.height * 20,
          paddingHorizontal: defaultTheme.width * 20,
        }}>
        <CheckBox
          text="노래 맞추기"
          onClick={() => {
            setMode(GameMode.SONG);
          }}
          active={mode === GameMode.SONG}
        />
        <CheckBox
          text="그림 맞추기"
          onClick={() => {
            setMode(GameMode.PICTURE);
          }}
          active={mode === GameMode.PICTURE}
        />
      </View>

      <View
        style={{
          borderWidth: 1,
          borderRadius: 8,
          padding: defaultTheme.width * 20,
          marginBottom: defaultTheme.height * 10,
        }}>
        <OptionContainer>
          <CommonText style={{width: defaultTheme.width * 90}}>
            플레이어 수
          </CommonText>
          <CommonText>{numPeople}명</CommonText>
          <View
            style={{
              flexDirection: 'row',
              width: defaultTheme.width * 90,
              justifyContent: 'space-between',
            }}>
            <ArrowButton
              up
              onPress={() => {
                setNumPeople(numPeople < 12 ? numPeople + 1 : 12);
              }}
            />
            <ArrowButton
              down
              onPress={() => {
                setNumPeople(numPeople > 3 ? numPeople - 1 : 3);
              }}
            />
          </View>
        </OptionContainer>
        <OptionContainer>
          <CommonText style={{width: defaultTheme.width * 90}}>
            제한시간
          </CommonText>
          <CommonText>{limit}초</CommonText>
          <View
            style={{
              flexDirection: 'row',
              width: defaultTheme.width * 90,
              justifyContent: 'space-between',
            }}>
            <ArrowButton
              up
              onPress={() => {
                setLimit(limit + 10);
              }}
            />
            <ArrowButton
              down
              onPress={() => {
                setLimit(limit > 0 ? limit - 10 : 0);
              }}
            />
          </View>
        </OptionContainer>
      </View>
      {warningText !== '' && <WarningText>{warningText}</WarningText>}
      <Button
        text="START"
        onPress={() => {
          setScreen(Screens.FIRST);
        }}
      />
    </Container>
  );
};

export default Main;
