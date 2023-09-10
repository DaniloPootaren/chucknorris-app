import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colorPalette} from '../../colors';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {Category} from '../../models';
import {BoldText} from '../../styles';
import Avatar from '../Avatar';

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

  return (
    <View style={[styles.container]}>
      <Avatar>
        <Icon
          name={renderIconName()}
          size={20}
          color={colorPalette.primaryColor}
        />
      </Avatar>
      <Text style={[BoldText, styles.label]}>{label}</Text>
      <View style={styles.chevronContainer}>
        <Icon
          name="chevron-right"
          size={20}
          color={colorPalette.secondaryColor}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: colorPalette.primaryColor,
    borderWidth: 1,
    height: 70,
    marginVertical: 5,
    paddingHorizontal: 15,
  },
  label: {
    textTransform: 'capitalize',
  },
  chevronContainer: {
    width: 100,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});

export default CategoryCard;
