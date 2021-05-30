import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import {createDrawerNavigator, } from '@react-navigation/drawer';
import Autenticacao from './src/screens/autenticacao';

function HomeScreen({navigation}) {
  return <Autenticacao nav={navigation} />;
}

function AutenticacaoScreen({navigation}) {
  return <Autenticacao nav={navigation} />;
}

const Drawer = createDrawerNavigator();

const App = () => (
  <NavigationContainer>
      <Drawer.Navigator backBehavior={"history"}  drawerPosition={"left"} drawerType={"slide"} overlayColor={'rgba(0, 0, 0, 0.7)'} screenOptions={{headerStyle:{ borderBottomWidth: 1 } }} >
        <Drawer.Screen name="Home" component={HomeScreen} options={{headerShown: false, drawerPosition: 'left'}}/>
        <Drawer.Screen name="Autenticacao" component={AutenticacaoScreen} options={{headerShown: false, drawerPosition: 'left'}}/>
      </Drawer.Navigator>
    </NavigationContainer>
);

export default App;
