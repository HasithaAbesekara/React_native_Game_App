import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import PrimryButton from '../components/ui/PrimryButton';
import Title from '../components/ui/Title';
import Colors from '../theme/Colors';
import { Typography } from '../theme/Typography';

export default function GameOverScreen({roundedNumber,userNumber,onStartNewGame}:any) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/success.png')}
        />
      </View>
      <Text style={Typography.LABEL.l_3}>
        Your Phone needed <Text style={Typography.LABEL.l_1}>{roundedNumber}</Text> rounds to
        guess the number <Text style={Typography.LABEL.l_1}>{userNumber}</Text>
      </Text>
      <PrimryButton onPress={onStartNewGame}>Start New Game</PrimryButton>
    </View>
  )
}

const deviceWidth=Dimensions.get("window").width;

const styles = StyleSheet.create({
  imageContainer: {
    width: deviceWidth <380 ? 150 :300,
    height: deviceWidth <380 ? 150 :300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.PRIMARY_COLOR,
    overflow: 'hidden',
    margin: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    fontSize: 15,
  },
});
