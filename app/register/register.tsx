import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform ,
  ActivityIndicator,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TextBox from "../components/textBox";
import { supabase } from "../lib/supabase";
import globalStyles from "../styles/globalStyle";
import {Button } from 'tamagui'
import { register } from "../utils/apis";

export default function Register({ navigation }: any) {
  const [textName, setTextName] = useState("");
  const [textEmail, setTextEmail] = useState("");
  const [textPassword, setTextPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleTextName = (newText: string) => {
    setTextName(newText);
  };
  const handleTextEmail = (newText: string) => {
    setTextEmail(newText);
  };
  const handleTextPassword = (newText: string) => {
    setTextPassword(newText);
  };
  const handleRegisterPress = () => {
    navigation.navigate("SignIn");
  };
  const handleGoBack = () => {
    navigation.goBack();
  };

  async function signUpWithEmail() {
    setLoading(true);
    // const {
    //   data: { session },
    //   error,
    // } = await supabase.auth.signUp({
    //   email: textEmail,
    //   password: textPassword,
    //   options: {
    //     data: {
    //       displayName: textName,
    //     },
    //   },
    // });
    try {
      const response = await register(textName, textEmail, textPassword);
      console.log(response);
      
      if (response.user)
        Alert.alert("Please check your inbox for email verification!");
      if (response.user  && response.user !== null) navigation.navigate("SignIn");
      setLoading(false);
    } catch (error) {
      if (error) Alert.alert('Error' +error.toString());
      console.error(error);
    }
   
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={globalStyles.container}
    >
      {loading ? <ActivityIndicator size="large" color="#330066" /> :
      <>
      <View style={globalStyles.buttonContainer}>
        <TouchableOpacity
          onPress={handleGoBack}
          style={globalStyles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={globalStyles.textContainer}>
        <Text style={globalStyles.headerText2}>Let's Make an</Text>
        <Text style={globalStyles.headerText2}>Account for you.</Text>
      </View>

      <TextBox
        title="Name:"
        placeholder="Your Name"
        onChangeText={handleTextName}
      />
      <TextBox
        title="Email:"
        placeholder="Your Email"
        onChangeText={handleTextEmail}
      />
      <TextBox
        title="Password:"
        placeholder="password"
        onChangeText={handleTextPassword}
        isPassword
      />

      <Button size="$5" width="92%" fontSize={20}  backgroundColor="$purple8Dark" onPress={signUpWithEmail} marginTop="$12">Register</Button>

      <Text style={globalStyles.footerText}>
        Already have an account?{" "}
        <TouchableOpacity onPress={handleRegisterPress}>
          <Text style={globalStyles.registerLink}>Login</Text>
        </TouchableOpacity>
      </Text>
      </>
      }
    </KeyboardAvoidingView>
  );
}
