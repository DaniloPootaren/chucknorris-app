import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {api} from '../../api';
import CategoryCard from '../../shared/components/CategoryCard';
import Loader from '../../shared/components/Loader';
import {Category} from '../../shared/models';
import {HeadingText, MainLayout} from '../../shared/styles';
import SplashScreen from 'react-native-splash-screen';

const HomeScreen = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await api.getCategories();
      setCategories(data.data);
    } catch (e) {
      console.log('error', e);
    } finally {
      setLoading(false);
      SplashScreen.hide();
    }
  };

  return (
    <View style={[MainLayout]}>
      <Text style={[HeadingText, styles.heading]}>Dive into Chuck's Jokes</Text>
      <FlatList
        data={categories}
        renderItem={object => <CategoryCard label={object.item} />}
      />
      {loading && <Loader />}
    </View>
  );
};

const styles = {
  heading: {
    marginBottom: 10,
  },
};

export default HomeScreen;
