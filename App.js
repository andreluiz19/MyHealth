import React from 'react';
import MyInput from './components/MyInput'
import Login from './screens/Login'
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
})

export default App;