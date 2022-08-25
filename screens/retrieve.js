import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
  TextInput,
  FlatList,
  ActivityIndicator,
} from 'react-native';
// import React, { Component } from 'react';

const goForFetch = () => {
  fetch('https://atlanticbreweries.herokuapp.com/retrieve-data')
    .then((response) => response.json())
    .then((responseJson) => {
      console.log('getting data from fetch', responseJson);
    })
    .catch((error) => console.log(error));
};

export default Retrieve = ({ navigation }) => {
  return (
    <ScrollView>
      <View>
        <Text>Some more text</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue='You can type in me'
      />
      <Button title={'Click using Fetch'} onPress={goForFetch} color='green' />
      {/* {
        <FlatList
          data={dataSource}
          ItemSeparatorComponent={FlatListItemSeparator}
          renderItem={(item) => renderItem(item)}
          keyExtractor={(item) => item.id.toString()}
        />
      }
      {loading && (
        <View style={styles.loader}>
          <ActivityIndicator size='large' color='#0c9' />
          <Text>Fetching Data</Text>
        </View>
      )} */}
    </ScrollView>
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
