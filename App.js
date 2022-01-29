/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const calculaLetraNif = elDni => {
  let dniIntroducido = parseInt(elDni);
  if (!isNaN(dniIntroducido)) {
    let posicion = dniIntroducido % 23;
    return letras[posicion];
  } else {
    return NaN;
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dni: '',
      letraNif: '',
    };
  }

  //Forma asíncrona
  verificaNIF = elDni => {
    this.setState({dni: elDni});
    if (elDni.length === 8) {
      let letra = calculaLetraNif(elDni);
      this.setState({letraNif: letra});
    } else {
      this.setState({letraNif: ' '});
    }
  };

  /* Para evitar la asincronía y que el dato esté totalmente actualizado, se introduce en una función flecha
  verificaNIF = elDni => {
    this.setState({dni: elDni}, () => {
      if (this.state.dni.length === 8) {
        let letra = calculaLetraNif(elDni);
        this.setState({letraNif: letra});
      } else {
        this.setState({letraNif: ' '});
      }
    });
  };
  */

  render() {
    return (
      <View>
        <View style={{flexDirection: 'row'}}>
          <Text>DNI:</Text>
          <TextInput
            onChangeText={this.verificaNIF}
            value={this.state.dni}
            placeholder="Escribe el DNI"
            keyboardType="numeric"
            underlineColorAndroid="blue"
            maxLength={8}></TextInput>
          <TextInput
            placeholder="Letra"
            value={this.state.letraNif}
            underlineColorAndroid="blue"
            editable={false}></TextInput>
        </View>
      </View>
    );
  }
}

const letras = [
  'T',
  'R',
  'W',
  'A',
  'G',
  'M',
  'Y',
  'F',
  'P',
  'D',
  'X',
  'B',
  'N',
  'J',
  'Z',
  'S',
  'Q',
  'V',
  'H',
  'L',
  'C',
  'K',
  'E',
  'T',
];

export default App;
