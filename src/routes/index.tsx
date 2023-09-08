import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../shared/constants/routing';

interface RouteProps {}

const Stack = createNativeStackNavigator();

const Routing = (_props: RouteProps) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
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
