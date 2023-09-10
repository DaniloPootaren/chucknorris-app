import React from 'react';
import {Text, View} from 'react-native';
import {CenterLayout, MainLayout} from '../../shared/styles';

const JokeScreen = () => {
  return (
    <View style={[MainLayout, CenterLayout]}>
      <Text>JOKE HERE:</Text>
    </View>
  );
};

export default JokeScreen;
