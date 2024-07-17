import { Text, View, TouchableOpacity } from 'react-native';

const Main = (props) => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Text style={{ color: 'grey', fontWeight: '600', fontSize: 50 }}>
        Main
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          padding: 6,
          margin: 4,
          borderRadius: 4,
        }}
        onPress={() => {
          props.navigation.navigate('Home');
        }}>
        <Text style={{ color: 'lightgrey', fontWeight: '600' }}>
          Go To Home
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Main;
