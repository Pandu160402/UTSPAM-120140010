import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screen/Home';
import Film1 from './screen/Film1';
import Film2 from './screen/Film2';
import Film3 from './screen/Film3';
import Film4 from './screen/Film4';
import Profil from './screen/Profil';

const Stack = createNativeStackNavigator();

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Film1" component={Film1} options={{ headerShown: false }}/>
        <Stack.Screen name="Film2" component={Film2} options={{ headerShown: false }}/>
        <Stack.Screen name="Film3" component={Film3} options={{ headerShown: false }}/>
        <Stack.Screen name="Film4" component={Film4} options={{ headerShown: false }}/>
        <Stack.Screen name="Profil" component={Profil} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}