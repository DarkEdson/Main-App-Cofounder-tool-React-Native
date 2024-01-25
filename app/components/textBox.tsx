import React, { useState } from "react";
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import globalStyles from "../styles/globalStyle";

interface TextBoxProps {
  title?: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  isPassword?: boolean;
}

const TextBox: React.FC<TextBoxProps> = ({
  title,
  placeholder,
  onChangeText,
  isPassword,
}) => {
  const [text, setText] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleTextChange = (newText: string) => {
    setText(newText);
    onChangeText(newText);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={globalStyles.containerTextBox}>
      {title && <Text style={globalStyles.titleTextBox}>{title}</Text>}
      <View style={globalStyles.inputContainerTextBox}>
        <TextInput
          style={globalStyles.inputTextBox}
          placeholder={placeholder}
          value={text}
          onChangeText={handleTextChange}
          secureTextEntry={isPassword && !showPassword}
        />
        {isPassword && (
          <TouchableOpacity
            style={globalStyles.eyeIcon}
            onPress={toggleShowPassword}
          >
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="black"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default TextBox;
