import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colorPalette} from '../../colors';
import Button from '../Button';

interface Props {
  joke: string;
  fetchJoke: () => void;
}

const JokeHolder = (props: Props) => {
  const {joke, fetchJoke} = props;

  const handleNext = () => {
    fetchJoke();
  };

  return joke ? (
    <View>
      <View style={styles.container}>
        <Text style={styles.label}>"{joke}"</Text>
      </View>
      <View style={styles.actions}>
        <Button label="HahaHaha!! 😂" onPress={handleNext} />
      </View>
    </View>
  ) : null;
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
    fontSize: 18,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  actions: {
    height: 50,
    marginTop: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default JokeHolder;
