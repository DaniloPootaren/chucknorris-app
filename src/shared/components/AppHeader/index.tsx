import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colorPalette} from '../../colors';
import Icon from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome6';

import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {RouteName} from '../../constants/routing';

const AppHeader = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<{}>>();

  const renderBackButton = () => {
    return route.name !== RouteName.HOME ? (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}>
        <Icon name="arrowleft" size={25} color={colorPalette.white} />
      </TouchableOpacity>
    ) : (
      <Text style={styles.homeText}>Home</Text>
    );
  };

  return (
    <View style={[styles.container]}>
      {renderBackButton()}
      <FontAwesomeIcon
        name="circle-user"
        size={25}
        color={colorPalette.white}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: colorPalette.secondaryColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 30,
  },
  backButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 60,
  },
  homeText: {
    color: colorPalette.white,
    marginLeft: 18,
    fontSize: 18,
  },
});
export default AppHeader;
