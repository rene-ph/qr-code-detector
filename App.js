import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import  Scanner  from './components/Scanner'

export default function App() {

  return (
    <View style={styles.container}>
      <Text>QR Detector</Text>
      <Scanner/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  barcodebox: {
    alignItems : 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: 'tomato'
  },
  mainText:  {
    fontSize: 16,
    margin: 20,
  }
});
