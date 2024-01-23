import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet , Alert} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TextBox from '../components/textBox';
import { supabase } from '../lib/supabase'
import globalStyles from '../styles/globalStyle';

import { Link, router } from 'expo-router';


export default function Page() {
    const [textName, setTextName] = useState('');
    const [textEmail, setTextEmail] = useState('');
  const [textPassword, setTextPassword] = useState('');
  const [loading, setLoading] = useState(false)
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
    // Aquí debes implementar la lógica para navegar a la otra pantalla
    console.log('Navigate to Register screen');
    router.push('/signin/signin')
    // Por ejemplo, puedes usar la navegación de React Navigation
    // navigation.navigate('RegisterScreen');
  };
  const handleGoBack = () => {
    // Navegar hacia atrás
    router.back();
  };

  async function signUpWithEmail() {
    console.log('signUP')
    setLoading(true)
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
    })
    console.log('signUP', error, session)
    if (error) Alert.alert(error.message)
    if (!session) Alert.alert('Please check your inbox for email verification!')
    if (session == null && error == null) router.push('/signin/signin')
    setLoading(false)
  }
  return (
    <View style={globalStyles.container}>
        <View style={globalStyles.buttonContainer}>
            <TouchableOpacity onPress={handleGoBack} style={globalStyles.backButton}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
        </View>
        <View style={globalStyles.textContainer}>
      <Text style={globalStyles.headerText2}>Let's Make an</Text>
      <Text style={globalStyles.headerText2}>Account for you.</Text>
      </View>

      <TextBox title="Name:" placeholder="Your Name" onChangeText={handleTextName} />
      <TextBox title="Email:" placeholder="Your Email" onChangeText={handleTextEmail} />
      <TextBox title="Password:" placeholder="password" onChangeText={handleTextPassword} isPassword/>

      <TouchableOpacity onPress={signUpWithEmail} style={globalStyles.roundedButton2}>
        <Text style={globalStyles.buttonText}>Register</Text>
      </TouchableOpacity>

      <Text style={globalStyles.footerText}>Already have an account? <TouchableOpacity onPress={handleRegisterPress}>
          <Text style={globalStyles.registerLink}>Login</Text>
        </TouchableOpacity></Text>
    </View>
  );
}
