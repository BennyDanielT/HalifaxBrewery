import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { province } from '../geo/province.js';
import { Text } from '@rneui/themed';
import AwesomeAlert from 'react-native-awesome-alerts';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Dropdown } from 'react-native-element-dropdown';
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
  const [alert, setAlert] = React.useState(false);

  const [Focus, setFocus] = useState(false);

  // console.log(province);
  showAlert = () => {
    setAlert(true);
  };

  hideAlert = () => {
    setAlert(false);
  };

  const goForFetch = () => {
    fetch('https://atlanticbreweries.herokuapp.com/update-data', {
      method: 'PUT',
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
        showAlert();
      })
      .catch((error) => console.log(error));
  };

  return (
    <ScrollView>
      <View>
        <AwesomeAlert
          show={alert}
          titleStyle={{
            color: 'blue',
            fontSize: 20,
          }}
          showProgress={false}
          title='Hey!'
          message='Product Facings Updated Successfully!'
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={true}
          showCancelButton={false}
          showConfirmButton={true}
          cancelText='Cancel'
          confirmText='Confirm'
          confirmButtonColor='green'
          onCancelPressed={() => {
            hideAlert();
          }}
          onConfirmPressed={() => {
            hideAlert();
          }}
        />
      </View>
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
        <Dropdown
          data={items}
          style={[styles.dropdown, Focus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          search
          maxHeight={300}
          labelField='label'
          valueField='value'
          placeholder={!Focus ? 'Select Province' : '...'}
          searchPlaceholder='Search...'
          value={value}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChange={(item) => {
            setValue(item.value);
            setFocus(false);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color={Focus ? 'blue' : 'black'}
              name='Safety'
              size={20}
            />
          )}
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
      <Button
        title={'Update Quantity'}
        onPress={goForFetch}
        color='#228822d6'
        fontWeight='bold'
      />
      <Text> {'\n'}</Text>

      {/* <Button
        title='Go to Retrieve Page'
        onPress={() => navigation.navigate('retrieve', { name: 'Danny' })}
        style={{ width: 50, height: 50 }}
      /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#F45678',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexDirection: 'row',
  flexWrap: 'wrap',
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: 'white',
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  inputContainer: {
    marginTop: 10,
  },
  inputLabel: {
    fontSize: 17,
  },
  success: {
    textAlign: 'center',
    marginBottom: 10,
    padding: 10,
    color: 'white',
    borderRadius: 10,
  },
  bgSuccess: {
    backgroundColor: '#228822d6',
  },
});
