import * as React from 'react';

import { Pressable, Button, View, Image, Text } from 'react-native';

function Lab3a() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 7 }}>
        <Image
          source={require('../assets/anhdo.png')}
          style={{ width: null, height: '270px' }}
          resizeMode="contain"
        />
      </View>
      <View style={{ flex: 1 }}></View>
      <View style={{ flex: 1 }}></View>
      <View style={{ flex: 1 }}></View>
      <View style={{ flex: 1, alignItems:'center' }}>
        <Pressable
          style={{
            backgroundColor: 'white',
            borderRadius: '10px',
            width: '90%',
            height: '30px',
            borderWidth: '1px',
            borderColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{ color: 'black' }}>CHỌN MÀU</Text>
        </Pressable>
      </View>
      <View style={{ flex: 1 }}></View>
      <View style={{ flex: 1, alignItems: 'center' }}></View>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Pressable
          style={{
            backgroundColor: 'red',
            borderRadius: '10px',
            width: '90%',
            height: '30px',
            borderWidth: '1px',
            borderColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{ color: 'white' }}>CHỌN MUA</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Lab3a;
