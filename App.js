import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View,
  SafeAreaView,
  ScrollView, 
} from 'react-native';

// DEPENDENCIAS
import Boton from './src/componentes/boton';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.titulo}>Citas</Text>
        <StatusBar style="auto" />
      </View>
      <Boton 
        text='Nueva Cita'
        btnStyle={''}
        textStyle={''}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#99a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 50,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: "#f08"
  },
  text: {

  },
});
