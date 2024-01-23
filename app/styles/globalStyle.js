import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
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
        color: 'darkturquoise',
        fontWeight: 'bold',
        marginBottom: 10,
      },
      headerText2: {
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
        backgroundColor: '#330066',
        borderRadius: 10,
        width: '93%',
        paddingVertical: 15,
        paddingHorizontal: 30,
        marginBottom: 10,
      },
      roundedButton2: {
        backgroundColor: '#330066',
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
      containerTextBox: {
        margin: 10,
        width: '95%'
      },
      titleTextBox: {
        fontSize: 16,
        marginBottom: 5,
      },
      inputContainerTextBox: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'dimgrey',
        borderRadius: 9,
        backgroundColor: 'lightgray',
        marginBottom: 10,
      },
      inputTextBox: {
        flex: 1,
        height: 40,
        paddingHorizontal: 10,
      },
      eyeIcon: {
        padding: 10,
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

export default globalStyles;