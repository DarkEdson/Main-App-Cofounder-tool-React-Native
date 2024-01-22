import React, { useState } from 'react';
import { TextInput, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface TextBoxProps {
  title?: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  isPassword?: boolean;
}

const TextBox: React.FC<TextBoxProps> = ({ title, placeholder, onChangeText, isPassword  }) => {
  const [text, setText] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleTextChange = (newText: string) => {
    setText(newText);
    onChangeText(newText);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={text}
        onChangeText={handleTextChange}
        secureTextEntry={isPassword && !showPassword}
      />
      {isPassword && (
          <TouchableOpacity style={styles.eyeIcon} onPress={toggleShowPassword}>
            <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color="black" />
          </TouchableOpacity>
        )}
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    width: '95%'
  },
  title: {
    fontSize: 16,
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'dimgrey',
    borderRadius: 9,
    backgroundColor: 'lightgray',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  eyeIcon: {
    padding: 10,
  },
});

export default TextBox;