import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import UserScreen from "./screens/UserScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";

const StackNav = () => {
  const Stack = createStackNavigator();

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
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="User" component={UserScreen} />
    </Stack.Navigator>
  );
};

function App() {
  //this will initalize the screens in the drawer navigation
  const Drawer = createDrawerNavigator();

  return (
    <>
      {/* navigation should be wrapped within navcontainer whether it is stack or drawer */}
      <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="User" component={UserScreen} />
      </Drawer.Navigator>
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
