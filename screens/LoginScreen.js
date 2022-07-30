import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
} from 'react-native';

import {auth} from '../firebase-config';
import {useNavigation} from '@react-navigation/core';
import {signInWithEmailAndPassword} from 'firebase/auth';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace('HomeNavigator');
      }
    });
    return unsubscribe;
  }, []);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>OnWard</Text>
      <KeyboardAvoidingView behavior={'padding'} style={styles.inputWrapper}>
        <TextInput
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={'#FFF'}
        />
        <TextInput
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={'#FFF'}
        />
        <TouchableOpacity onPress={handleLogin} style={styles.signInButton}>
          <Text style={styles.text}>Sign in</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      <View style={styles.signUpWrapper}>
        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.signUpText}>Continue with Google</Text>
          <Image
            source={{uri: 'https://blog.hubspot.com/hubfs/image8-2.jpg'}}
            style={styles.imageCrop}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignUp', {name: 'signUpScreen'})}
          style={styles.signUpButton}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mobileNumberButton}>
          <Text style={styles.text}>Use Mobile Number</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    alignItems: 'center',
    paddingHorizontal: 30,
  },

  logoText: {
    position: 'absolute',
    color: '#55FF66',
    top: 188,
    fontFamily: 'Futura',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 64,
  },

  inputWrapper: {
    position: 'absolute',
    top: 350,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },

  input: {
    width: '100%',
    backgroundColor: '#212121',
    borderColor: '#FFF',
    borderRadius: 30,
    borderWidth: 2,
    height: 47,
    paddingLeft: 26,
    marginTop: 20,
    color: '#FFF',
    fontSize: 18,
  },

  signInButton: {
    alignItems: 'center',
    marginTop: 20,
    width: '20%',
  },

  signUpWrapper: {
    position: 'absolute',
    bottom: 130,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },

  signUpButton: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    marginTop: 20,
    height: 47,
    borderRadius: 4,
  },

  mobileNumberButton: {
    alignItems: 'center',
    width: '50%',
    marginTop: 20,
  },

  signUpText: {
    fontWeight: 'bold',
    fontSize: 18,
  },

  imageCrop: {
    margin: 10,
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },

  text: {
    color: '#FFF',
    fontSize: 20,
  },
});

export default LoginScreen;
