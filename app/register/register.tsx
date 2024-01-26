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
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: textEmail,
      password: textPassword,
      options: {
        data: {
          displayName: textName,
        },
      },
    });
    if (error) Alert.alert(error.message);
    if (!session)
      Alert.alert("Please check your inbox for email verification!");
    if (session == null && error == null) navigation.navigate("SignIn");
    setLoading(false);
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

      <TouchableOpacity
        onPress={signUpWithEmail}
        style={globalStyles.roundedButton2}
      >
        <Text style={globalStyles.buttonText}>Register</Text>
      </TouchableOpacity>

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
