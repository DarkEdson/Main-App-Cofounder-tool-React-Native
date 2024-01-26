import React, { useEffect, useState, useRef  } from "react";
import { View, Text, Image, ActivityIndicator, StyleSheet, ImageBackground } from "react-native";
import Swiper from 'react-native-deck-swiper'
import CardComponent from "../../components/cardComponent";


interface CardData {
    image: string,
      titleText: string,
      descriptionText: string
      count: string,
      ideas: string,
      Skills: string,
      SkillsWanted: string,
      text: string,
      button1Text: string,
      button2Text: string,
  }
  
  interface SwiperComponentProps {
    cards: CardData[]; 
  }

const data = [
    {
      image: "https://static.toiimg.com/thumb/msid-105400431,imgsize-2133167,width-400,resizemode-4/105400431.jpg",
      titleText: "Jinadin Jidan Indur",
      descriptionText: "I'm Jidan. A self-taught developer who loves to build cool products. Been working in different startups as a software engineer for the past few years. Done too many startups and want to do more startups. Hit me up.",
      count: '0',
      ideas: 'No',
      Skills: 'Marketing, Sales, Programming.',
      SkillsWanted: 'Marketing, Sales, Coding, Programming, operation',
      text: 'Text1',
      button1Text: "Botón 1",
      button2Text: "Botón 2",
    },
    {
      image: "https://miro.medium.com/v2/resize:fit:800/1*dF2LjxlyoLGAUFQNU4M3wg.jpeg",
      titleText: "Test TEST",
      descriptionText: "Been working in different startups as a software engineer for the past few years. Done too many startups and want to do more startups. Hit me up.",
      count: '1',
      ideas: 'Yes',
      Skills: 'Marketing, Sales, Programming.',
      SkillsWanted: 'Marketing, Sales, Coding, Programming, operation',
      text: "Texto 2",
      button1Text: "Botón 1",
      button2Text: "Botón 2",
    },
    // Agrega más datos según sea necesario
  ];

  

export default function CoFoundersFindResult() {
  const [dialogVisible, setDialogVisible] = useState(false);
  const swiperRef = useRef<Swiper<CardData> | null>(null);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swipeLeft(); // Esta función avanza a la siguiente tarjeta
    }
  };

  const handleConfirm = () => {
    setDialogVisible(false);
  };

  const handleCancel = () => {
    setDialogVisible(false);
  };
  const handleFindResults = () => {
    console.log("Navigate to Sign In screen");
    //router.push("/signin/signin");
    // navigation.navigate('RegisterScreen');
  };
  const handleRegisterPress = () => {
    console.log("Navigate to Register screen");
    //router.push("/register/register");
    // navigation.navigate('RegisterScreen');
  };
  return (
    <View style={styles.container}>
        <ImageBackground
        source={require('../../../assets/people.jpg')} 
        style={styles.imageBackground}
        blurRadius={10} 
        resizeMode="cover"
      >
        
        <Swiper
        ref={swiperRef}
          cards={data}
          renderCard={(card, index) => (
            <CardComponent
              key={index}
              data={card}
              onPressButton1={() => console.log('Button 1 pressed')}
              onPressButton2={handleNext}
              onCardPress={() => console.log('Card pressed')}
            />
          )}
          infinite // keep looping cards infinitely
          cardHorizontalMargin={0}
          backgroundColor="rgba(0, 0, 0, 0)"
          stackSize={1} // number of cards shown in background
        />
       </ImageBackground>
    </View>
  );
}
const DropDownstyles = StyleSheet.create({
  container: { width: "95%", marginLeft: 30 },
  dropdown: {
    borderColor: "black",
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 5,
    marginTop: 5,
    borderBottomWidth: 2.5,
    borderRightWidth: 2.5,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerView: {
    position: "absolute",
    top: '25%',
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },

  roundedImage: {
    width: "100%",
    height: 350,
    bottom: 0,
    position: "absolute",
  },
  roundedImage2: {
    width: "40%",
    height: '22%',
    top: 0,
    position: "absolute",
  },
  roundedButton: {
    marginTop: 20,
    alignContent: "center",
    alignItems: "center",
    paddingTop: "8%",
    backgroundColor: "#330066",
    borderRadius: 10,
    width: "35%",
    height: "27%",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderWidth: 1,
  },
  buttonText: {
    alignSelf: "center",
    color: "gray",
    fontWeight: 'bold',
    fontSize: 25,
  },
});
