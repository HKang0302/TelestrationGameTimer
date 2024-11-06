import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import defaultTheme from '../theme/defaultTheme';
import {GameMode, Screens} from '../App';
import {DescriptionText, TimerText} from './style';

const Timer = ({
  totalRounds,
  limit = 60,
  mode,
  setScreen,
}: {
  totalRounds: number;
  limit: number;
  mode: GameMode;
  setScreen: (s: Screens) => void;
}) => {
  const [round, setRound] = useState(1);
  const [roundText, setRoundText] = useState('');
  const [time, setTime] = useState(limit);
  const [timesUp, setTimesUp] = useState(false);
  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => {
        setTime(time - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      setTimesUp(true);
      setRound(round + 1);
    }
  }, [time]);

  useEffect(() => {
    if (round >= totalRounds) {
      setRoundText('Time to GUESS the ANSWER!');
    } else if (round % 2 === 0) {
      setRoundText(
        mode === GameMode.PICTURE ? '그림 ➾ 키워드' : '영어 가사 ➾ 한국어 가사',
      );
    } else {
      setRoundText(
        mode === GameMode.PICTURE ? '키워드 ➾ 그림' : '한국어 가사 ➾ 영어 가사',
      );
    }
  }, [round]);

  const startRound = () => {
    setTimesUp(false);
    setTime(limit);
  };

  return (
    <View
      style={{
        backgroundColor: timesUp ? 'red' : '#000',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {timesUp ? (
        <TouchableOpacity
          onPress={() => {
            if (round >= totalRounds) {
              setScreen(Screens.MAIN);
            } else {
              startRound();
            }
          }}>
          <TimerText style={{fontSize: defaultTheme.width * 100}}>
            TIMES UP!
          </TimerText>
          <DescriptionText style={{fontSize: defaultTheme.width * 20}}>
            {'\n'}NEXT
          </DescriptionText>
          <DescriptionText
            style={{fontWeight: 'bold', paddingTop: defaultTheme.height * 8}}>
            {roundText}
          </DescriptionText>
        </TouchableOpacity>
      ) : (
        <>
          <DescriptionText>Round {round}</DescriptionText>
          <DescriptionText
            style={{
              fontWeight: 'bold',
              paddingTop: defaultTheme.height * 8,
              fontSize: defaultTheme.width * 34,
            }}>
            {roundText}
          </DescriptionText>
          <TimerText>{time}</TimerText>
        </>
      )}
    </View>
  );
};

export default Timer;
