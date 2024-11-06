import React from 'react';
import {GameMode, Screens} from '../App';
import Button from '../components/Buttons';
import {CommonText, Container} from './style';
import {Text, View} from 'react-native';
import defaultTheme from '../theme/defaultTheme';

const First = ({
  numPeople,
  mode,
  setScreen,
}: {
  numPeople: number;
  mode: GameMode;
  setScreen: (s: Screens) => void;
}) => {
  return (
    <Container>
      <CommonText>
        <CommonText special>{numPeople}</CommonText>
        명의 플레이어가 게임에 참여했습니다.
      </CommonText>
      <CommonText>
        노트의 첫번째 장에{' '}
        <CommonText special>
          {mode === GameMode.PICTURE ? '키워드' : '노래 제목 & 가수 & 가사'}
        </CommonText>
        를 작성해주세요!{'\n'}
      </CommonText>
      {numPeople % 2 === 0 ? (
        <>
          <CommonText>
            다음 장에 본인이 작성한{' '}
            {mode === GameMode.PICTURE
              ? `키워드를 그릴거에요!`
              : `가사를 영어로 번역할 거에요! (가사 ONLY!)`}
          </CommonText>
        </>
      ) : (
        <>
          <CommonText>
            작성을 다 하시면 다음 타자에게 넘길 준비를 해주세요~!{'\n'}
          </CommonText>
          <CommonText>
            <CommonText special>다음 타자</CommonText>는 노트를 받으시면{' '}
            <CommonText special>
              {mode === GameMode.PICTURE
                ? `키워드를 그려주세요!`
                : `가사를 영어로 번역해주세요!`}
            </CommonText>
          </CommonText>
        </>
      )}
      <CommonText>{'\n'}준비해주세요!</CommonText>

      <View style={{flexDirection: 'row', marginTop: defaultTheme.height * 10}}>
        <Button
          style={{marginRight: defaultTheme.width * 10}}
          text={`Let's START!`}
          onPress={() => {
            setScreen(Screens.TIMER);
          }}
        />
        <Button
          transparent
          text="BACK"
          onPress={() => {
            setScreen(Screens.MAIN);
          }}
        />
      </View>
    </Container>
  );
};

export default First;
