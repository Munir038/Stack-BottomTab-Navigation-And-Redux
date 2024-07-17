import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feed from '../Screens/Feed';
import Notification from '../Screens/Notification';
import Profile from '../Screens/Profile';
import Stack from './StackNavigation';
const BottomTabNavigation = () => {
  const BottomTab = createBottomTabNavigator();
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Feed') {
            iconName = 'format-align-justify';
          } else if (route.name === 'Notification') {
            iconName = 'bell';
          } else if (route.name === 'Profile') {
            iconName = 'account';
          }
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}>
      <BottomTab.Screen name="Home" component={Stack} />
      <BottomTab.Screen name="Feed" component={Feed} />
      <BottomTab.Screen name="Notification" component={Notification} />
      <BottomTab.Screen name="Profile" component={Profile} />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigation;
