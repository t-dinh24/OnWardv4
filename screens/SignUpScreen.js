import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  PlatformColor,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import { auth } from "../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/core";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.reset({
          index: 0,
          routes: [{ name: "HomeNavigator" }],
        });
      }
    });
    return unsubscribe;
  }, []);

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            style={styles.input}
          />
          <View style={styles.buttonWrapper}>
          <TouchableOpacity onPress={handleSignUp} style={styles.button}>
            <Text style={styles.next}>Continue</Text>
          </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121",
    flexDirection: "column",
    alignItems: 'center',
  },
  inputWrapper: {
    flex: 1,
    position: "absolute",
    height: "100%",
    width: "100%",
    top: 120,
    paddingHorizontal: 30,
  },
  label: {
    paddingLeft: 30,
    color: "#FFF",
    fontSize: 20,
    marginTop: 10,
  },
  input: {
    backgroundColor: "#FFF",
    height: 47,
    borderRadius: 30,
    marginTop: 5,
    paddingLeft: 26,
    fontSize: 18,
  },
  buttonWrapper: {
    alignItems: 'center',
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "30%",
    top: 50,
    backgroundColor: "#212121",
    borderColor: "#FFF",
    borderWidth: 2,
    borderRadius: 30,
    marginTop: 20,
    height: 35,
  },
  next: {
    color: "#FFF",
    fontSize: 20,
  },
});

export default SignUpScreen;
