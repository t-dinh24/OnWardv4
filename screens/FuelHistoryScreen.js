import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {auth} from '../firebase-config';

const FuelHistoryScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.logoText}>Fuel History Screen</Text>
      </View>
    </ScrollView>
  );
};

export default FuelHistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
  },
  contentContainer: {
    alignItems: 'center',

  },
  logoText: {
    color: '#fff',
    top: 188,
  },
});
