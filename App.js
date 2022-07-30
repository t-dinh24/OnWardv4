import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';

import DrawerNavigator from './routes/DrawerNavigator';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options = { {headerShown: true }}/>
        <Stack.Screen name="SignUp" component={SignUpScreen} options = { {headerShown: true, headerTransparent: true, headerTintColor: '#FFF' }}/>
        <Stack.Screen name="HomeNavigator" component={DrawerNavigator} options = {{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;