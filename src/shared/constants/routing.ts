import HomeScreen from '../../screens/Home';
import JokeScreen from '../../screens/Joke';
import {RoutingItem} from '../models';

export enum RouteName {
  HOME = 'Home',
  JOKE = 'Joke',
}

export const ROUTES: RoutingItem[] = [
  {name: RouteName.HOME, screen: HomeScreen},
  {name: RouteName.JOKE, screen: JokeScreen},
];
