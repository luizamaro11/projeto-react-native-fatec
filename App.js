import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert } from 'react-native';
import CustomButtom from './components/CustomButtom/CustomButtom';
import TextInputBox from './components/TextInputBox/TextInputBox';
import FuncaoCalcular from './acoes/FuncaoCalcular';
import { useState } from 'react';

export default function App() {
  const [number1, setNumber1] = useState('')
  const [number2, setNumber2] = useState('')

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

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

      <CustomButtom 
        title='Somar' 
        onPress={() => FuncaoCalcular(number1, number2, 'somar')}
        style={styles.button} 
      />

      <CustomButtom 
        title='Subtrair' 
        onPress={() => FuncaoCalcular(number1, number2, 'subtrair')}
        style={styles.button} 
      />

      <CustomButtom 
        title='Multiplicar' 
        onPress={() => FuncaoCalcular(number1, number2, 'multiplicar')}
        style={styles.button} 
      />

      <CustomButtom 
        title='Dividir' 
        onPress={() => FuncaoCalcular(number1, number2, 'dividir')}
        style={styles.button}
      />
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
  }
});
