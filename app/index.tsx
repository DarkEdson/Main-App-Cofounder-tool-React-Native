import { Text, View , ScrollView, StyleSheet , TouchableOpacity, Image } from 'react-native';

import { Link } from 'expo-router';

import '@tamagui/core/reset.css'
import config   from './tamagui.config'
import { TamaguiProvider, createTamagui } from 'tamagui'
import TextBox from './components/textBox';
import Canvas from 'react-native-canvas';
import React, { useState , useRef } from 'react';

export default function Page(this: any) {
  const [textCustomerSegments, setTextCustomerSegments] = useState('');
  const [textValuePropositions, setTextValuePropositions] = useState('');
  const [textChannels, setTextChannels] = useState('');
  const [textCustomerRelationships, setTextCustomerRelationships] = useState('');
  const [textRevenueStreams, setTextRevenueStreams] = useState('');
  const [textKeyResources, setTextKeyResources] = useState('');
  const [textKeyActivities, setTextKeyActivities] = useState('');
  const [textKeyPartners, setTextKeyPartners] = useState('');
  const [textCostStructures, setTextCostStructures] = useState('');
  const [canvasImage, setCanvasImage] = useState<string | null>(null);
  const canvasRef = useRef<Canvas>(null);

  const handleTextChangeCustomerSegments = (newText: string) => {
    setTextCustomerSegments(newText);
  };
  const handleTextValuePropositions = (newText: string) => {
    setTextValuePropositions(newText);
  };
  const handleTextChannels = (newText: string) => {
    setTextChannels(newText);
  };
  const handleTextCustomerRelationships = (newText: string) => {
    setTextCustomerRelationships(newText);
  };
  const handleTextRevenueStreams = (newText: string) => {
    setTextRevenueStreams(newText);
  };
  const handleTextKeyResources = (newText: string) => {
    setTextKeyResources(newText);
  };
  const handleTextKeyActivities = (newText: string) => {
    setTextKeyActivities(newText);
  };
  const handleTextKeyPartners = (newText: string) => {
    setTextKeyPartners(newText);
  };
  const handleTextCostStructures = (newText: string) => {
    setTextCostStructures(newText);
  };
  const handlePress = () => {
    // Acciones a realizar cuando se presiona el TouchableOpacity
    console.log('TouchableOpacity presionado');
    if (canvasRef.current) {
      console.log('access to if')
      drawCanvas(canvasRef.current);
    }
  };
  const drawCanvas = async (canvas: Canvas) => {
    console.log('access canvas')
    if (!canvas) return;
    console.log('flag 0 canvas',canvas.getContext('2d'))
    const context = canvas.getContext('2d');
    console.log('pass context canvas', context)
    // Limpiar el canvas antes de dibujar
    context.clearRect(0, 0, canvas.width, canvas.height);
    console.log('pass clear canvas')
    // Configuración de estilo
    context.fillStyle = 'lightgray';
    context.fillRect(0, 0, canvas.width, canvas.height);
    console.log('flag 1 canvas')
    // Configuración de texto
    context.font = '20px Arial';
    context.fillStyle = 'black';
    console.log('flag 2 canvas')
  
    // Dibujar los textos
    context.fillText('Customer Segments: ' + textCustomerSegments, 10, 30);
    context.fillText('Value Propositions: ' + textValuePropositions, 10, 60);
    // Repite para los demás textos
    console.log('pre try canvas')
    try {
      console.log('access try canvas')
      // Obtener la URL de los datos y actualizar el estado con la imagen generada
      const dataUrl = await new Promise<string>((resolve) => {
        canvas.toDataURL('image/png').then((dataUrl) => {
          resolve(dataUrl);
        }).catch((error)=>{
          console.log('promise', error)
        });
      });
  
      setCanvasImage(dataUrl);
    } catch (error) {
      console.error('Error al obtener la URL de los datos:', error);
    }
  };
  

  return (
    <TamaguiProvider config={config}>
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
    <View>
      <Link href="/about/about">About</Link>
      <Text>Hello Time</Text>
      <TextBox title="Customer Segments:" placeholder="Add Customer Segments" onChangeText={handleTextChangeCustomerSegments} />
      <TextBox title="Value Propositions:" placeholder="Add Value Propositions" onChangeText={handleTextValuePropositions} />
      <TextBox title="Channels:" placeholder="Add Channels" onChangeText={handleTextChannels} />
      <TextBox title="Customer Relationships:" placeholder="Add Customer Relationships" onChangeText={handleTextCustomerRelationships} />
      <TextBox title="Revenue Streams:" placeholder="Add Revenue Streams" onChangeText={handleTextRevenueStreams} />
      <TextBox title="Key Resources:" placeholder="Add Key Resources" onChangeText={handleTextKeyResources} />
      <TextBox title="Key Activities:" placeholder="Add Key Activities" onChangeText={handleTextKeyActivities} />
      <TextBox title="Key Partners:" placeholder="Add Key Partners" onChangeText={handleTextKeyPartners} />
      <TextBox title="Cost Structures:" placeholder="Cost Structures" onChangeText={handleTextCostStructures} />
      <Canvas ref={canvasRef} style={styles.canvas} />
      <TouchableOpacity onPress={handlePress}>
          <View style={styles.touchableOpacity}>
            <Text>Generate Business Canvas</Text>
          </View>
      </TouchableOpacity>
      {canvasImage && <Image style={{ width: 100, height: 100 }} source={{ uri: canvasImage }} />}
    </View>
    </ScrollView>
    </TamaguiProvider>
  );
}
const styles = StyleSheet.create({
  canvas: {
    width: 300,
    height: 200,
    borderWidth: 1,
    borderColor: 'black',
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingVertical: 20,
  },
  touchableOpacity: {
    padding: 10,
    backgroundColor: 'lightgray',
    borderRadius: 5,
    marginTop: 10,
  },
});