import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Colors from '../../constants/colors';

export default function Card({children}: any) {
  return <View style={styles.card}>{children}</View>;
}

const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  card: {
    // flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: Colors.primary500,
    elevation: 4,
    shadowColor: 'balck',
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
  },
});
