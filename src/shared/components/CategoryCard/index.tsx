import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {colorPalette} from '../../colors';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {Category} from '../../models';
import {BoldText} from '../../styles';
import Avatar from '../Avatar';
import {useNavigation} from '@react-navigation/native';
import {RouteName} from '../../constants/routing';

interface Props {
  label: string | Category;
}

const CategoryCard = (props: Props) => {
  const {label} = props;

  const renderIconName = (): string => {
    switch (label) {
      case 'animal':
        return 'pets';
      case 'career':
        return 'group-work';
      case 'celebrity':
        return 'stars';
      case 'dev':
        return 'developer-mode';
      case 'explicit':
        return 'explicit';
      case 'fashion':
        return 'assistant';
      case 'food':
        return 'coffee-maker';
      case 'history':
        return 'history';
      case 'money':
        return 'attach-money';
      case 'movie':
        return 'movie';
      case 'music':
        return 'music-note';
      case 'political':
        return 'assured-workload';
      case 'religion':
        return 'auto-awesome';
      case 'science':
        return 'balance';
      case 'sport':
        return 'sports-football';
      default:
        return 'travel-explore';
    }
  };

  const navigation = useNavigation<any>();

  return (
    <Pressable
      style={[styles.container]}
      onPress={() => navigation.navigate(RouteName.JOKE, {category: label})}>
      <Avatar>
        <Icon name={renderIconName()} size={20} color={colorPalette.white} />
      </Avatar>
      <Text style={[BoldText, styles.label]}>{label}</Text>
      <View style={styles.chevronContainer}>
        <Icon name="chevron-right" size={20} color={colorPalette.white} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colorPalette.secondaryColor,
    borderRadius: 4,
    borderColor: colorPalette.primaryColor,
    borderWidth: 0.5,
    height: 70,
    marginVertical: 5,
    paddingHorizontal: 15,
  },
  label: {
    textTransform: 'capitalize',
    color: colorPalette.white,
  },
  chevronContainer: {
    width: 100,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});

export default CategoryCard;
