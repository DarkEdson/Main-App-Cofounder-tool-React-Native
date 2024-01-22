import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet , Alert} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TextBox from '../components/textBox';
import { supabase } from '../lib/supabase'

import { Link, router } from 'expo-router';


export default function Page() {
    const [textEmail, setTextEmail] = useState('');
  const [textPassword, setTextPassword] = useState('');
  const [loading, setLoading] = useState(false)
  const handleTextEmail = (newText: string) => {
    setTextEmail(newText);
  };
  const handleTextPassword = (newText: string) => {
    setTextPassword(newText);
  };
  async function signInWithEmail() {
    console.log('signin')
    setLoading(true)
    const {  data: { session },
    error, } = await supabase.auth.signInWithPassword({
      email: textEmail,
      password: textPassword,
    })

    if (error) {Alert.alert(error.message)}
    console.log('pase IF', error, session)
    if (error == null) router.push('/welcome/welcome')
    setLoading(false)
  }
  const handleSignInPress = () => {
    // Aquí debes implementar la lógica para navegar a la otra pantalla
    console.log('Navigate to Sign In screen');
    router.push('/welcome/welcome')
    // Por ejemplo, puedes usar la navegación de React Navigation
    // navigation.navigate('RegisterScreen');
  };
  const handleRegisterPress = () => {
    // Aquí debes implementar la lógica para navegar a la otra pantalla
    console.log('Navigate to Register screen');
    router.push('/register/register')
    // Por ejemplo, puedes usar la navegación de React Navigation
    // navigation.navigate('RegisterScreen');
  };
  const handleGoBack = () => {
    // Navegar hacia atrás
    router.back();
  };
  return (
    <View style={styles.container}>
        <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
        </View>
        <View  style={styles.textContainer}>
      <Text style={styles.headerText}>Let's Sign You In</Text>
      <Text style={styles.partialText}>Welcome Back.</Text>
      <Text style={styles.partialText}>You've been missed!</Text>
      </View>

      <TextBox title="Email:" placeholder="Your Email" onChangeText={handleTextEmail} />
      <TextBox title="Password:" placeholder="password" onChangeText={handleTextPassword} isPassword/>

      <TouchableOpacity onPress={signInWithEmail}  style={styles.roundedButton}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>Don't have an account? <TouchableOpacity onPress={handleRegisterPress}>
          <Text style={styles.registerLink}>Register</Text>
        </TouchableOpacity></Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  textContainer: {
    width:'95%'
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  partialText: {
    fontSize: 30,
    marginBottom: 10,
  },
  roundedImage: {
    width: '97%',
    height: 350,
    borderRadius: 25,
    marginTop: 40,
    marginBottom: 40,
  },
  roundedButton: {
    backgroundColor: 'orchid',
    borderRadius: 10,
    width: '90%',
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginTop: '30%',
    marginBottom: 10,
  },
  buttonText: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 16,
  },
  footerText: {
    fontSize: 18,
  },
  registerLink: {
    color: 'purple',
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1, // Asegura que el botón esté en la parte superior
  },
  backButton: {
    padding: 10,
    marginLeft: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: 'blue', // Color del texto del botón
  },
});