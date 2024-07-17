import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import { Card } from 'react-native-paper';
import RootNavigation from './Navigation/RootNavigation';
import { Provider } from 'react-redux';
import Store from './Redux/Store';
export default function App() {
  return (
    <>
      <Provider store={Store}>
        <RootNavigation />
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  
});
