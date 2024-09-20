import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import { Typography } from '../../theme/Typography';

export default function PrimryButton({children,onPress}: any) {
//   function buttonPresHandler() {
//     console.log('Pressed');
//   }

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({pressed}) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{color: '#f9ebea'}}>
        <Text style={Typography.LABEL.l_1}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: '#641e16',

    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 2,

    color: 'white',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
