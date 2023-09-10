import {RouteProp, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {api} from '../../api';
import Loader from '../../shared/components/Loader';
import {Joke} from '../../shared/models';
import {CenterLayout, MainLayout} from '../../shared/styles';
import Tts from 'react-native-tts';
import Logo from '../../assets/chucknorris_logo.png';
import JokeHolder from '../../shared/components/JokeHolder';
import MuteButton from '../../shared/components/MuteButton';

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
    Tts.stop();
    setLoading(true);
    try {
      const joke = await (await api.getRandomJokeByCategory(category)).data;
      setJoke(joke);
      Tts.speak(joke.value);
      console.log(joke);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={[MainLayout, CenterLayout]}>
      <View style={styles.muteButton}>
        <MuteButton
          onPlay={() => Tts.speak(joke ? joke.value : '')}
          onStop={() => Tts.stop()}
        />
      </View>
      <Image source={Logo} height={300} />
      <JokeHolder fetchJoke={fetchData} joke={joke?.value as string} />
      {loading && <Loader />}
    </View>
  );
};

const styles = StyleSheet.create({
  muteButton: {
    position: 'absolute',
    top: 40,
  },
});

export default JokeScreen;
