import React from 'react';
import { View, Pressable, Image, Text } from 'react-native';

import imgTobey from '../../assets/imgTobey.jpg';
import imgTom from '../../assets/imgTom.jpg'
import estilos from './estilos';

export default function TelaInicial() {
 return (
  <View style={ estilos.container }>
      <Image source={ imgTobey } style={ estilos.img } />
      <Text style={ estilos.titulo }>Interpretes do Homem-Aranha</Text>
      <Text style={ estilos.descricao }>Saiba mais sobre os atores que fizeram o Homem-Aranha e suas vidas.</Text>

      <Pressable
        onPress={ () => { props.navigation.navigate("Tobey") } }
        style={estilos.card}
      >
        <Image source={ imgConsole } style={ estilos.cardImg } />
        <Text style={ estilos.cardTexto}>Saiba mais sobre o ator Tobey Maguire</Text>
      </Pressable>

      <Pressable
        onPress={ () => { props.navigation.navigate("Andrew") } }
        style={estilos.card}
      >
        <Image source={ imgJogo } style={ estilos.cardImg } />
        <Text style={ estilos.cardTexto}>Saiba mais sobre o ator Andrew Garfield</Text>
      </Pressable>

      <Pressable
        onPress={ () => { props.navigation.navigate("Tom") } }
        style={estilos.card}
      >
        <Image source={ imgTom } style={ estilos.cardImg } />
        <Text style={ estilos.cardTexto}>Saiba mais sobre o ator Tom Holand</Text>
      </Pressable>
    </View>
)
}