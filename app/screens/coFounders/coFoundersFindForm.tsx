import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import DropdownComponent from "../../components/dropDownButton";
import Dialog from "../../components/dialogBox";
import { useInterstitialAd, AdEventType, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

// const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
//   requestNonPersonalizedAdsOnly: true,
//   keywords: ['games', 'dinosaurs'],
// });

export default function CoFoundersFindForm({navigation}:any) {
  const { isLoaded, isClosed, load, show } = useInterstitialAd(adUnitId, {
    requestNonPersonalizedAdsOnly: true,
  });
  const [dialogVisible, setDialogVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log('LOAD AD?')
    
    const onFocus = () => {
      console.log("La pantalla ha obtenido el foco. Puedes activar tu lógica aquí.", isLoaded);
      // Lógica del useEffect aquí...
      load()
    };

    // Agrega el evento de enfoque
    const unsubscribeFocus = navigation.addListener("focus", onFocus);

    // Limpia el evento de enfoque al desmontar la pantalla
    return () => {
      unsubscribeFocus();
    };
   
    
  }, [load,navigation]);

  useEffect(() => {
    if (isClosed) {
      // Action after the ad is closed
      navigation.navigate('FindingPage');
    }
  }, [isClosed, navigation]);

  const [selectedOption, setSelectedOption] = useState({
    value: "",
    text: "",
  });
  const [optionSArray, setoptionSArray] = useState([
    {
      value: "México",
      text: "México",
    },
    {
      value: "Estados Unidos",
      text: "Estados Unidos",
    },
    {
      value: "España",
      text: "España",
    },
  ]);
  const handleConfirm = () => {
    setDialogVisible(false);
    navigation.navigate('FindingPage');
  };

  const handleCancel = () => {
    setDialogVisible(false);
    setLoading(true);
    loadinAd()
  };

  const loadinAd = ()=>{
    // handleInterstitialLoad()
    setLoading(false);
    handleShowInterstitial();
    
    // setTimeout(() => {
    //   // Tu lógica aquí después del tiempo de espera
    //   console.log("Después del tiempo de espera de 3 segundos");
    //   // Restablecer el estado de carga después de la ejecución
    //   handleShowInterstitial();
    //   setLoading(false);
    // }, 4000);
  }
  const handleInterstitialLoad = () => {
    load()
  };
  const handleShowInterstitial = () => {
    console.log('LOADED?',isLoaded)
    show()
    if (isLoaded) {
      show()
      handleInterstitialLoad()
    } else {
      handleInterstitialLoad()
     
    }
  };

  return (
    
    <View style={styles.container}>
      <Image
        source={require("../../../assets/people.jpg")} // Ruta relativa de la imagen
        style={styles.roundedImage}
      />
      {loading ? (
      <ActivityIndicator size="large" color="#330066" />
    ) : (
      <View style={styles.containerView}>
        <DropdownComponent
          title="What kind of partner do you want?"
          options={optionSArray}
          value={selectedOption}
          onChange={(option) => setSelectedOption(option)}
          styles={DropDownstyles}
        />
        <DropdownComponent
          title="What type of startup do you run?"
          options={optionSArray}
          value={selectedOption}
          onChange={(option) => setSelectedOption(option)}
          styles={DropDownstyles}
        />
        <DropdownComponent
          title="Preferable District?"
          options={optionSArray}
          value={selectedOption}
          onChange={(option) => setSelectedOption(option)}
          styles={DropDownstyles}
        />

        <TouchableOpacity
          style={styles.roundedButton}
          onPress={() => {setDialogVisible(true); handleInterstitialLoad()}}
        >
          <Text style={styles.buttonText}>Find</Text>
        </TouchableOpacity>
      </View>)}
      <Dialog
        isVisible={dialogVisible}
        title="Choose"
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
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
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  containerView: {
    position: "absolute",
    top: 0,
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
  roundedButton: {
    marginTop: 20,
    alignContent: "center",
    alignItems: "center",
    paddingTop: "8%",
    backgroundColor: "#a285f3",
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
    color: "white",
    fontSize: 28,
  },
});
