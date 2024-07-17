import { Text, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateScreenCount } from '../Redux/Actions';
const Feed = (props) => {
  const count = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  return (
    <>
      <Text>Screen: {count?.count}</Text>
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <Text style={{ color: 'grey', fontWeight: '600', fontSize: 50 }}>
          Feed
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: 'green',
            padding: 6,
            margin: 4,
            borderRadius: 4,
          }}
          onPress={() => {
            props.navigation.navigate('Notification');
            dispatch(updateScreenCount(3));
          }}>
          <Text style={{ color: 'lightgrey', fontWeight: '600' }}>
            Go To Notification
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Feed;
