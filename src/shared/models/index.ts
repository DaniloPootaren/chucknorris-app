import {FunctionComponent} from 'react';

export enum Category {
  'animal',
  'career',
  'celebrity',
  'dev',
  'explicit',
  'fashion',
  'food',
  'history',
  'money',
  'movie',
  'music',
  'political',
  'religion',
  'science',
  'sport',
  'travel',
}

export interface RoutingItem {
  name: string;
  screen: FunctionComponent;
}

export interface Joke {
  categories: Category[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
}
