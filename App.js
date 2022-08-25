import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Home from './screens/home.js';
import Add from './screens/add.js';
import Update from './screens/update.js';
import Retrieve from './screens/retrieve.js';

// import Routing from './routes/routeMap.js';
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='home'
          component={Home}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name='add' component={Add} />
        <Stack.Screen name='update' component={Update} />
        <Stack.Screen name='retrieve' component={Retrieve} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F45678',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
