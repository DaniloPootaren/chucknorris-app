import React from 'react';
import {View, Modal, StyleSheet, ActivityIndicator} from 'react-native';
import {colorPalette} from '../../colors';

const Loader = () => {
  return (
    <Modal animationType="fade" transparent={true} visible={true}>
      <View style={styles.overlay}>
        <ActivityIndicator size="large" color={colorPalette.primaryColor} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: colorPalette.overlayBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loader;
