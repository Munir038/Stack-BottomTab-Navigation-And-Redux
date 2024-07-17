import { Text, View, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
const Profile = (props) => {
  const count = useSelector((state) => state.reducer);
  return (
    <>
      <Text>Screen: {count?.count}</Text>
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <Text style={{ color: 'grey', fontWeight: '600', fontSize: 50 }}>
          Profile
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: 'green',
            padding: 6,
            margin: 4,
            borderRadius: 4,
          }}
          onPress={() => {
            props.navigation.navigate('Main');
          }}>
          <Text style={{ color: 'lightgrey', fontWeight: '600' }}>
            Go To Main
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Profile;
