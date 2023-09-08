import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {colorPalette} from '../../colors';
import {BoldText} from '../../styles';

interface Props {
  selected?: boolean;
  onSelectedItem?: () => void;
}

const Chip = (props: Props) => {
  const {selected, onSelectedItem} = props;

  return (
    <Pressable
      style={[
        styles.wrapper,
        selected ? {backgroundColor: colorPalette.primaryColor} : null,
      ]}
      onPress={onSelectedItem}>
      <Text style={[BoldText, selected ? {color: colorPalette.white} : null]}>
        Chip
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 80,
    height: 36,
    borderColor: colorPalette.primaryColor,
    borderWidth: 2,
    borderRadius: 30,
  },
});

export default Chip;
