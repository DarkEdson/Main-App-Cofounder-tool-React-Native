import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import globalStyles from "../styles/globalStyle";
import { Button } from 'tamagui'

export default function About({ navigation }: any) {
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
      <Button size="$5" width="92%" fontSize={20} backgroundColor="$purple8Dark" onPress={handleSignInPress}>Sign In</Button>

      <Text style={globalStyles.footerText}>
        Don't have an account?{" "}
        <TouchableOpacity onPress={handleRegisterPress}>
          <Text style={globalStyles.registerLink}>Register</Text>
        </TouchableOpacity>
      </Text>
      
    </View>
  );
}
