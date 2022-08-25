import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
// import React, { Component } from 'react';

export default Update = ({ navigation }) => {
  return (
    <View>
      <View style={styles.container}>
        <Text>Update Page</Text>
        <StatusBar style='auto' />
      </View>
      <Button
        title='Go to Retrieve Page'
        onPress={() => navigation.navigate('retrieve', { name: 'Danny' })}
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
