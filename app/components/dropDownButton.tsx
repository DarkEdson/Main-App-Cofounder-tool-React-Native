import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, StyleProp, ViewStyle, TextStyle } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';

type DropdownOptions = {
  value: string;
  text: string;
};

type DropdownComponentProps = {
    title: string;
    options: DropdownOptions[];
    value: DropdownOptions;
    onChange: (option: DropdownOptions) => void;
    styles?: {
      container?: StyleProp<ViewStyle>;
      title?: StyleProp<TextStyle>;
      dropdown?: StyleProp<ViewStyle>;
    };
  };

const DropdownComponent: React.FC<DropdownComponentProps> = ({ title, options, value, onChange, styles: customStyles, }) => {
  const [selectedOption, setSelectedOption] = useState(value);

  useEffect(() => {
    setSelectedOption(value);
  }, [value]);

  return (
    <View style={[styles.container, customStyles?.container]}>
      <Text style={[styles.title, customStyles?.title]}>{title}</Text>
      <Dropdown
              style={[styles.dropdown, customStyles?.dropdown]}
              value={selectedOption}
              data={options}
              onChange={onChange } 
              labelField={"text"} 
              valueField={"value"}       
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 19.5
  },
  dropdown: {
    width: '90%',
  },
});

export default DropdownComponent;