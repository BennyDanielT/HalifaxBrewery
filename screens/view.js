import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import axios from 'axios';
const [profileData, setProfileData] = useState(null);

function getData() {
  axios({
    method: 'GET',
    url: '/profile',
  })
    .then((response) => {
      const res = response.data;
      setProfileData({
        profile_name: res.name,
        about_me: res.about,
      });
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    });
}

export default ViewData = ({ navigation }) => {
  return (
    <View>
      <View style={styles.container}>
        <Text>View Page</Text>
        <Text>{profileData.profile_name}</Text>
        <Text>{profileData.about_me}</Text>
        <Text>End</Text>
        <Button
          title='Get Data'
          onPress={() => {
            getData;
          }}
        />
        <StatusBar style='auto' />
      </View>
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
