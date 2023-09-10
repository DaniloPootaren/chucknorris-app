import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../shared/constants/routing';
import AppHeader from '../shared/components/AppHeader';

interface RouteProps {}

const Stack = createNativeStackNavigator();

const Routing = (_props: RouteProps) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: true, header: () => <AppHeader />}}>
        {ROUTES.map((route, index) => (
          <Stack.Screen
            key={index}
            name={route.name}
            component={route.screen}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routing;
