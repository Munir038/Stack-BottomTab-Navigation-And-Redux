import { Text, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateScreenCount } from '../Redux/Actions';
const Home = (props) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.reducer);
  return (
    <>
      <Text>Screen: {count?.count}</Text>
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <Text style={{ color: 'grey', fontWeight: '600', fontSize: 50 }}>
          Home
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: 'green',
            padding: 6,
            margin: 4,
            borderRadius: 4,
          }}
          onPress={() => {
            props.navigation.navigate('Feed');
            dispatch(updateScreenCount(2));
          }}>
          <Text style={{ color: 'lightgrey', fontWeight: '600' }}>
            Go To Feed
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Home;
