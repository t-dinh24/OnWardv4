import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';

import {auth} from '../firebase-config';
import {useNavigation} from '@react-navigation/core';

export function DrawerContent(props) {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace('Login');
      })
      .catch(error => alert(error.message));
  };
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={{marginTop: 15, alignItems: 'center'}}>
            <View style={styles.profilePic}>
              <Avatar.Image source={require('../assets/images/profile.jpeg')} />
            </View>
            <View style={{marginLeft: 9, marginTop: 15}}>
              <Title style={styles.title}> {auth.currentUser?.email}</Title>
            </View>
          </View>
          <Drawer.Section style={{flex: 1, marginTop: 15}}>
            <DrawerItem
              label={() => <Text style={{color: '#fff'}}>Home</Text>}
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
              label={() => <Text style={{color: '#fff'}}>My Car</Text>}
              onPress={() => {
                props.navigation.navigate('My Car');
              }}
            />
            <DrawerItem
              label={() => <Text style={{color: '#fff'}}>Address</Text>}
              onPress={() => {
                props.navigation.navigate('Address');
              }}
            />
            <DrawerItem
              label={() => <Text style={{color: '#fff'}}>Notifications</Text>}
              onPress={() => {
                props.navigation.navigate('Notifications');
              }}
            />
            <DrawerItem
              label={() => <Text style={{color: '#fff'}}>Fuel History</Text>}
              onPress={() => {
                props.navigation.navigate('Fuel History');
              }}
            />
            <DrawerItem
              label={() => <Text style={{color: '#fff'}}>Payment</Text>}
              onPress={() => {
                props.navigation.navigate('Payment');
              }}
            />
            <DrawerItem
              label={() => <Text style={{color: '#fff'}}>Gift Cards</Text>}
              onPress={() => {
                props.navigation.navigate('Gift Cards');
              }}
            />
            <DrawerItem
              label={() => <Text style={{color: '#fff'}}>Rewards</Text>}
              onPress={() => {
                props.navigation.navigate('Rewards');
              }}
            />
            <DrawerItem
              label={() => <Text style={{color: '#fff'}}>Help</Text>}
              onPress={() => {
                props.navigation.navigate('Help');
              }}
            />
            <DrawerItem
              label={() => <Text style={{color: '#fff'}}>Settings</Text>}
              onPress={() => {
                props.navigation.navigate('Settings');
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          label={() => <Text style={{color: '#fff'}}>Log Out</Text>}
          onPress={handleSignOut}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
  },
  title: {
    color: '#FFF',
  },
  bottomDrawerSection: {
    bottom: 20,
  },
  icon: {
    tintColor: 'gree',
  },
});
