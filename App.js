import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CustomButtom from './components/CustomButtom/CustomButtom';
import TextInputBox from './components/TextInputBox/TextInputBox';
import FuncaoCalcular from './acoes/FuncaoCalcular';
import { useState } from 'react';
import { Logo } from './components/Logo/Logo'
import { Picker } from 'react-native-web';
import MathUtils from './acoes/MathUtils';

export default function App() {
  const [number1, setNumber1] = useState('')
  const [number2, setNumber2] = useState('')
  const [saida, setSaida] = useState('')
  const [operator, setOperator] = useState('+')

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.container}>
        <Logo />

        <Text style={styles.title}>Calcule os Dois Números</Text>
        <TextInputBox
          value={number1}
          onChangeText={setNumber1}
          placeholder="Digite o primeiro número"
          keyboardType="numeric"
        />
        <TextInputBox
          value={number2}
          onChangeText={setNumber2}
          placeholder="Digite o segundo número"
          keyboardType="numeric"
        />

        <Picker
          selectedValue={operator}
          style={styles.picker}
          onValueChange={(itemValue) =>
            setOperator(itemValue)
          }>
          <Picker.Item label="Soma" value="+" />
          <Picker.Item label="Subtração" value="-" />
          <Picker.Item label="Multiplicação" value="*" />
          <Picker.Item label="Divisão" value="/" />
        </Picker>

        <CustomButtom 
          title='Calcular' 
          onPress={() => MathUtils.funcaoCalculo(number1, number2, operator, setSaida)}
          style={styles.button}
        />

        <Text>{saida ? saida : ''}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  title: {
    fontSize: 24,
    marginButton: 20,
  },
  scroll:{
    backgroundColor: '#fff',
  },
  picker: {
    height: 50,
    width: 100,
    borderRadius: 8
  }
});
