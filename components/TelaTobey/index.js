
import React from 'react';
import { View, Image, Text,  ScrollView } from 'react-native';

import estilos from './estilos';

import imgTobeyM from '../../assets/imgTobeyM.jpg'


export default function TelaTobey() {
const Navigation = useNavigation();
 return (
  <ScrollView style={estilos.container}>
  <View style={ estilos.box }>
    <Image source={ imgTobeyM } style={ estilos.img } />
    <Text style={ estilos.titulo }>Tobey Maguire</Text>
    <Text style={ estilos.paragrafo }>Tobias Vincent Maguire, mais conhecido como Tobey Maguire, é um ator e produtor cinematográfico americano que iniciou sua carreira no final da década de 1980. É conhecido por seu papel como Peter Parker / Homem-Aranha na trilogia de filmes Spider-Man de Sam Raimi e em Spider-Man: No Way Home.</Text>
   </View>
</ScrollView>
  );
}