import React from 'react';
import {Text, View} from 'react-native';
import {CenterLayout, MainLayout} from '../../shared/styles';
import Chip from '../../shared/components/chip';

const HomeScreen = () => {
  return (
    <View style={[MainLayout, CenterLayout]}>
      <Text>Home Screen</Text>
      <Chip />
    </View>
  );
};

export default HomeScreen;
