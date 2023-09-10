import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colorPalette} from '../../colors';
import Button from '../Button';

interface Props {
  joke: string;
}

const JokeHolder = (props: Props) => {
  const {joke} = props;
  return joke ? (
    <View>
      <View style={styles.container}>
        <Text style={styles.label}>"{joke}"</Text>
      </View>
      <View style={styles.actions}>
        <Button label="Prev" onPress={() => console.log('Prev')} />
        <Button label="Next" onPress={() => console.log('Next')} />
      </View>
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
  actions: {
    height: 50,
    marginTop: 20,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default JokeHolder;
