import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../../constants/colors';

export default function InstructionText({children, style}: any) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.primary800,
    fontSize: 25,
    fontWeight: '800',
  },
});
