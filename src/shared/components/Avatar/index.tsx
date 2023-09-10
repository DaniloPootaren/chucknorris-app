import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';
import {colorPalette} from '../../colors';

interface Props {
  children: ReactNode;
}

const Avatar = (props: Props) => {
  const {children} = props;
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    borderWidth: 2,
    borderColor: colorPalette.grey,
    padding: 5,
  },
});

export default Avatar;
