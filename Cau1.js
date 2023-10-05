import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Cau1() {
  return (
    <View style={styles.container}>
        <View style={styles.style1}></View>

        <View style={styles.style2}>
          <Button title="Primary Button 1" onPress={() => {}} />
          <Button title="Primary Button 2" onPress={() => {}} />
        </View>

        <View style={styles.style3}></View>
    </View>
  );
}