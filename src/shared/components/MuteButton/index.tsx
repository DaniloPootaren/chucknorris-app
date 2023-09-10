import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Text, TouchableOpacity} from 'react-native';
import {colorPalette} from '../../colors';

interface Props {
  onPlay: () => void;
  onStop: () => void;
}

const MuteButton = (props: Props) => {
  const {onPlay, onStop} = props;
  const [muted, setMuted] = useState<boolean>(false);

  useEffect(() => {
    if (muted) {
      onStop();
    } else {
      onPlay();
    }
  }, [muted]);

  return (
    <TouchableOpacity style={styles.container} onPress={() => setMuted(!muted)}>
      {muted ? (
        <Text style={styles.icon}>🔇</Text>
      ) : (
        <Text style={styles.text}>Speaking...</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colorPalette.grey,
    minWidth: 60,
    borderRadius: 50,
  },
  icon: {
    fontSize: 25,
  },
  text: {
    fontSize: 12,
    margin: 10,
  },
});

export default MuteButton;
