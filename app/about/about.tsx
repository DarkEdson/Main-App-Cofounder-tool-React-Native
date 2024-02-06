import React from "react";
import { View,  Image, TouchableOpacity } from "react-native";
import globalStyles from "../styles/globalStyle";
import { Button, Text, XGroup } from 'tamagui'

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
      <Text color="skyblue" fontSize={35} fontWeight={"bold"}>Welcome</Text>

      <Image
        source={{
          uri: "https://i.pinimg.com/736x/f7/20/fc/f720fc7a7037f912d18c01d525bc046d.jpg",
        }}
        style={globalStyles.roundedImage}
      />
      <Button size="$5" width="92%" fontSize={20} backgroundColor="$purple8Dark" onPress={handleSignInPress}>Sign In</Button>

      <XGroup>
        <XGroup.Item>
        <Text color="black" fontSize={16} marginTop="$1.5">
        Don't have an account?{" "}
      </Text>
        </XGroup.Item>

        <XGroup.Item>
        <Button width="25%" size="$2" fontSize={16} color="$purple8Dark" chromeless onPress={handleRegisterPress}>
        Register
          </Button>
        </XGroup.Item>
      </XGroup>
      
      
    </View>
  );
}
