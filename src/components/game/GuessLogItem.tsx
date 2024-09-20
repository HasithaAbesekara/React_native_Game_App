import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../../theme/Colors';
import {Typography} from '../../theme/Typography';

export default function GuessLogItem({roundNumber, guess}: any) {
  return (
    <View style={style.listItem}>
      <Text style={Typography.LABEL.l_1}>#{roundNumber}</Text>
      <Text style={Typography.LABEL.l_1}>Opponest's Guess:{guess}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  listItem: {
    borderColor: Colors.PRIMARY_COLOR,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.GREY_1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {},
});
