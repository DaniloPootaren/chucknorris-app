import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colorPalette} from '../../colors';

interface Props {
  joke: string;
}

const JokeHolder = (props: Props) => {
  const {joke} = props;
  return joke ? (
    <View style={styles.container}>
      <Text style={styles.label}>"{joke}"</Text>
    </View>
  ) : (
    <></>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    borderWidth: 1,
    minHeight: 100,
    padding: 10,
    marginTop: 30,
    borderLeftWidth: 20,
    borderColor: colorPalette.grey,
  },
  label: {
    fontSize: 16,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
});

export default JokeHolder;
