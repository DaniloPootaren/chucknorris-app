import HomeScreen from '../../screens/Home';
import {RoutingItem} from '../models';

export enum RouteName {
  HOME = 'Home',
}

export const ROUTES: RoutingItem[] = [
  {name: RouteName.HOME, screen: HomeScreen},
];
