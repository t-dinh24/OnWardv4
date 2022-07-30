import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContent} from '../assets/DrawerContent';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MyCarScreen from '../screens/MyCarScreen';
import AddressScreen from '../screens/AddressScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import FuelHistoryScreen from '../screens/FuelHistoryScreen';
import PaymentScreen from '../screens/PaymentScreen';
import GiftCardScreen from '../screens/GiftCardScreen';
import RewardsScreen from '../screens/RewardsScreen';
import HelpScreen from '../screens/HelpScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

function RouteNavigator() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: true,
          headerTransparent: true,
          title: false,
          headerTintColor: '#FFF',
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: true,
          headerTransparent: true,
          title: false,
          headerTintColor: '#FFF',
        }}
      />
      <Drawer.Screen
        name="My Car"
        component={MyCarScreen}
        options={{
          headerShown: true,
          headerTransparent: true,
          title: false,
          headerTintColor: '#FFF',
        }}
      />
      <Drawer.Screen
        name="Address"
        component={AddressScreen}
        options={{
          headerShown: true,
          headerTransparent: true,
          title: false,
          headerTintColor: '#FFF',
        }}
      />
      <Drawer.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          headerShown: true,
          headerTransparent: true,
          title: false,
          headerTintColor: '#FFF',
        }}
      />
      <Drawer.Screen
        name="Fuel History"
        component={FuelHistoryScreen}
        options={{
          headerShown: true,
          headerTransparent: true,
          title: false,
          headerTintColor: '#FFF',
        }}
      />
      <Drawer.Screen
        name="Payment"
        component={PaymentScreen}
        options={{
          headerShown: true,
          headerTransparent: true,
          title: false,
          headerTintColor: '#FFF',
        }}
      />
      <Drawer.Screen
        name="Gift Cards"
        component={GiftCardScreen}
        options={{
          headerShown: true,
          headerTransparent: true,
          title: false,
          headerTintColor: '#FFF',
        }}
      />
      <Drawer.Screen
        name="Rewards"
        component={RewardsScreen}
        options={{
          headerShown: true,
          headerTransparent: true,
          title: false,
          headerTintColor: '#FFF',
        }}
      />
      <Drawer.Screen
        name="Help"
        component={HelpScreen}
        options={{
          headerShown: true,
          headerTransparent: true,
          title: false,
          headerTintColor: '#FFF',
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: true,
          headerTransparent: true,
          title: false,
          headerTintColor: '#FFF',
        }}
      />
    </Drawer.Navigator>
  );
}

export default RouteNavigator;
