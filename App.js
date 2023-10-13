import * as React from 'react';
import { Pressable, Button, View, Image, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Lab3b from './components/Lab3b'


const Stack = createNativeStackNavigator();

function App() {
  return (

    <View style={{flex:1}}>
      <Lab3b/>    
    </View>    
    
  );
}

export default App;
