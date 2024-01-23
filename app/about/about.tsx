import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Button } from 'tamagui'
import globalStyles from '../styles/globalStyle';
import { Link, router } from 'expo-router';


export default function Page() {
  const handleSignInPress = () => {
    // Aquí debes implementar la lógica para navegar a la otra pantalla
    console.log('Navigate to Sign In screen');
    router.push('/signin/signin')
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
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.headerText}>Welcome</Text>

      <Image
        source={{ uri: 'https://i.pinimg.com/736x/f7/20/fc/f720fc7a7037f912d18c01d525bc046d.jpg' }}
        style={globalStyles.roundedImage}
      />

      <TouchableOpacity onPress={handleSignInPress} style={globalStyles.roundedButton} >
        <Text style={globalStyles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={globalStyles.footerText}>Don't have an account? <TouchableOpacity onPress={handleRegisterPress}>
          <Text style={globalStyles.registerLink}>Register</Text>
        </TouchableOpacity></Text>
    </View>
  );
}

