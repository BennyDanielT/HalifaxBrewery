import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
// import DropDownPicker from 'react-native-dropdown-picker';
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
          message='Product Added Successfully!'
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
      <View style={styles.formElements}>
        <SafeAreaView style={styles.dropContainer}>
          <Text h4 style={styles.label}>
            Province
          </Text>
          <Dropdown
            data={items}
            style={[styles.dropdown, Focus && { borderColor: 'blue' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            search
            maxHeight={250}
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
      </View>

      <StatusBar style='auto' />

      <Text> {'\n'}</Text>
      <View style={styles.formElements}>
        <Text h4 style={styles.label}>
          Region
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeRegion}
          value={region}
        />
      </View>

      <View style={styles.formElements}>
        <Text h4 style={styles.label}>
          Store
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeStore}
          value={store}
        />
      </View>

      <View style={styles.formElements}>
        <Text h4 style={styles.label}>
          Brand
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeBrand}
          value={brand}
        />
      </View>

      <View style={styles.formElements}>
        <Text h4 style={styles.label}>
          Product
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeProduct}
          value={product}
        />
      </View>

      <View style={styles.formElements}>
        <Text h4 style={styles.label}>
          Facings
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeFacings}
          value={facings}
        />
      </View>

      <Button
        title={'Add a New Product'}
        onPress={goForFetch}
        color='#228822d6'
      />
      <Text> {'\n'}</Text>

      {/* <Button
        title='Go to Update Page'
        onPress={() => navigation.navigate('update', { name: 'Danny' })}
        style={{ width: 50, height: 50 }}
      /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F45678',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formElements: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 2,
    // width: 250,
  },
  dropContainer: {
    flex: 1,
    width: 200,
    // marginTop: 8,
  },
  label: {
    flex: 1,
    padding: 10,
  },
  input: {
    flex: 2,
    height: 40,
    margin: 12,
    width: 250,
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
