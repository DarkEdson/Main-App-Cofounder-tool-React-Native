import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import CustomButton from "./customButton";
import CustomIconButton from "./customIconButton";

interface CardProps {
  data: {
    image: string;
    titleText: string;
    descriptionText: string;
    count: string;
    ideas: string;
    Skills: string;
    SkillsWanted: string;
    text: string;
    button1Text: string;
    button2Text: string;
  };
  onPressButton1: () => void;
  onPressButton2: () => void;
  onCardPress: () => void;
}

const CardComponent: React.FC<CardProps> = ({ data, onPressButton1, onPressButton2, onCardPress }) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onCardPress}>
      <View style={styles.headerView}>
        <View style={styles.ImageContainer}>
        <Image source={{ uri: data.image }} style={styles.cardImage} />
        </View>
        <Text style={styles.cardTitleText}>{data.titleText}</Text>
      </View>
      <View style={styles.separator}></View>
      <Text style={styles.cardSubtitleText}>Short Intro: <Text style={styles.cardText}>{data.descriptionText}</Text>
      </Text>
      <Text style={styles.cardSubtitleText}>Has Startups: <Text style={styles.cardText}>{data.count}</Text>
      </Text>
      <Text style={styles.cardSubtitleText}>Has Idea: <Text style={styles.cardText}>{data.ideas}</Text>
      </Text>
      <Text style={styles.cardSubtitleText}>Skills: <Text style={styles.cardText}>{data.Skills}</Text>
      </Text>
      <Text style={styles.cardSubtitleText}>Wanted Skills: <Text style={styles.cardText}>{data.SkillsWanted}</Text>
      </Text>
      <View style={styles.buttonsView}>
              <CustomIconButton text1="Send Message" iconName="logo-whatsapp" onPress={onPressButton1}  styles={buttonStyle} />
              <CustomButton text1="Ignore" onPress={onPressButton2}  styles={buttonStyle2} />
              </View>
    </TouchableOpacity>
  );
};

const buttonStyle = StyleSheet.create({
    container: {backgroundColor:'#148d7c', borderColor: 'black', borderRadius: 25, borderWidth: 1, paddingHorizontal: 10, marginTop:5, borderBottomWidth:2.5, borderRightWidth:2.5}
})
const buttonStyle2 = StyleSheet.create({
  container: {backgroundColor:'#a285f3', borderColor: 'black', borderRadius: 25, borderWidth: 1, paddingHorizontal: 20, marginTop:5, borderBottomWidth:2.5, borderRightWidth:2.5}
})

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#465a65",
    borderRadius: 20,
    overflow: 'visible',
    padding: 10,
    marginHorizontal: 10,
  },
  buttonsView:{
    marginTop:10,
    flexDirection:'row',
    width:'100%',
    justifyContent: "space-between",
    
  },
  headerView:{
    alignContent:'center',
    alignItems:'center',
    justifyContent:'center',
  },
  separator: {
    width:'113%',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginTop: 16, 
    marginBottom:10,
  },
  cardImage: {
    width: 75,
    height: 75,
    borderRadius: 50,
    
  },
  ImageContainer:{
    alignContent:'center',
    alignItems:'center',
    justifyContent:'center',
    width:85,
    height: 85,
    backgroundColor: 'white',
    borderRadius: 50,
    marginTop: '-20%',
    marginBottom: 5,
  },
  cardTitleText: {
    fontSize: 20,
    color:'white',
    fontWeight:'bold',
  },
  cardSubtitleText: {
    fontSize: 14,
    color:'white',
    fontWeight:'bold',
  },
  cardText: {
    fontSize: 16,
    fontWeight:'300',
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#3498db",
    padding: 16,
    borderRadius: 5,
    marginTop: 5,
  },
});

export default CardComponent;
