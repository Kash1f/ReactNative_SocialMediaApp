import { DrawerActions, NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import UserScreen from "./screens/UserScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import { Drawer } from "react-native-paper";
import { EvilIcons } from '@expo/vector-icons';
import DrawerContent from "./DrawerContent";

const StackNav = () => {
  const Stack = createStackNavigator();
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        statusBarColor: "orange",
        headerStyle: {
          backgroundColor: "blue",
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        headerLeft: () => {
          return(
            <EvilIcons 
            name="navicon"
            onPress={()=>navigation.dispatch(DrawerActions.openDrawer())}
            size={30} 
            color='#ffff'/>
          )
        }
      }}
    >
      {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="User" component={UserScreen} />
    </Stack.Navigator>
  );
};

const DrawerNav = () => {
   //this will initalize the screens in the drawer navigation
  const Drawer = createDrawerNavigator();
  return(
    <Drawer.Navigator 
    drawerContent={props => <DrawerContent{...props}/>}
    screenOptions={{headerShown:false}}>
    <Drawer.Screen name="Home" component={StackNav} />
  
  </Drawer.Navigator>
  )
}

function App() {
 
  return (
    <>
      {/* navigation should be wrapped within navcontainer whether it is stack or drawer */}
      <NavigationContainer>
      <DrawerNav/>
      </NavigationContainer>

      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
