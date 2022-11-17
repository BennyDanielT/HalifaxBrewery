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

export default Retrieve = ({ navigation }) => {
  const [products, setproducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const goForFetch = () => {
    fetch('https://atlanticbreweries.herokuapp.com/retrieve-data')
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log('getting data from fetch', responseJson);
        setproducts(responseJson.inventoryData);
        setIsLoading(false);
        console.log(products[0]);
      })
      .catch((error) => console.log(error));
  };
  return (
    <ScrollView>
      <View style={{ alignItems: 'center', flex: 1 }}>
        {/* <Text>Some more text</Text> */}
        <Image
          source={{
            uri: 'https://banner2.cleanpng.com/20180309/ajq/kisspng-beer-champagne-wine-alcoholic-drink-drinking-man-5aa29afd1db550.3834319415206059491217.jpg',
          }}
          style={{ width: 200, height: 200 }}
        />
        <Text> {'\n'}</Text>
        {isLoading && (
          <View style={styles.loader}>
            <ActivityIndicator size='large' color='#0c9' />
          </View>
        )}
        {isLoading && (
          <Text>Data is being retrieved, please wait!</Text>
        )}
      </View>
      <View>
        {products.map((prod, index) => (
          <View key={prod._id}>
            <Text> {'\n'}</Text>
            <Text>{prod.brand}</Text>
            <Text>{prod.facings}</Text>
            <Text>{prod.logDate}</Text>
            <Text>{prod.product}</Text>
            <Text>{prod.province}</Text>
            <Text>{prod.region}</Text>
            <Text>{prod.store}</Text>
          </View>
        ))}
      </View>
      {/* <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue='You can type in me'
      /> */}
      <Text> {'\n'}</Text>
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
