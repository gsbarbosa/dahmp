import React, {Component} from 'react';
import {createDrawerNavigator } from '@react-navigation/drawer';
import Login from './screens/autenticacao';
import {View,Text} from 'react-native';

const Drawer = createDrawerNavigator();

function LoginScreen({navigation}) {
  return <Login nav={navigation} />;
}

export default class DrawerScreen extends Component {
  render() {
    return (
      <Text>teste</Text>
      // <Drawer.Navigator backBehavior={"history"}  drawerPosition={"left"} drawerType={"slide"} overlayColor={'rgba(0, 0, 0, 0.7)'} 
      //   screenOptions={{headerStyle:{ borderBottomWidth: 1 } }} >
      //   <Drawer.Screen name="Login" component={LoginScreen} options={{headerShown: false, drawerPosition: 'left'}}/>
      // </Drawer.Navigator>
    )
  }
}
