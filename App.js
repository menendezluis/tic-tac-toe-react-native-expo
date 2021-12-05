import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Board from './components/board';
import Grid from './components/grid';
export default function App() {
  
  
  return (
    <View >
     <Board>
     <Grid />
     </Board>
      <StatusBar style="auto" />
    </View>
  );
}


