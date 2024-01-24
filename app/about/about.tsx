import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Button } from "tamagui";
import globalStyles from "../styles/globalStyle";
import { Link, router } from "expo-router";
import { useAppDispatch } from "../store/hooks";
import { loggedIn } from "../store/reducer";

export default function About({ navigation }: any) {
  const dispatch = useAppDispatch();
  const handleSignInPress = () => {
    console.log("Navigate to Sign In screen");

    //router.push('/signin/signin')
    navigation.navigate("SignIn");
    // navigation.navigate('RegisterScreen');
  };
  const handleRegisterPress = () => {
    console.log("Navigate to Register screen");
    //router.push('/register/register')
    navigation.navigate("Register");
    // navigation.navigate('RegisterScreen');
  };
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.headerText}>Welcome</Text>

      <Image
        source={{
          uri: "https://i.pinimg.com/736x/f7/20/fc/f720fc7a7037f912d18c01d525bc046d.jpg",
        }}
        style={globalStyles.roundedImage}
      />

      <TouchableOpacity
        onPress={handleSignInPress}
        style={globalStyles.roundedButton}
      >
        <Text style={globalStyles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={globalStyles.footerText}>
        Don't have an account?{" "}
        <TouchableOpacity onPress={handleRegisterPress}>
          <Text style={globalStyles.registerLink}>Register</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
}
