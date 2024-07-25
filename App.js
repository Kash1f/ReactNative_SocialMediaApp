import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import UserScreen from './screens/UserScreen';
import ProfileScreen from './screens/ProfileScreen';



 function App() {

  const Stack = createStackNavigator(); 

  return (
    <>
   <NavigationContainer>
    <Stack.Navigator
    initialRouteName='Home'
    screenOptions={{
      statusBarColor:'orange',
      headerStyle:{
        backgroundColor:'blue'
      },
      headerTintColor:'#fff',
      headerTitleAlign:'center'
    }}
    >
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="User" component={UserScreen}/>
     
    </Stack.Navigator>
   </NavigationContainer>

    <StatusBar style="light" />
    </>
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
