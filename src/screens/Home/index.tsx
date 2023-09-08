import React from 'react';
import {Text, View} from 'react-native';
import {CenterLayout, MainLayout} from '../../shared/styles';

const HomeScreen = () => {
  return (
    <View style={[MainLayout, CenterLayout]}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
