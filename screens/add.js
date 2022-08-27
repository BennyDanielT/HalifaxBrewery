import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { province } from '../geo/province.js';
import { Text } from '@rneui/themed';
import {
  StyleSheet,
  // Text,
  View,
  Image,
  Button,
  ScrollView,
  TextInput,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
export default Add = ({ navigation }) => {
  // const [products, setproducts] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(province);
  const [region, onChangeRegion] = React.useState('');
  const [store, onChangeStore] = React.useState('');
  const [brand, onChangeBrand] = React.useState('');
  const [product, onChangeProduct] = React.useState('');
  const [facings, onChangeFacings] = React.useState('');

  // console.log(province);
  const goForFetch = () => {
    // console.log(
    //   value +
    //     ' ' +
    //     region +
    //     ' ' +
    //     store +
    //     ' ' +
    //     brand +
    //     ' ' +
    //     product +
    //     ' ' +
    //     facings,
    // );
    fetch('https://atlanticbreweries.herokuapp.com/add-data', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        province: value, //value
        region: region, //region
        store: store, //store
        brand: brand, //brand
        product: product, //product
        facings: facings, //facings
        logDate: new Date().toUTCString(),
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log('getting data from fetch', responseJson);

        console.log(responseJson.message);
      })
      .catch((error) => console.log(error));
  };

  return (
    <ScrollView>
      <View style={{ alignItems: 'center' }}>
        <Image
          source={{
            uri: 'http://www.sd43.bc.ca/school/gleneagle/StaffInfo/Dept%20Icons/all-icons/add_to_shopping_cart.png',
          }}
          style={{ width: 100, height: 100 }}
        />
        <Text> {'\n'}</Text>
      </View>

      <SafeAreaView>
        <DropDownPicker
          placeholder='Select a Province'
          listMode='SCROLLVIEW'
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholderStyle={{
            color: 'black',
            fontWeight: 'bold',
          }}
        />
      </SafeAreaView>

      <StatusBar style='auto' />

      <Text> {'\n'}</Text>

      <Text> {'\n'}</Text>
      <Text h3>Region</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeRegion}
        value={region}
      />
      <Text h3>Store</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeStore}
        value={store}
      />
      <Text h3>Brand</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeBrand}
        value={brand}
      />
      <Text h3>Product</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeProduct}
        value={product}
      />
      <Text h3>Facings</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeFacings}
        value={facings}
      />
      <Button title={'Add a New Product'} onPress={goForFetch} color='blue' />
      <Text> {'\n'}</Text>

      <Button
        title='Go to Update Page'
        onPress={() => navigation.navigate('update', { name: 'Danny' })}
        style={{ width: 50, height: 50 }}
      />
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
