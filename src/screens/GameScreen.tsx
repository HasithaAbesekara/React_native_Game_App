import React, { useEffect, useState } from 'react';
import { Alert, FlatList, StyleSheet, View } from 'react-native';
import GuessLogItem from '../components/game/GuessLogItem';
import NumberContainer from '../components/game/NumberContainer';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import PrimryButton from '../components/ui/PrimryButton';
import Title from '../components/ui/Title';

function generateRandomBetween(min: any, max: any, exclude: any) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundry = 1;
let maxBoundry = 100;

export default function GameScreen(this: any, {userNumber, onGameOver}: any) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRound, setGuessRound] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRound.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundry = 1;
    maxBoundry = 100;
  }, []);

  function nextGeussHandler(diresction: any) {
    if (
      (diresction == 'lower' && currentGuess < userNumber) ||
      (diresction == 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", 'You Know that is Wrong...', [
        {text: 'Sorry', style: 'cancel'},
      ]);
      return;
    }

    if (diresction == 'lower') {
      maxBoundry = currentGuess;
    } else {
      minBoundry = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundry,
      maxBoundry,
      currentGuess,
    );
    setCurrentGuess(newRndNumber);
    setGuessRound(prevGuessRounds => [newRndNumber, ...prevGuessRounds]);
  }

  const guessRoundedListLength = guessRound.length;

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instaructionText}>
          Higher or Lower ?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimryButton onPress={nextGeussHandler.bind(this, 'lower')}>
              -
            </PrimryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimryButton onPress={nextGeussHandler.bind(this, 'greater')}>
              +
            </PrimryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        {/* {guessRound.map(guessRound => (
          <Text key={guessRound}>{guessRound}</Text>
        ))} */}

        <FlatList
          data={guessRound}
          renderItem={itemDate => (
            <GuessLogItem
              roundNumber={guessRoundedListLength - itemDate.index}
              guess={itemDate.item}
            />
          )}
          keyExtractor={item => item}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems:"center"
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  instaructionText: {
    marginBottom: 12,
  },
  buttonContainer: {
    flex: 1,
    fontSize: 15,
  },
  listContainer:{
    flex:1,
    padding:16
  }
});
