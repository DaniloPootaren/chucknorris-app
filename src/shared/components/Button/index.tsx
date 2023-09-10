import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colorPalette} from '../../colors';
import {DIMENSIONS} from '../../constants/dimensions';

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
    minWidth: 300,
    height: 40,
    margin: 10,
    padding: 5,
    borderColor: colorPalette.grey,
    borderRadius: 4,
    backgroundColor: colorPalette.secondaryColor,
  },
  label: {
    fontWeight: 'bold',
    color: colorPalette.white,
  },
});
export default Button;
