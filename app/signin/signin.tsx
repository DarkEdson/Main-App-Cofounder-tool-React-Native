import React, { useState } from "react";
import {
  View,
  Text,
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
    const {
      data: { session },
      error,
    } = await supabase.auth.signInWithPassword({
      email: textEmail,
      password: textPassword,
    });

    if (error) {
      Alert.alert(error.message);
    }
    console.log("pase IF", error, session);
    if (error == null) {
      dispatch(loggedIn());
      dispatch(sessionAdd(session));
      navigation.navigate("HomeTabs");
    }
    setLoading(false);
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
            <Text style={globalStyles.headerText2}>Let's Sign You In</Text>
            <Text style={globalStyles.partialText}>Welcome Back.</Text>
            <Text style={globalStyles.partialText}>You've been missed!</Text>
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

          <TouchableOpacity
            onPress={signInWithEmail}
            style={globalStyles.roundedButton2}
          >
            <Text style={globalStyles.buttonText}>Sign In</Text>
          </TouchableOpacity>

          <Text style={globalStyles.footerText}>
            Don't have an account?{" "}
            <TouchableOpacity onPress={handleRegisterPress}>
              <Text style={globalStyles.registerLink}>Register</Text>
            </TouchableOpacity>
          </Text>
          </>
          
      )}
    </KeyboardAvoidingView>
  );
}
