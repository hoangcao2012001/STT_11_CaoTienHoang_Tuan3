import React, { useState } from 'react';

import { Pressable, Button, View, Image, Text } from 'react-native';

function Lab3b() {
  //mặc định đỏ
  var [image, setImage] = useState(require('../assets/anhdo.png'));
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 6, backgroundColor: 'white', flexDirection: 'row' }}>
        <Image
          source={image}
          style={{ width: '200px', height: '500px' }}
          resizeMode="contain"
          
        />
        <Text style={{color:'red',fontSize:'50PX'}}>
  Puffer  {'\n'}  Jackets  {'\n'}
  {'\n'}
  <Text style={{color:'black',fontSize:'30px'}}>
    SIZE S : 45KG
    SIZE M : 70KG
    SIZE X : 90KG


  </Text>
 

</Text>




      </View>
     
        
      BẢNG MÀU

      <View
      
      
        style={{
          width: '400px',
          height: '5px',
          //ó có thể nghĩa là phần tử này sẽ chiếm 3 phần (đơn vị) của không gian trống 
          flex: 3,
          //flexDirection: 'row', cho nằm ngang
          flexDirection: 'row',
          backgroundColor: '#C4C4C4',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          
        <Pressable
          onPress={() => {
            //click đỏ
            setImage(require('../assets/anhdo.png'));
          }}
          style={{
            width: '70px',
            height: '70px',
            backgroundColor: 'red',
          }}></Pressable>
        <Pressable
          onPress={() => {
            setImage(require('../assets/anh2 den.jpg'));
          }}
          style={{
            width: '70px',
            height: '70px',
            backgroundColor: 'black',
          }}></Pressable>
        <Pressable
        onPress={() => {
            setImage(require('../assets/anh 4 tim.jpg'));
          }}
          style={{
            width: '70px',
            height: '70PX',
            backgroundColor: 'purple',
          }}></Pressable>
        <Pressable
        onPress={() => {
            setImage(require('../assets/anh3 xanh den.jpg'));
          }}
          style={{
            width: '70px',
            height: '70px',
            backgroundColor: '#000080',
          }}></Pressable>
      </View>
    </View>
  );
}

export default Lab3b;
