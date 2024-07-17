import { Text, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateScreenCount } from '../Redux/Actions';
const Notifiction = (props) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.reducer);
  return (
    <>
      <Text>Screen: {count?.count}</Text>
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <Text style={{ color: 'grey', fontWeight: '600', fontSize: 50 }}>
          Notification
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: 'green',
            padding: 6,
            margin: 4,
            borderRadius: 4,
          }}
          onPress={() => {
            props.navigation.navigate('Profile');
            dispatch(updateScreenCount(4));
          }}>
          <Text style={{ color: 'lightgrey', fontWeight: '600' }}>
            Go To Profile
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Notifiction;
