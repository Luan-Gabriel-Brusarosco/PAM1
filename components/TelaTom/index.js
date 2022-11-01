import React from 'react';
import { ScrollView, View, Text, ImageBackground } from 'react-native';

import imgTomH from '../../assets/imgTomH.png';
import estilos from './estilos';


export default function TelaTom () {
  return (
    <ScrollView>
      <View style={ estilos.container }>
        <Text style={ estilos.titulo }>o 3° Interprete do Homem-Aranha</Text>
        <Text style={ estilos.descricao }>Saiba um pouco da vida de Tom Holand.</Text>
        <View style={ estilos.boxJogo }>
          <ImageBackground source={ imgTomH } style={ estilos.card }>
            <Text style={ estilos.cardTitulo }>Tom Holand</Text>
          </ImageBackground>

          <Text style={ estilos.paragrafo }>Tom Holland, conhecido por atuar na saga do super-herói Homem Aranha(2017), é um ator, dançarino e dublador britânico. O ator vem fazendo sucesso, principalmente entre o público jovem, devido ao seu carisma e a boa interpretação no papel de Peter Parker em Spider Man</Text>
        </View>
      </View>
    </ScrollView>
  )
}