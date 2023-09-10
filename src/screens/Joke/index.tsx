import {RouteProp, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Image, View} from 'react-native';
import {api} from '../../api';
import Loader from '../../shared/components/Loader';
import {Joke} from '../../shared/models';
import {CenterLayout, MainLayout} from '../../shared/styles';
import Tts from 'react-native-tts';
import Logo from '../../assets/chucknorris_logo.png';
import JokeHolder from '../../shared/components/JokeHolder';

const JokeScreen = () => {
  const [joke, setJoke] = useState<Joke>();
  const [loading, setLoading] = useState<boolean>();

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
    setLoading(true);
    try {
      const joke = await (await api.getRandomJokeByCategory(category)).data;
      setJoke(joke);
      Tts.speak(joke.value);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={[MainLayout, CenterLayout]}>
      <Image source={Logo} height={300} />
      <JokeHolder joke={joke?.value as string} />
      {loading && <Loader />}
    </View>
  );
};

export default JokeScreen;
