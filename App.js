import React from 'react';
import { StyleSheet, Text, View, Button,TextInput } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
     
      <View style={styles.style1}>
      <Text style={{ fontSize: 10 }}>USER</Text>
      <TextInput placeholder='user' style={styles.input} />
      <Text style={{ fontSize: 10 }}>Pass</Text>
      <TextInput placeholder='Password' style={styles.input} />
      </View>
      

      <View style={styles.style2}>
      <Button title="Login" onPress={() => {}} />
      <Button title="Đăng Ký" onPress={() => {}} />
      </View>
      <View style={styles.style3} ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontSize:150,
    
    
  },
  style1: {
    width: 1200, 
    height: 160,
    backgroundColor: 'red', 
  },
  style2: {
    width: 1200, 
    height: 70, 
    backgroundColor: 'green', 
  },
  style3: {
    width: 1200, 
    height: 200, 
    backgroundColor: 'blue',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    width: '100%',
    padding: 8,
    marginTop: 8,
  },
  
});
