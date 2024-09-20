import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import PrimryButton from '../components/ui/PrimryButton';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import { Typography } from '../theme/Typography';

export default function StartGameScreen({onPickerNumber}: any) {
  const [enterednumber, setEnteredNumber] = useState('');
  const {width, height} = useWindowDimensions();

  function numberInputHandler(enterdText: any) {
    setEnteredNumber(enterdText);
  }

  function confirInputHandler() {
    const choesNumber = parseInt(enterednumber);

    if (isNaN(choesNumber) || choesNumber <= 0 || choesNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 to 99',
        [{text: 'oky', style: 'destructive', onPress: reseatInputHandle}],
      );
      return;
    }
    // console.log("Valid Number",enterednumber)
    onPickerNumber(choesNumber);
  }

  function reseatInputHandle() {
    setEnteredNumber('');
  }

  const margiTopDistance = height < 380 ? 30 : 100;

  return (
    <>
      <ScrollView style={styles.screen} >
        <KeyboardAvoidingView style={styles.screen} behavior="position">
          <View style={[styles.rootContainer, {marginTop: margiTopDistance}]}>
            <Title>
              <Text style={Typography.LABEL.l_1}>Guess My Number</Text>
            </Title>
            <Card>
              <InstructionText>
                <Text style={Typography.LABEL.l_2}>Enter A Number</Text>
              </InstructionText>
              <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={numberInputHandler}
                value={enterednumber}
              />
              <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                  <PrimryButton onPress={reseatInputHandle}>Reset</PrimryButton>
                </View>
                <View style={styles.buttonContainer}>
                  <PrimryButton onPress={confirInputHandler}>
                    Confirm
                  </PrimryButton>
                </View>
              </View>
            </Card>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    //marginTop: deviceHeight < 380 ? 30 : 100,
    alignItems: 'center',
  },
  screen:{
    flex:1
  },

  numberInput: {
    height: 50,
    fontSize: 25,
    borderBottomColor: Colors.primary800,
    borderBottomWidth: 2,
    marginVertical: 8,
    color: Colors.primary600,
    fontWeight: 'bold',
    textAlign: 'center',
    width: 70,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});
