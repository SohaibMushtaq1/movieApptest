/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const TouchableComponent = () => {
  const handlePress = () => {
    // Perform the desired action on press, e.g., navigate to a new screen
    console.log('Button pressed!');
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>TV shows, movies, and more</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    // Customize the button's appearance here
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TouchableComponent;
