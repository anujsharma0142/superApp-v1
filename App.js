import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Home from './src/components/Home';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to SuperApp</Text>
      
      <View style={styles.centerContainer}>
        <Home />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop:30,
    color: 'orange',
    textDecorationLine: 'underline'
  },
  centerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
