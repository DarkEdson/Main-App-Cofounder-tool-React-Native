import React, { useState } from "react";
import {
  View,
  
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform ,
  Alert,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TextBox from "../components/textBox";
import { supabase } from "../lib/supabase";
import globalStyles from "../styles/globalStyle";
import { useAppDispatch } from "../store/hooks";
import { loggedIn } from "../store/reducer";
import { sessionAdd } from "../store/sessionReducer";
import {Text,Button, XGroup } from 'tamagui'
import { login } from "../utils/apis";


export default function SignIn({ navigation }: any) {
  const [textEmail, setTextEmail] = useState("");
  const [textPassword, setTextPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const handleTextEmail = (newText: string) => {
    setTextEmail(newText);
  };
  const handleTextPassword = (newText: string) => {
    setTextPassword(newText);
  };
  async function signInWithEmail() {
    console.log("signin");
    setLoading(true);
    // const {
    //   data: { session },
    //   error,
    // } = await supabase.auth.signInWithPassword({
    //   email: textEmail,
    //   password: textPassword,
    // });

    try {
      const response = await login(textEmail, textPassword);
      console.log(response);
      
      dispatch(loggedIn());
      dispatch(sessionAdd(response.user));
      navigation.navigate("HomeTabs");
      setLoading(false);
    } catch (error) {
      if (error) Alert.alert('Error' +error.toString());
      console.error(error);
    }

  }
  const handleRegisterPress = () => {
    console.log("Navigate to Register screen");
    navigation.navigate("Register");
  };
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={globalStyles.container}
    >
      {loading ? (
        <ActivityIndicator size="large" color="#330066" />
      ) : (
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
            <Text color="black" style={globalStyles.headerText2}>Let's Sign You In</Text>
            <Text color="black" style={globalStyles.partialText}>Welcome Back.</Text>
            <Text color="black" style={globalStyles.partialText}>You've been missed!</Text>
          </View>

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
          <Button size="$5" width="92%" fontSize={20}  backgroundColor="$purple8Dark" onPress={signInWithEmail} marginTop="$12">Sign In</Button>

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
          
          </>
          
      )}
    </KeyboardAvoidingView>
  );
}
