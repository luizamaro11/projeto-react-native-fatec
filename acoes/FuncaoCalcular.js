import { Alert } from 'react-native';

export default function FuncaoCalcular(number1, number2, operador) {
    
    if (operador == 'somar') {
        const sum = parseFloat(number1) + parseFloat(number2);
    
        if (isNaN(sum)) {
            alert('Por favor, insira números válidos.');
        } else {
            alert(`A soma é: ${sum}`);
        }
    } else if (operador == 'subtrair') {
        const sub = parseFloat(number1) - parseFloat(number2);
    
        if (isNaN(sub)) {
            alert('Por favor, insira números válidos.');
        } else {
            alert(`A subtração é: ${sub}`);
        }
    } else if (operador == 'multiplicar') {
        const multi = parseFloat(number1) * parseFloat(number2);
    
        if (isNaN(multi)) {
            alert('Por favor, insira números válidos.');
        } else {
            alert(`A multiplicação é: ${multi}`);
        }
    } else {
        const divisao = parseFloat(number1) / parseFloat(number2);
    
        if (isNaN(divisao)) {
            alert('Por favor, insira números válidos.');
        } else {
            alert(`A divisão é: ${divisao}`);
        }
    }

}