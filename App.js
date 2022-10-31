import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "./app/config/colors";
import HomeScreen from "./app/screens/HomeScreen";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import CustomDrawerContent from "./app/screens/CustomDrawerContent";
import CoffeeDetailsScreen from "./app/screens/CoffeeDetailsScreen";
import coffees from "./app/config/coffees";
const Drawer = createDrawerNavigator();

function MyDrawer({coffeess}) {
 
  return (
    <Drawer.Navigator
    drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: colors.dark,
        }
      }}
    >
      <Drawer.Screen name="Main" component={HomeScreen} />
      <Drawer.Screen name="DetailScreen" component={CoffeeDetailsScreen} cof={coffeess[4]}/>
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
   
     
      <NavigationContainer>
      <MyDrawer coffeess={coffees} />
      </NavigationContainer>
   
  );
};

export default App;

const styles = StyleSheet.create({});
