import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colorPalette} from '../../colors';

interface Props {
  label: string;
  onPress: () => void;
}

const Button = (props: Props) => {
  const {label, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 40,
    margin: 10,
    borderWidth: 2,
    padding: 5,
    borderColor: colorPalette.grey,
    borderRadius: 4,
  },
  label: {
    fontWeight: 'bold',
  },
});
export default Button;
