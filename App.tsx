import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import StartGameScreen from './src/screens/StartGameScreen';
import LinearGradient from 'react-native-linear-gradient'; // Correct import
import GameScreen from './src/screens/GameScreen';
import Colors from './src/constants/colors';
import GameOverScreen from './src/screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState<any>();
  const [gameIsOver,setGameIsOver]=useState(true);
  const [guessRounds,setGuessRounds]=useState(0);

  //useFonts


  function gameOverHandler(numberOfRoundes:any){
    setGameIsOver(true);
    setGuessRounds(numberOfRoundes);
  }

  function pikerNumberHandeler(pikedNumber: any) {
    setUserNumber(pikedNumber);
    setGameIsOver(false);
  }

  function startNewGameHandle(){
    setGuessRounds(0);
    setUserNumber(null);
  }

  let screen = <StartGameScreen onPickerNumber={pikerNumberHandeler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
  }

  if(gameIsOver && userNumber) {
    screen=(<GameOverScreen roundedNumber={guessRounds} userNumber={userNumber} onStartNewGame={startNewGameHandle}/>);
  }

 
  return (
    <LinearGradient
      start={{x: 1, y: 0}}
      end={{x: 0, y: 1}}
      colors={[Colors.bgColor1, Colors.bgColor2, Colors.bgColor3]}
      style={styles.rootScreen}>
      <ImageBackground
        source={require('./src/assets/images/background.png')}
        style={styles.rootScreen}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.35,
  },
});

// npx react-native run-android