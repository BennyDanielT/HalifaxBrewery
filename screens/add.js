import { StatusBar } from 'expo-status-bar';
// import React, { Component } from 'react';

import { StyleSheet, Text, View, Button } from 'react-native';
export default Add = ({ navigation }) => {
  return (
    <View>
      <View style={styles.container}>
        <Text>Add Page</Text>
        <StatusBar style='auto' />
      </View>
      <Button
        title='Go to Update Page'
        onPress={() => navigation.navigate('update', { name: 'Danny' })}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#F45678',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
