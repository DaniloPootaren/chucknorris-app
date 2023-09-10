import {RouteProp, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {api} from '../../api';
import {Joke} from '../../shared/models';
import {CenterLayout, MainLayout} from '../../shared/styles';

const JokeScreen = () => {
  const [joke, setJoke] = useState<Joke>();

  const route = useRoute<
    RouteProp<{
      params: {
        category: string;
      };
    }>
  >();

  const {category} = route.params;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const joke = await (await api.getRandomJokeByCategory(category)).data;
    setJoke(joke);
  };

  return (
    <View style={[MainLayout, CenterLayout]}>
      <Text>{joke?.value}</Text>
    </View>
  );
};

export default JokeScreen;
