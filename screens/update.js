import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
export default Update = ({ navigation }) => {
  return (
    <View>
      <View style={styles.container}>
        <Text>Update Page</Text>
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