import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import UserScreen from './screens/UserScreen';
import ProfileScreen from './screens/ProfileScreen';



 function App() {

  const Stack = createStackNavigator(); 

  return (
   <NavigationContainer>
    <Stack.Navigator
    initialRouteName='Home'
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}}/>
      <Stack.Screen name="User" component={UserScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
