import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {api} from '../../api';
import CategoryCard from '../../shared/components/CategoryCard';
import {Category} from '../../shared/models';
import {HeadingText, MainLayout} from '../../shared/styles';

const HomeScreen = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await api.getCategories();
      setCategories(data.data);
    } catch (e) {
      console.log('error', e);
    }
  };

  return (
    <View style={[MainLayout]}>
      <Text style={[HeadingText, styles.heading]}>Find Your Passion</Text>
      <FlatList
        data={categories}
        renderItem={object => <CategoryCard label={object.item} />}
      />
    </View>
  );
};

const styles = {
  heading: {
    marginBottom: 10,
  },
};

export default HomeScreen;
