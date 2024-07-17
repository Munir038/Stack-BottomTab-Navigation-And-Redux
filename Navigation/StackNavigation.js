import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import Feed from '../Screens/Feed';
import Notifiction from '../Screens/Notification';
import Profile from '../Screens/Profile';
import Main from '../Screens/Main';
const StackNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="Notification" component={Notifiction} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
