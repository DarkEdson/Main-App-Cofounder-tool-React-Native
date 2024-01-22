import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

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
    <View style={styles.container}>
      <Text style={styles.headerText}>Home Page</Text>

      <Image
        source={{ uri: 'https://i.pinimg.com/736x/f7/20/fc/f720fc7a7037f912d18c01d525bc046d.jpg' }}
        style={styles.roundedImage}
      />

      <TouchableOpacity  style={styles.roundedButton} >
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>This is Home <TouchableOpacity >
          <Text style={styles.registerLink}>Homes</Text>
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
  headerText: {
    fontSize: 30,
    color: 'darkturquoise',
    fontWeight: 'bold',
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
    width: '93%',
    paddingVertical: 15,
    paddingHorizontal: 30,
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
});
