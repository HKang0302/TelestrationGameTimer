import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import Main from './screens';
import First from './screens/First';
import Timer from './screens/Timer';

export enum Screens {
  MAIN,
  FIRST,
  TIMER,
  END,
}

export enum GameMode {
  SONG,
  TEXT,
  PICTURE,
}

function App(): React.JSX.Element {
  const [screen, setScreen] = useState<Screens>(Screens.MAIN);
  const [limit, setLimit] = useState<number>(60);
  const [mode, setMode] = useState<GameMode>(GameMode.SONG);
  const [numPeople, setNumPeople] = useState<number>(3);
  return (
    <View>
      {screen === Screens.MAIN && (
        <Main
          setScreen={setScreen}
          setNumPeople={setNumPeople}
          numPeople={numPeople}
          limit={limit}
          setLimit={setLimit}
          mode={mode}
          setMode={setMode}
        />
      )}
      {screen === Screens.FIRST && (
        <First setScreen={setScreen} numPeople={numPeople} mode={mode} />
      )}
      {screen === Screens.TIMER && (
        <Timer
          totalRounds={numPeople % 2 === 0 ? numPeople : numPeople - 1}
          mode={mode}
          limit={limit}
          setScreen={setScreen}
        />
      )}
    </View>
  );
}

export default App;
